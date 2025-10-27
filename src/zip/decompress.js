import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const CONFIG = {
  fileFrom: 'archive.gz',
  fileTo: 'ttt.txt',
  dirName: 'files',
};

const __dirname = import.meta.dirname;
const targetFileFromPath = join(__dirname, CONFIG.dirName, CONFIG.fileFrom);
const targetFileToPath = join(__dirname, CONFIG.dirName, CONFIG.fileTo);

const decompress = async () => {
  const gzip = createGunzip();
  const sourceReadStream = createReadStream(targetFileFromPath);
  const destinationWriteStream = createWriteStream(targetFileToPath);

  try {
    await pipeline(sourceReadStream, gzip, destinationWriteStream);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

await decompress();
