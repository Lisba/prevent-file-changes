import { getChangedFiles } from './gitUtils.js';
import { filterToFindProtectedFiles } from './fileUtils.js';

export const preventFileChanges = ({ files = [], patterns = [] }) => {
  try {
    const changedFiles = getChangedFiles();
    const protectedFiles = filterToFindProtectedFiles(changedFiles, { files, patterns });

    if (protectedFiles.length > 0) {
      console.error(
        `🚫 Error: The following files are protected and cannot be modified: [ ${protectedFiles.join(
          ', '
        )} ]`
      );
      process.exit(1);
    }

    console.log('✨ Successful Execution!');
    process.exit(0);
  } catch (error) {
    console.error('🚫 Execution Error:', error.message);
    process.exit(1);
  }
};
