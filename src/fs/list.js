import { readdir } from 'node:fs/promises';
import { join } from 'path';

const CONFIG = {
  dirName: 'files',
  errorMessage: 'FS operation failed',
};

const __dirname = import.meta.dirname;
const targetDirPath = join(__dirname, CONFIG.dirName);

const list = async () => {
  try {
    const files = await readdir(targetDirPath);
    console.log(files);
  } catch (err) {
    throw new Error(CONFIG.errorMessage);
  }
};

await list();
