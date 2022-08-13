import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import { auth0 } from '../config';

const authorize = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${auth0.domain}/.well-known/jwks.json`,
  }),
  audience: auth0.audience,
  issuer: auth0.domain,
  algorithms: ['RS256'],
});

export default authorize;
