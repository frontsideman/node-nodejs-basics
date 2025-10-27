import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { join } from 'path';
import { readFileSync } from 'node:fs';

import './files/c.cjs';

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const random = Math.random();

const getFileContent = (filePath) => {
  try {
    const fullPath = join(__dirname, 'files', filePath);
    const fileContent = readFileSync(fullPath);
    return JSON.parse(fileContent);
  } catch (err) {
    console.log(err);
  }
};

const unknownObject =
  random > 0.5 ? getFileContent('a.json') : getFileContent('b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
