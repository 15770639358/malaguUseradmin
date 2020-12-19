import { Controller, Get, Query, Body, Post  } from '@malagu/mvc/lib/node';
import { Autowired } from '@malagu/core';
import {resMessage} from "../../utils/resMessage";
import {RoleService} from "../../service/authVetify/roleService";
import {Role, Roleauto} from "../../entity/authVetify";


@Controller('role')
export class roleController {


    @Autowired()
    protected roleService: RoleService

    //查询所有角色并按child列表返回
    @Get('getAllRole')
    async getAllRole(): Promise<resMessage<Role[] | undefined>> {
        return await this.roleService.getAllRoles()
    }
    //查询所有角色及其权限
    @Get('getAllRolesAndAuth')
    async getAllRolesAndAuth(): Promise<resMessage<Role[]  | undefined>> {
        return await this.roleService.getAllRolesAndAuth()
    }
    //addRole
    @Post('addRole')
    async addRole(@Body() role:Role): Promise<resMessage<Role | undefined>> {
        return await this.roleService.addRole(role)
    }
    //removeRoles
    @Get('removeRoles')
    async removeRoles(@Query('category') category: number): Promise<resMessage<string | undefined>> {
        return await this.roleService.removeRoles(category)
    }

    //removeRoleAuth
    @Post('addRoleAuth')
    async addRoleAuth(@Body() roleauth:Roleauto): Promise<resMessage<string | undefined>> {
        return await this.roleService.addRoleAuth(roleauth)
    }

    @Post('removeRoleAuth')
    async removeRoleAuth(@Body()  roleauth:Roleauto): Promise<resMessage<string | undefined>> {
        return await this.roleService.removeRoleAuth(roleauth)
    }
}
