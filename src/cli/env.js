const parseEnv = () => {
  const resArray = [];

  for (const key in process.env) {
    if (key.startsWith('RSS_')) {
      resArray.push(`${key}=${process.env[key]}`);
    }
  }
  return resArray.join('; ');
};

parseEnv();
