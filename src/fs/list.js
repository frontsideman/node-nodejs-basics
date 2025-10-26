import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const CONFIG = {
  dirName: 'files',
  errorMessage: 'FS operation failed',
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
