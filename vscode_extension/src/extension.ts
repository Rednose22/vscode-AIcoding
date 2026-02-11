import * as vscode from 'vscode';
import { BuildTasksProvider } from './buildTasksProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log('========================================');
	console.log('Posit Workbench Build Tab extension is now active!');
	console.log('========================================');

	// Create the tree data provider
	const buildTasksProvider = new BuildTasksProvider();
	
	// Register the tree view
	const treeView = vscode.window.createTreeView('positBuildTab', {
		treeDataProvider: buildTasksProvider,
		showCollapseAll: false
	});

	console.log('TreeView created successfully');

	// Register commands
	context.subscriptions.push(
		vscode.commands.registerCommand('positBuild.unitTest', () => {
			runCurrentTestFile();
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('positBuild.devtoolsTest', () => {
			runBuildTask('Devtools Test', 'devtools::load_all(); devtools::test()');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('positBuild.devtoolsCheck', () => {
			runBuildTask('Devtools Check', 'devtools::load_all(); devtools::check()');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('positBuild.cleanInstall', () => {
			runBuildTask('Clean & Install', 'devtools::clean_dll(); devtools::install()');
		})
	);

	context.subscriptions.push(treeView);
}

async function runCurrentTestFile() {
	// Get the currently active editor
	const editor = vscode.window.activeTextEditor;
	
	if (!editor) {
		vscode.window.showWarningMessage('No file is currently open. Please open a test file.');
		return;
	}

	const filePath = editor.document.uri.fsPath;
	const fileName = editor.document.fileName;

	// Check if it's an R file
	if (!fileName.endsWith('.R') && !fileName.endsWith('.r')) {
		vscode.window.showWarningMessage('Current file is not an R file. Please open an R test file.');
		return;
	}

	// Check if it's in a tests directory
	const isTestFile = filePath.includes('\\tests\\') || filePath.includes('/tests/') ||
					   fileName.toLowerCase().includes('test');

	if (!isTestFile) {
		vscode.window.showWarningMessage('Current file does not appear to be a test file. Test files should be in a "tests" directory or contain "test" in the filename.');
		return;
	}

	// Convert Windows path to R-compatible path (forward slashes)
	const rFilePath = filePath.replace(/\\/g, '/');

	// Create command to run the specific test file
	const command = `devtools::load_all(); testthat::test_file("${rFilePath}")`;

	runBuildTask(`Test: ${fileName}`, command);
}

async function runBuildTask(taskName: string, command: string) {
	// Always create a new R Interactive terminal for each build task
	const terminal = vscode.window.createTerminal({
		name: `R Interactive - ${taskName}`,
		shellPath: 'R.exe',
		shellArgs: ['--interactive', '--no-save']
	});
	
	terminal.show();
	
	// Show output channel for better visibility
	const outputChannel = vscode.window.createOutputChannel(`Posit Build: ${taskName}`);
	outputChannel.show();
	outputChannel.appendLine(`Running ${taskName}...`);
	outputChannel.appendLine(`Command: ${command}`);
	outputChannel.appendLine('-----------------------------------');
	
	terminal.sendText(command);
	
	vscode.window.showInformationMessage(`Running ${taskName}...`);
}

export function deactivate() {}
