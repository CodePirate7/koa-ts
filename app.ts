import "reflect-metadata"; 
import { createKoaServer } from "routing-controllers";
import controllers from "./controllers";
import Static = require("koa-static");
import Logger = require("koa-logger");
import config from './config'

const app = createKoaServer({
   controllers
});


// 设置静态资源目录
app.use( Static(__dirname + '/public/image') );
// 请求日志信息
app.use( Logger() );

app.listen( config.port ,() => {
   console.log( `[${config.name}] 启动成功，http://${ config.host }:${ config.port }` )
});