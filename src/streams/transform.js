import { Transform } from 'node:stream';
import { stdout, stdin } from 'node:process';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const upperCaseData = chunk.toString().split('').reverse().join('');
      callback(null, upperCaseData);
    },
  });

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
