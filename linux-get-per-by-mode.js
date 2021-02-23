// 源：https://code-maven.com/system-information-about-a-file-or-directory-in-nodejs
function getModeInfo(mode) {
  const data = {
    owner: {
      r: mode & parseInt('400', 8) ? 1 : 0,
      w: mode & parseInt('200', 8) ? 1 : 0,
      x: mode & parseInt('100', 8) ? 1 : 0,
    },
    group: {
      r: mode & parseInt('40', 8) ? 1 : 0,
      w: mode & parseInt('20', 8) ? 1 : 0,
      x: mode & parseInt('10', 8) ? 1 : 0,
    },
    other: {
      r: mode & 4 ? 1 : 0,
      w: mode & 2 ? 1 : 0,
      x: mode & 1 ? 1 : 0,
    }
  };
  return data;
}
