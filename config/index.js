const env = 'development';

export const endpoint =  env === 'development'
    ? 'http://localhost:4000/graphql'
    : 'http://46.101.46.212:4000/graphql';
