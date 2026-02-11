import * as vscode from 'vscode';

export class BuildTasksProvider implements vscode.TreeDataProvider<BuildTaskItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<BuildTaskItem | undefined | null | void> = new vscode.EventEmitter<BuildTaskItem | undefined | null | void>();
	readonly onDidChangeTreeData: vscode.Event<BuildTaskItem | undefined | null | void> = this._onDidChangeTreeData.event;

	constructor() {}

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: BuildTaskItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: BuildTaskItem): Thenable<BuildTaskItem[]> {
		if (element) {
			return Promise.resolve([]);
		} else {
			return Promise.resolve([
				new BuildTaskItem(
					'Run Current Test File',
					'Run tests in the currently open R test file using testthat::test_file()',
					'positBuild.unitTest',
					vscode.TreeItemCollapsibleState.None,
					'beaker'
				),
				new BuildTaskItem(
					'Devtools Test',
					'Run devtools::test() on the package',
					'positBuild.devtoolsTest',
					vscode.TreeItemCollapsibleState.None,
					'check-all'
				),
				new BuildTaskItem(
					'Devtools Check',
					'Run devtools::check() on the package',
					'positBuild.devtoolsCheck',
					vscode.TreeItemCollapsibleState.None,
					'checklist'
				),
				new BuildTaskItem(
					'Clean & Install',
					'Clean DLL and install the package',
					'positBuild.cleanInstall',
					vscode.TreeItemCollapsibleState.None,
					'refresh'
				)
			]);
		}
	}
}

export class BuildTaskItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly tooltip: string,
		public readonly commandId: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		iconName?: string
	) {
		super(label, collapsibleState);

		this.tooltip = tooltip;
		this.description = '';
		
		// Set the command that will be executed when the item is clicked
		this.command = {
			command: commandId,
			title: label,
			arguments: []
		};

		// Set the icon using VS Code's built-in icons
		if (iconName) {
			this.iconPath = new vscode.ThemeIcon(iconName);
		}
	}
}
