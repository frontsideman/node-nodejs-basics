import { createReadStream, createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { join } from 'node:path';

const CONFIG = {
  file: 'fileToWrite.txt',
  dirName: 'files',
};

const __dirname = import.meta.dirname;
const targetFilePath = join(__dirname, CONFIG.dirName, CONFIG.file);

const write = async () => {
  const input = createWriteStream(targetFilePath);

  input.on('error', (err) => {
    console.error(err);
  });

  stdin.pipe(input);
};

await write();
