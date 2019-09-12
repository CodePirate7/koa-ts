import { Controller, Get} from "routing-controllers";

let html = `
  <div style="pading: 20px;margin: 30px auto;width: 75%;"> 
  <h3> 装饰器风格的Koa2模板 </h3>
  <h4> 装饰器文档地址：<a href="https://github.com/typestack/routing-controllers#installation" target="_blank">routing-controllers</a></h4>
  </div>
  `
@Controller()
export default class homeController {
    @Get("/")
    index() {
       return html;
    }
}