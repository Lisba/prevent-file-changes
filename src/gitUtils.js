import { execSync } from 'child_process';

export const getChangedFiles = () => {
  const referenceToCompare = execSync(
    'git rev-parse --verify HEAD >/dev/null 2>&1 && echo HEAD || echo 4b825dc642cb6eb9a060e54bf8d69288fbee4904'
  );
  return execSync(`git diff --cached --name-only ${referenceToCompare}`)
    .toString()
    .trim()
    .split('\n');
};
