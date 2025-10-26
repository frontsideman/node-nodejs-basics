import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join } from 'node:path';

const CONFIG = {
  file: 'fileToRead.txt',
  dirName: 'files',
};

const __dirname = import.meta.dirname;
const targetFilePath = join(__dirname, CONFIG.dirName, CONFIG.file);

const read = async () => {
  const input = createReadStream(targetFilePath);

  input.on('error', (err) => {
    console.error(err);
  });
  input.pipe(stdout, { end: false });
  input.on('end', () => {
    stdout.write('\n');
    stdout.end();
  });
};

await read();
