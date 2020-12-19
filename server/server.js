require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-session');
const koaBody = require('koa-body');
const mount = require('koa-mount');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const api = require('./api');

const server = new Koa();
server.keys = [process.env.KEYS];

server.use(logger());
server.use(koaBody());
server.use(cors());
server.use(session(server));
server.use(helmet());
server.use(mount(api, '/'));

module.exports = server;
