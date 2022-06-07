import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private readonly service: UsersService) { }

    @Get()
    getUserList() {
        return this.service.getUserList();
    }

    @Get('/:id')
    getUser(@Param('id') id: number) {
        return this.service.getUser(id);
    }

    @Post()
    createUser(@Body() body: UserDTO) {
        return this.service.createUser(body);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: number, @Body() body: UserDTO){
        return this.service.updateUser(id, body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        this.service.deleteUser(id);
    }
}