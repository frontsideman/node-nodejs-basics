const parseArgs = () => {
  const resArray = [];
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    if (args[i]?.startsWith('--')) {
      if (args[i + 1]?.startsWith('--')) {
        resArray.push(`${args[i]} undefined`);
        continue;
      }
      resArray.push(`${args[i]} ${args[i + 1]}`);
    }
  }

  return resArray.join(' ');
};

parseArgs();
