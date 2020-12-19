import { Controller, Get, Query  } from '@malagu/mvc/lib/node';
import {resMessage} from "../../utils/resMessage";
import {Authority} from "../../entity/authVetify/authority";
import {Autowired} from "@malagu/core";
import {AuthService} from "../../service/authVetify/authService";

@Controller('auth')
export class authController {

    @Autowired()
    protected authService: AuthService

    //根据角色id查询其权限信息
    @Get('getAuthByRoleId')
    async getAuthByRoleId(@Query('id') roleId: number): Promise<resMessage<Authority[] | undefined>> {
        return await this.authService.getAuthByRoleId(roleId)
    }

    //查询所有权限
    @Get('getAllAuth')
    async getAllAuth() :Promise<resMessage<Authority[] | undefined>> {
        return await this.authService.getAllAuth()
    }
}
