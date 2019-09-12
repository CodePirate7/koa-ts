import "reflect-metadata"; 
import { createKoaServer } from "routing-controllers";
import controllers from "./controllers";
import Static = require("koa-static");
import Logger = require("koa-logger");
import config from './config'

const app = createKoaServer({
   controllers
});

app.use( Static(__dirname + '/public/image') );
app.use( Logger() );

app.listen( config.port ,() => {
   console.log( `[${config.name}] 启动成功，http://${ config.host }:${ config.port }` )
});