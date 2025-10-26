import { rename as renameFile } from 'node:fs/promises';
import { join } from 'path';

const CONFIG = {
  file: 'wrongFilename.txt',
  newFile: 'properFilename.txt',
  dirName: 'files',
  errorMessage: 'FS operation failed',
};

const __dirname = import.meta.dirname;
const targetDirPath = join(__dirname, CONFIG.dirName);
const targetOldFilePath = join(targetDirPath, CONFIG.file);
const targetNewFilePath = join(targetDirPath, CONFIG.newFile);

const rename = async () => {
  try {
    await renameFile(targetOldFilePath, targetNewFilePath);
    console.log(
      `successfully renamed from ${CONFIG.file} to ${CONFIG.newFile}`
    );
  } catch (error) {
    throw new Error(CONFIG.errorMessage);
  }
};

await rename();
