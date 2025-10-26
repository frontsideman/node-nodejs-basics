import { readdir, copyFile, mkdir } from 'node:fs/promises';
import { join } from 'path';

const CONFIG = {
  dirName: 'files',
  copyDirName: 'files_copy',
  errorMessage: 'FS operation failed',
};

const __dirname = import.meta.dirname;
const targetDirPath = join(__dirname, CONFIG.dirName);
const copyDirPath = join(__dirname, CONFIG.copyDirName);

const copy = async () => {
  try {
    await mkdir(copyDirPath);
  } catch (error) {
    throw new Error(CONFIG.errorMessage);
  }

  try {
    const files = await readdir(targetDirPath);

    for (const file of files) {
      const targetFilePath = join(targetDirPath, file);
      const copyFilePath = join(copyDirPath, file);
      await copyFile(targetFilePath, copyFilePath);
    }
  } catch (err) {
    throw new Error(CONFIG.errorMessage);
  }
};

await copy();
