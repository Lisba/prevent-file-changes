export const filterToFindProtectedFiles = (changedFiles, { files, patterns }) => {
  return changedFiles.filter(
    (file) => files.includes(file) || patterns.some((pattern) => new RegExp(pattern).test(file))
  );
};
