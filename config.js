const dotenv = require('dotenv').config()
const path = require('path')

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  MYSQL_HOST: process.env.MYSQL_HOST || 'remotemysql.com',
  MYSQL_PORT: process.env.MYSQL_PORT || 3001,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || '5atQzokoAZ',
  MYSQL_USER: process.env.MYSQL_USER || '5atQzokoAZ',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'GQUrZaHS7E',

}