import { writeFile } from 'node:fs/promises';
import { join } from 'path';

const CONFIG = {
  file: 'fresh.txt',
  dirName: 'files',
  content: 'I am fresh and young',
  errorMessage: 'FS operation failed',
};

const __dirname = import.meta.dirname;
const targetDirPath = join(__dirname, CONFIG.dirName);
const targetFilePath = join(targetDirPath, CONFIG.file);

const create = async () => {
  try {
    await writeFile(targetFilePath, CONFIG.content, {
      encoding: 'utf8',
      flag: 'wx',
    });
  } catch (err) {
    throw new Error(CONFIG.errorMessage);
  }
};

await create();
