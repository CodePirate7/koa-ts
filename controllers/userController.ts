import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export default class UserController {

    @Get("/users")
    getAll() {
       return `<h1>Hello Koa2</h1>`;
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
       return "This action returns user #" + id;
    }

    @Post("/users")
    post(@Body() user: any) {
       return "Saving user...";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
       return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
       return "Removing user...";
    }

}