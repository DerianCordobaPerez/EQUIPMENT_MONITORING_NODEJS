export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_PORT = process.env.DB_PORT || 27017
export const DB_NAME = process.env.DB_NAME || 'test'
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const PORT = process.env.PORT || 3000
export const SECRET_SESSION = process.env.SECRET_SESSION || 'secret'
export const MONGODB_URL = 
    NODE_ENV === 'production'
      ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
      : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`