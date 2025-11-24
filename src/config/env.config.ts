export interface EnvConfig {
  zApiInstanceId: string;
  zApiInstanceToken: string;
  zApiClientToken: string;
  zApiBaseUrl: string;
}

export const getEnvConfig = (): EnvConfig => ({
  zApiInstanceId: process.env.Z_API_INSTANCE_ID || '',
  zApiInstanceToken: process.env.Z_API_INSTANCE_TOKEN || '',
  zApiClientToken: process.env.Z_API_CLIENT_TOKEN || '',
  zApiBaseUrl: `https://api.z-api.io/instances/${process.env.Z_API_INSTANCE_ID}/token/${process.env.Z_API_INSTANCE_TOKEN}`,
});
