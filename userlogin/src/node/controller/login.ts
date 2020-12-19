import {Body, Controller, Get, Post} from '@malagu/mvc/lib/node';
import { Autowired } from '@malagu/core';
import {User} from "../entity/User";
import {resMessage} from "../utils/resMessage";
import {UserService} from "../service/loginService";

@Controller('user')
export class UserController {

    @Autowired()
    private userService: UserService

    @Post('login')
    login(@Body() user: User): Promise<resMessage<User | undefined>> {
        return this.userService.login(user)
    }

    @Get('isLogin')
    isLogin(): Promise<resMessage<User | undefined>> {
        return this.userService.isLogin()
    }
}
