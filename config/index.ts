// process.env.NODE_ENV ? 


const devConfig = {
  name: 'Koa-ts 模板',
  port: 3000,
  host: 'localhost'
}

const proConfig = {
  name: 'Koa-ts 模板',
  port: 3000,
  host: 'http://xxx.xx.xx'
}

export = process.env.NODE_ENV ? devConfig : proConfig

