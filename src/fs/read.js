import { readFile } from 'node:fs/promises';
import { join } from 'path';

const CONFIG = {
  file: 'fileToRead.txt',
  dirName: 'files',
  errorMessage: 'FS operation failed',
};

const __dirname = import.meta.dirname;
const targetDirPath = join(__dirname, CONFIG.dirName);
const targetFilePath = join(targetDirPath, CONFIG.file);

const read = async () => {
  try {
    const content = await readFile(targetFilePath, { encoding: 'utf8' });
    console.log(content);
  } catch (error) {
    throw new Error(CONFIG.errorMessage);
  }
};

await read();
