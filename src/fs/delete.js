import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const CONFIG = {
  file: 'fileToRemove.txt',
  dirName: 'files',
  errorMessage: 'FS operation failed',
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetDirPath = join(__dirname, CONFIG.dirName);
const targetFilePath = join(targetDirPath, CONFIG.file);

const remove = async () => {
  try {
    await unlink(targetFilePath);
    console.log(`successfully deleted ${CONFIG.file}`);
  } catch (error) {
    throw new Error(CONFIG.errorMessage);
  }
};

await remove();
