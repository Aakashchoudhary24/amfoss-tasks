# Eureka
A CLI tool that allows you to quickly write down an idea using your preferred editor, and then have the idea committed and pushed to your idea git repository.

This app works on the basic need of every programmer i.e. having an idea in an instant and storing it even faster avoiding the risk of forgetting it later on

## Features
- Capture ideas from the terminal with your favorite editor.
- Git integration for storing ideas in version control.
- Customizable idea storage location.

## Installation
### Cargo (for Rust users)
```bash
$ cargo install eureka
```
- Rust stable version will always be supported

### Homebrew
```bash
$ brew install eureka
```
## Usage 
The first time you run eureka it will ask for the path to your ideas repo. This configuration will be stored in your XDG Base Directory if found, otherwise in $HOME/.config/eureka.

After the setup simply run eureka to capture an idea. It will then be committed and pushed to the origin remote and the main branch.

View your stored ideas with the -v or --view flag.
```bash
$ eureka --view
```
### Flags
```bash
    --clear-config    Clear your stored configuration
-v, --view            View ideas with your $PAGER env variable. If unset use less
```
### Create a new idea
```bash
eureka new "My Idea"
```
### View all your ideas 
```bash
eureka list
```
### Edit an idea
```bash
eureka edit <idea_id>
```
### Push your ideas to the repository
```bash
eureka push
```

## Configuration
You can configure Eureka to store ideas in a custom directory by setting the EUREKA_DIR environment variable:
```bash
export EUREKA_DIR=~/my-ideas
```

For detailed usage and further reading refer the <a href="https://github.com/Aakashchoudhary24/amfoss-tasks/task-06/Documentation.md">Documentation</a>.

## Repository referred for this task : 
- <a href="https://github.com/simeg/eureka/tree/master">eureka</a>