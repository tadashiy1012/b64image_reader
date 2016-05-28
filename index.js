const fs = require('fs');
const path = require('path');

module.exports = (tgtDirPath, tgtExt = 'jpg') => {
  const files = fs.readdirSync(tgtDirPath).filter((arg) => {
    const filePath = path.join(tgtDirPath, arg);
    const ext = arg.substring(arg.lastIndexOf('.') + 1);
    return !fs.statSync(filePath).isDirectory() && ext === tgtExt;
  });
  const datas = files.map((file) => {
    return 'data:image/' + tgtExt + ';base64,'
      + fs.readFileSync(path.join(tgtDirPath, file)).toString('base64');
  })
  return datas;
};
