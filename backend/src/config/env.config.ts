export const envConfig = () => ({
  database: {
    url: process.env.DATABASE_URL,
    direct_url: process.env.DIRECT_URL,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '24h',
  },

  port: parseInt(process.env.PORT, 10) || 3000,
});

export type EnvConfig = ReturnType<typeof envConfig>;
