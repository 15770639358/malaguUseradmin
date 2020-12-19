import {Body, Controller, Get, Post, Query} from '@malagu/mvc/lib/node';
import { Autowired } from '@malagu/core';
import { User } from '../../entity/authVetify/user';
import { UserService } from '../../service/authVetify/userService';
import {resMessage} from "../../utils/resMessage";

@Controller('user')
export class UserController {

    @Autowired()
    private userService: UserService

    // @Post('login')
    // login(@Body() user: User): Promise<resMessage<User | undefined>> {
    //     return this.userService.login(user)
    // }

    @Get('info')
    getUserInfo(@Query('id') userId: number): Promise<resMessage<User | undefined>> {
        return this.userService.getUserInfo(userId)
    }

    @Get('getAllUser')
    getAllUser(): Promise<resMessage<User[]| undefined>> {
        return this.userService.getAllUser()
    }

    @Get('getAllUserAndRoles')
    getAllUserAndRoles(): Promise<resMessage<User[] | undefined>> {
        return this.userService.getAllUserAndRoles()
    }

    @Get('addUserRoles')
    addUserRoles(@Query('userId') userId: number, @Query('roleId') roleId: number): Promise<resMessage<string | undefined>> {
        return this.userService.addUserRoles(userId, roleId)
    }

    @Get('removeUserRole')
    removeUserRole(@Query('userId') userId: number, @Query('roleId') roleId: number): Promise<resMessage<string | undefined>> {
        return this.userService.removeUserRole(userId, roleId)
    }

    @Get('removeUser')
    removeUser(@Query('userId') userId: number): Promise<resMessage<string | undefined>> {
        return this.userService.removeUser(userId)
    }

    @Post('addUser')
    addUser(@Body() user: User): Promise<resMessage<string | undefined>> {
        return this.userService.addUser(user)
    }

    @Post('getCountByUserName')
    getCountByUserName(@Body('username') username: string): Promise<resMessage<number | undefined>> {
        return this.userService.getCountByUserName(username)
    }
    //updatePassword
    @Post('updatePassword')
    updatePassword(@Body() user: User): Promise<resMessage<string | undefined>> {
        return this.userService.updatePassword(user)
    }
}
