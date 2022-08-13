export const dbConnection = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
export const dbPoolMin = parseInt(process.env.DB_POOL_MIN || '', 10) || 2;
export const dbPoolMax = parseInt(process.env.DB_POOL_MAX || '', 10) || 30;

export const environment = process.env.ENVIRONMENT || 'development';
export const port = parseInt(process.env.PORT || '', 10) || 4000;

export const auth0 = {
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE
}
