import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const CONFIG = {
  fileFrom: 'fileToCompress.txt',
  fileTo: 'archive.gz',
  dirName: 'files',
};

const __dirname = import.meta.dirname;
const targetFileFromPath = join(__dirname, CONFIG.dirName, CONFIG.fileFrom);
const targetFileToPath = join(__dirname, CONFIG.dirName, CONFIG.fileTo);

const compress = async () => {
  const gzip = createGzip();
  const sourceReadStream = createReadStream(targetFileFromPath);
  const destinationWriteStream = createWriteStream(targetFileToPath);

  try {
    await pipeline(sourceReadStream, gzip, destinationWriteStream);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

await compress();
