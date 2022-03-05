import { config } from 'dotenv';

const envLoaded = config();

if (!envLoaded) {
  throw new Error('.env not found!!');
}

const env = (
  key: string,
  defaultValue?: string | number | boolean
) => {
  return process.env[key] ?? defaultValue;
};

const envVar = {
  isDev: env('NODE_ENV', 'development') !== 'production',
  port: env('PORT', 3000),
  mongoUri: String(env('MONGO_URI', '')),
};

export default Object.freeze(envVar);
