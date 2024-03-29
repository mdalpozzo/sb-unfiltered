export const DEFAULT_THEME: 'dark' | 'light' | 'system' = 'light'

export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
export const CONTENTFUL_API_ACCESS_TOKEN =
  process.env.CONTENTFUL_API_ACCESS_TOKEN

export const env = process.env.NODE_ENV
export const IS_PROD = env === 'production'
