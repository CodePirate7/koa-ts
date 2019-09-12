import "reflect-metadata"; 
import { createKoaServer } from "routing-controllers";
import controllers from "./controllers";
import config from './config'

const app = createKoaServer({
   controllers
});

app.listen( config.port ,() => {
   console.log( `[${config.name}] 启动成功，http://${ config.host }:${ config.port }` )
});