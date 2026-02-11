# Setup Instructions

## Prerequisites

This VS Code extension requires Node.js to compile and run. Please follow these steps:

### 1. Install Node.js

Download and install Node.js (v18 or higher) from: https://nodejs.org/

After installation, restart your terminal/VS Code and verify the installation:

```powershell
node --version
npm --version
```

### 2. Install Dependencies

Once Node.js is installed, run:

```powershell
npm install
```

This will install all required dependencies including:
- TypeScript
- VS Code API types
- ESLint and TypeScript ESLint plugins
- VS Code test framework

### 3. Compile the Extension

Compile the TypeScript code:

```powershell
npm run compile
```

Or run in watch mode (automatically recompiles on changes):

```powershell
npm run watch
```

### 4. Run the Extension

Press `F5` in VS Code to launch the Extension Development Host with your extension loaded.

## Project Structure

```
.
├── .vscode/               # VS Code workspace settings
│   ├── launch.json       # Debug configuration
│   ├── tasks.json        # Build tasks
│   ├── settings.json     # Workspace settings
│   └── extensions.json   # Recommended extensions
├── resources/            # Extension resources
│   └── build-icon.svg   # Activity bar icon
├── src/                  # Source code
│   ├── extension.ts     # Main extension entry point
│   └── buildTasksProvider.ts  # Tree view provider
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore patterns
├── .vscodeignore        # Files to exclude from package
├── package.json         # Extension manifest
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation

```

## Extension Features

The extension provides a custom view in the Activity Bar with these build tasks:

1. **Unit Tests** - Runs `Rscript -e "devtools::test()"`
2. **Devtools Test** - Runs `Rscript -e "devtools::test()"`
3. **Devtools Check** - Runs `Rscript -e "devtools::check()"`
4. **Clean & Install** - Runs `Rscript -e "devtools::clean_dll(); devtools::install()"`

Each task opens a terminal and executes the corresponding R command.

## Troubleshooting

### "Cannot find module 'vscode'" error

This is expected before running `npm install`. The error will be resolved after installing dependencies.

### Extension doesn't activate

Make sure you have an R project workspace open. The extension is designed for R package development.

## Next Steps

After completing the setup:

1. Press `F5` to launch the extension
2. In the Extension Development Host, click the "Posit Build" icon in the Activity Bar
3. Click any build task to execute it
4. The task will run in a new terminal window

## Additional Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Tree View Guide](https://code.visualstudio.com/api/extension-guides/tree-view)
- [R devtools Package](https://devtools.r-lib.org/)
