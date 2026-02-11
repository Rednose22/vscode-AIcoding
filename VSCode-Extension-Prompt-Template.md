# VS Code Extension Development Prompt Template

## 📋 Overview

This is a structured prompt template for using GitHub Copilot (or other AI assistants) to help you set up and develop a VS Code extension from scratch. It's designed to be **reusable** for any VS Code extension project.

---

## 🚀 The Master Prompt

Copy and customize the following prompt for your own VS Code extension project:

---

### PROMPT START

```
# VS Code Extension Development Request

## Project Overview
I want to create a VS Code extension with the following specifications:

### Extension Name
[YOUR_EXTENSION_NAME]

### Extension Purpose
[Describe what your extension does in 1-2 sentences]

### Target Users
[Who will use this extension? e.g., R developers, Python developers, web developers]

## Functional Requirements

### Core Features (MVP)
1. [Feature 1 - describe what it should do]
2. [Feature 2 - describe what it should do]
3. [Feature 3 - describe what it should do]
4. [Feature 4 - describe what it should do]

### User Interface Requirements
- [ ] Activity Bar icon (sidebar icon)
- [ ] Tree View (list of clickable items)
- [ ] Command Palette commands
- [ ] Status Bar item
- [ ] Webview panel
- [ ] Context menu items
- [ ] Keyboard shortcuts

(Check the ones you need)

### Interaction Requirements
[Describe how users will interact with your extension]
- What happens when user clicks a button?
- What happens when user runs a command?
- Does it need to interact with terminal?
- Does it need to read/write files?

## Technical Constraints

### Language & Framework
- Language: TypeScript (required for VS Code extensions)
- Module System: CommonJS
- Target: ES2022

### VS Code API Requirements
- Minimum VS Code version: ^1.85.0
- Required VS Code APIs:
  - [ ] vscode.window (for UI elements)
  - [ ] vscode.commands (for command registration)
  - [ ] vscode.workspace (for file/folder access)
  - [ ] vscode.terminal (for terminal integration)
  - [ ] vscode.TreeDataProvider (for tree views)
  - [ ] vscode.WebviewPanel (for webviews)

(Check the ones you need)

### External Dependencies
- List any npm packages needed: [package1, package2]
- List any external tools needed: [R, Python, etc.]

## Project Structure Requirements

Please create the following project structure:

```
my-extension/
├── .vscode/
│   ├── launch.json       # Debug configuration
│   ├── tasks.json        # Build tasks
│   └── settings.json     # Workspace settings
├── src/
│   ├── extension.ts      # Main entry point
│   └── [other source files as needed]
├── resources/
│   └── [icons and assets]
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.js          # ESLint configuration
├── .gitignore
├── .vscodeignore
├── README.md             # Usage instructions AND setup guide (include installation steps)
└── CHANGELOG.md
```

## Code Quality Requirements

### Must Follow
1. Follow VS Code extension development best practices
2. Use TypeScript strict mode
3. Proper error handling with user-friendly messages
4. Clean separation of concerns (separate files for different functionality)
5. Proper disposal of resources in deactivate()
6. All commands must be registered in package.json AND in extension.ts

### Naming Conventions
- Extension ID: lowercase with hyphens (my-extension-name)
- Command IDs: camelCase with prefix (myExtension.commandName)
- File names: camelCase for .ts files

### Documentation Requirements
- README.md must include:
  - Extension overview and features
  - **Setup/Installation section** (prerequisites, npm install, compile steps)
  - Usage instructions with examples
  - Development guide (how to contribute/modify)
- CHANGELOG.md with version history
- JSDoc comments for public functions

## Output Requirements

Please provide:

1. **Complete package.json** with:
   - All metadata (name, displayName, description, version, publisher)
   - Engine compatibility
   - Activation events
   - Contribution points (commands, views, menus)
   - Scripts (compile, watch, lint)
   - DevDependencies

2. **Complete tsconfig.json** with proper configuration

3. **Complete source files** with:
   - Main extension.ts with activate() and deactivate()
   - Separate provider files for tree views
   - Proper imports and exports

4. **VS Code configuration files** (.vscode folder)

5. **Resource files** (icons as SVG)

6. **Documentation files** (README, CHANGELOG)

## Verification Checklist

After generating the code, please verify:
- [ ] npm install runs without errors
- [ ] npm run compile runs without errors
- [ ] Pressing F5 launches the extension
- [ ] All features work as specified
- [ ] No TypeScript errors in the editor

## Additional Notes
[Any other specific requirements or preferences]
```

### PROMPT END

---

## 📝 Example: Filled Template (Posit Workbench Build Tab)

Here's how I used this template for my R development extension:

```
# VS Code Extension Development Request

## Project Overview

### Extension Name
posit-workbench-build-tab

### Extension Purpose
This extension mimics the build tab in Posit Workbench, providing quick 
access to common R package development tasks like testing, checking, 
and installing packages.

### Target Users
R package developers who use VS Code instead of RStudio/Posit Workbench

## Functional Requirements

### Core Features (MVP)
1. Run Current Test File - Run testthat::test_file() on the currently open R file
2. Devtools Test - Run devtools::test() to execute all package tests
3. Devtools Check - Run devtools::check() to validate the package
4. Clean & Install - Run devtools::clean_dll() and devtools::install()

### User Interface Requirements
- [x] Activity Bar icon (sidebar icon)
- [x] Tree View (list of clickable items)
- [x] Command Palette commands
- [ ] Status Bar item
- [ ] Webview panel
- [ ] Context menu items
- [ ] Keyboard shortcuts

### Interaction Requirements
- When user clicks a button, open a NEW R Interactive terminal
- Send the corresponding R command to the terminal
- Before test/check commands, automatically run devtools::load_all()
- For "Run Current Test File", detect the currently open file and validate it's a test file

## Technical Constraints

### VS Code API Requirements
- [x] vscode.window (for terminals and messages)
- [x] vscode.commands (for command registration)
- [x] vscode.TreeDataProvider (for tree view)
- [x] vscode.window.activeTextEditor (for current file detection)

### External Dependencies
- External tools needed: R, devtools package, testthat package

## Additional Notes
- Each build task should create a NEW R terminal (not reuse existing)
- Terminal should be named with the task name for easy identification
- Show warning if user tries to run test on non-R file
- Convert Windows file paths to R-compatible paths (forward slashes)
```

---

## 🔧 Step-by-Step Usage Guide

### Step 1: Prepare Your Requirements
Before using the prompt, think about:
- What problem does your extension solve?
- What are the core features (keep it minimal for MVP)?
- What UI elements do you need?

### Step 2: Fill in the Template
Copy the master prompt and replace all `[PLACEHOLDERS]` with your specific requirements.

### Step 3: Send to Copilot
Open VS Code with Copilot Chat and paste your filled prompt.

### Step 4: Review Generated Code
Copilot will generate:
- Project structure
- All configuration files
- Source code
- Documentation

### Step 5: Iterate
If something is missing or wrong, tell Copilot:
- "The command registration is missing in package.json"
- "Add error handling for when no file is open"
- "Change the terminal to always create a new instance"

### Step 6: Debug and Fix
When you encounter errors:
- Screenshot the error
- Send to Copilot: "I got this error, please fix it"
- Copilot will identify and fix the issue

---

## 💡 Pro Tips

### 1. Be Specific About Constraints
Bad: "Make a button that runs tests"
Good: "Make a button that runs testthat::test_file() on the currently open R file in a NEW R Interactive terminal"

### 2. Use Checklists
Copilot follows checklists well. Use `- [ ]` and `- [x]` to indicate what you need.

### 3. Provide Context
If your extension interacts with specific tools (R, Python, etc.), explain how those tools work.

### 4. Iterate Incrementally
Don't ask for everything at once. Start with MVP, then add features:
1. First: "Create the basic extension structure"
2. Then: "Add the tree view with 4 buttons"
3. Then: "Make buttons run commands in terminal"
4. Then: "Add current file detection"

### 5. Ask for Verification
End your prompt with: "After generating, verify that it compiles without errors"

---

## 📚 Common VS Code Extension Patterns

### Pattern 1: Tree View with Clickable Items
```
I need a Tree View in the sidebar with clickable items.
Each item should trigger a command when clicked.
```

### Pattern 2: Terminal Integration
```
When the command runs, open a terminal and execute a shell command.
The terminal should be visible to the user.
```

### Pattern 3: Current File Detection
```
Get the currently open file in the editor.
Validate the file type before proceeding.
Extract the file path for use in commands.
```

### Pattern 4: Webview Panel
```
Create a webview panel with HTML/CSS/JavaScript content.
Handle messages between the webview and extension.
```

### Pattern 5: File System Operations
```
Read/write files in the workspace.
Watch for file changes and react accordingly.
```

---

## 🎯 Success Metrics

Your prompt is good if Copilot generates code that:
- ✅ Compiles without errors (`npm run compile`)
- ✅ Runs without runtime errors (F5 debug)
- ✅ All features work as specified
- ✅ Follows VS Code extension best practices
- ✅ Has proper error handling
- ✅ Is well-documented

---

## 📖 Related Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Extension Samples](https://github.com/microsoft/vscode-extension-samples)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-09 | Initial template based on Posit Workbench Build Tab project |

