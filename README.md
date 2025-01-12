# prevent-file-changes

A CLI tool designed to prevent specific files or patterns from being modified and committed, ensuring better control over sensitive or protected files in your repository.

## Characteristics

- **🚫 Blocks changes to protected files during commits:** Prevents committing files or patterns defined in your configuration.
- **🎯 Supports file patterns with regular expressions:** Allows advanced configurations for targeting groups of files.
- **🔗 Integrates with Git hooks:** Can be easily set up in pre-commit hooks for seamless protection.
- **💻 CLI-friendly:** Configure file paths or patterns directly via command-line options.
- **🔧 Customizable and extensible:** Provides flexibility to adapt to your repository’s needs.
- **🌍 Works with all Git-managed projects:** Compatible across repositories and workflows.

## Content

- [prevent-file-changes](#prevent-file-changes)
  - [Characteristics](#characteristics)
  - [Content](#content)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Git hook](#git-hook)
    - [CLI](#cli)
    - [Library module](#library-module)
  - [Collaborate](#collaborate)
  - [License](#license)

## Installation

npm: `npm install --save-dev prevent-file-changes`

pnpm: `pnpm add -D prevent-file-changes`

yarn: `yarn add -D prevent-file-changes`

## Usage

### Git hook

To set it up in a Git hook, add it to your pre-commit hook. For example, using Husky, add this line to your .husky/pre-commit file:

```
prevent-file-changes -f README.md sensible.sh -p ".\*\\.env" ".*\\.log"
```

### CLI

You can run it as CLI if globally installed:

```
prevent-file-changes -f README.md sensible.sh -p ".\*\\.env" ".\*\\.log"
```

Or using `npx` if locally installed:

```
npx prevent-file-changes -f README.md sensible.sh -p ".\*\\.env" ".\*\\.log"
```

Command-line options:

- `--filesPaths` or `-f`: A list of specific files to protect.
- `--filesPatterns` or `-p`: A list of regular expressions defining patterns of files to protect.

### Library module

Or you can use it as a script importing it as a module and passing to it the files or regex's to protect as arguments:

```
import { preventFileChanges } from 'prevent-file-changes';

preventFileChanges({ files: ['file1.js'], patterns: ['.*\\.env'] });
```

## Collaborate

In order to collaborate with the project you should:

1. Fork the repo.
2. Clone the repo to work locally with `git clone repo-url`.
3. Install dependencies with `pnpm install`.
4. Develop suggested changes in a new branch (make sure you are using the prettier config, you can run `pnpm format` or install the prettier extension if you are using vsc editor to format on save).
5. Run `pnpm test` to verify your changes doesn't have major bugs.
6. Push your changes to your repo `git push [remote-repo-alias] [branch-name]`.
7. Make a pull request to the original repo.

## License

The MIT License. Full License [here](https://github.com/Lisba/prevent-file-changes/blob/master/LICENSE)
