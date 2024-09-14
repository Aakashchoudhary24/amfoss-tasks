# Eureka Documentation

## Overview

Eureka helps developers capture their ideas through the terminal. By using Git for version control, users can ensure that all their ideas are safely stored and easily retrievable.

### Features:
- Seamless Git integration for idea version control.
- A simple interface to create, edit, and list ideas.
- Customizable paths for idea storage using environment variables.

## Code Overview
The codebase is written in Rust, with key functionalities divided across various modules.
Code Overview:
Eureka is written in Rust, structured into multiple modules, each responsible for a key functionality. Below are key files and their purposes:

### eureka.rs (main file)
This file contains the entry point of the program, setting up CLI arguments using the clap library and initializing the Eureka struct with the required components like ConfigManager, Printer, Reader, and Git.

## Key components include:
1. CLI Setup: Using the clap crate, the eureka.rs file defines CLI arguments such as --view and --clear-config.
2. Eureka::new(): Initializes the core Eureka struct with ConfigManager, Printer, Reader, Git, and ProgramAccess.
3. run(): Executes the application based on the CLI options (view, clear-config).

## Key Modules called/used in eureka.rs:    
### **`config_manager.rs`**: 
Responsible for managing the configuration settings for the application, primarily dealing with the repository path (repo).
**`ConfigManager`** struct : implements **`ConfigManagement`** trait for tasks such as creating, reading, writing, and removing configuration files.
**`config.json`** : file where the configuration data is serialized to and from.
**`unit tests`** : to ensure that configuration operations (like directory creation and file read/write) behave as expected, with environment variables such as HOME and XDG_CONFIG_HOME taken into account.

### **`git.rs`**: 
Interacts with the Git repository for version control of ideas.
contains all the major functions to interact with version control (git):
1. init
2. checkout_branch
3. add
4. commit 
5. push
6. find_last_commit
7. with_credentials
8. repo_init

### **`printer.rs`**: 
Handles output formatting for terminal display.

### **`reader.rs`**: 
Reads the inputs from user for idea entry.

### **`lib.rs`** :
Serves as the core library module for the Eureka project. It defines the main Eureka struct and its functionality, managing the interaction between different modules like:

1. ConfigManager: Handles configuration operations (e.g., repository path).
2. GitManagement: Deals with Git commands like add, commit, and push.
3. Print & PrintColor: For displaying colored terminal output.
4. ProgramOpener: Manages opening external programs like a text editor or pager.
5. Reader: Reads user input for capturing ideas.

Includes the following functions whose names are self-explanatory :
1. printer
2. reader
3. ask_for_idea
4. clear_config
5. open_idea_file
6. git_add_commit_push
7. setup_repo_path

### Core Functions:
1. **`new()`**: Initializes the Eureka struct with components like the ConfigManager and Git.
2. **`run()`**: Executes the program based on provided CLI options (view, clear-config).

## Makefile
Automates common tasks related to the project build and maintenance:
1. check: Runs a release build check for potential issues.
2. ci: Combines linting, code formatting, Clippy fixes, checks, and tests for continuous integration.
3. clippy: Automatically fixes code warnings using Clippy.
4. fmt: Formats the codebase.
5. install: Installs the binary eureka to /usr/local/bin/.
6. lint: Lints the code, ensuring it adheres to formatting rules.
7. publish: Publishes the project to the Rust package registry (Crates.io).
8. release: Builds the project in release mode.
9. test: Runs tests with detailed output and limits test threads.

## codecov.yml
This configuration file is used to manage coverage reports for Codecov:
ignore: Directs Codecov to ignore the tests directory when calculating test coverage.

## Customization
Eureka can be configured using the following environment variables:
- **`$EUREKA_DIR`**: Defines where ideas should be stored.
- **`$EDITOR`**: Specifies the text editor for editing ideas.
- **`$PAGER`**: Specifies how to display lists of ideas.

See [README.md](./README.md) for installation and usage instructions.