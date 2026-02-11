# Quick Start Guide

## ✅ Setup Complete!

Your VS Code extension has been successfully set up and compiled!

## What Just Happened?

1. **npm install** - Downloaded all dependencies (TypeScript, VS Code types, ESLint, etc.) into `node_modules/` folder
2. **npm run compile** - Compiled TypeScript files from `src/` to JavaScript in `out/` folder

## Understanding npm install

**npm** (Node Package Manager) reads your `package.json` file and downloads all the libraries your extension needs:

- `@types/vscode` - VS Code API type definitions for TypeScript
- `typescript` - The TypeScript compiler
- `eslint` - Code linting tool
- `@typescript-eslint/*` - TypeScript-specific ESLint rules

All these packages are now in the `node_modules/` folder (which is ignored by git).

## Next Steps: Run Your Extension!

### Option 1: Using VS Code Debug (Recommended)
Press **F5** in VS Code to launch the Extension Development Host

### Option 2: Using PowerShell Script
```powershell
.\npm.ps1 run watch
```
Then press **F5**

### Option 3: Using Full Path
```powershell
$env:PATH = ".\node-v24.13.0-win-x64\node-v24.13.0-win-x64;" + $env:PATH
.\node-v24.13.0-win-x64\node-v24.13.0-win-x64\npm run watch
```
Then press **F5**

## Testing Your Extension

Once the Extension Development Host opens:

1. Look for the **Posit Build** icon in the Activity Bar (left sidebar)
2. Click it to see the build tasks panel
3. Click any of the 4 buttons:
   - Unit Tests
   - Devtools Test
   - Devtools Check
   - Clean & Install
4. A terminal will open and run the R command

## Common Commands

### Compile once
```powershell
.\npm.ps1 run compile
```

### Watch mode (auto-recompile on file changes)
```powershell
.\npm.ps1 run watch
```

### Run linter
```powershell
.\npm.ps1 run lint
```

## Project Structure

```
✅ out/                    # Compiled JavaScript (generated)
✅ node_modules/           # Dependencies (generated)
📝 src/extension.ts        # Main extension code
📝 src/buildTasksProvider.ts  # Tree view provider
📝 package.json            # Extension manifest
📝 tsconfig.json           # TypeScript config
```

## Troubleshooting

### Error: "node is not recognized"
Use the PowerShell script `.\npm.ps1` or set PATH:
```powershell
$env:PATH = ".\node-v24.13.0-win-x64\node-v24.13.0-win-x64;" + $env:PATH
```

### Extension doesn't show up
Make sure you pressed F5 to open the Extension Development Host, not just running in your current VS Code window.

### Build tasks don't work
The extension runs R commands - make sure R and devtools are installed on your system.

## You're Ready! 🎉

Press **F5** to see your extension in action!
