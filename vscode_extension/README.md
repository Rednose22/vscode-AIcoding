# Posit Workbench Build Tab

A VS Code extension that mimics the build tab in Posit Workbench, providing quick access to common R package development tasks.

## Features

This extension adds a new activity bar with build tasks for R package development:

- **Run Current Test File**: Runs tests in the currently open R test file using `testthat::test_file()`
- **Devtools Test**: Execute `devtools::test()` to run all package tests
- **Devtools Check**: Run `devtools::check()` to validate your package
- **Clean & Install**: Clean DLL files and install the package

## Requirements

- **Node.js** (v18 or higher) - Required to compile and run the extension
- **R** must be installed on your system
- The `devtools` R package should be installed

> **Note**: Before proceeding, please install Node.js from https://nodejs.org/ if not already installed.

## Usage

1. Click on the Posit Build icon in the Activity Bar (left sidebar)
2. Click on any of the build tasks to execute them
3. The task will run in a new terminal window

## Extension Structure

- `src/extension.ts` - Main extension activation and command registration
- `src/buildTasksProvider.ts` - Tree view data provider for build tasks
- `package.json` - Extension manifest with contributions
- `resources/build-icon.svg` - Activity bar icon

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```bash
npm install
```

### Compile

```bash
npm run compile
```

### Watch Mode

```bash
npm run watch
```

### Run Extension

1. Press `F5` to open a new VS Code window with the extension loaded
2. The extension will be activated when you open a folder containing an R package

## Release Notes

### 0.0.1

Initial release with basic build task buttons:
- Unit Tests
- Devtools Test
- Devtools Check
- Clean & Install

## License

MIT
