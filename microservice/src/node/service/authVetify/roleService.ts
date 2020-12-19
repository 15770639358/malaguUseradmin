import { Component } from '@malagu/core';
import { Autorpc } from '@malagu/rpc';
import { resMessage } from '../../utils/resMessage';
import { responseData } from '../../utils/responseData';
import {Role, Roleauto} from "../../entity/authVetify";

@Component()
export class RoleService {

    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/RoleInterfaceService')
    protected roleService: any;


    async getAllRoles(): Promise<resMessage<Role[] | undefined>> {
        let data = await this.roleService.getAllRoles()
        return responseData<Role[]>(0, data, '获取成功')
    }

    async getAllRolesAndAuth(): Promise<resMessage<Role[]  | undefined>> {
        let data = await this.roleService.getAllRolesAndAuth()
        return responseData<Role[]>(0, data, '获取成功')
    }

    async addRole(role: Role): Promise<resMessage<Role | undefined>> {
        let data = await this.roleService.addRole(role)
        return responseData<Role>(0, data, '获取成功')
    }

    async removeRoles(category: number): Promise<resMessage<string | undefined>> {
        let data = await this.roleService.removeRoles(category)
        if(data === '删除成功') {
            return responseData<string>(0, data, '删除成功')
        }else {
            return responseData<string>(100, data, data)
        }

    }

    async addRoleAuth(roleauth: Roleauto): Promise<resMessage<string | undefined>> {
        let data = await this.roleService.addRoleAuth(roleauth)
        return responseData<string>(0, data, '添加成功')
    }

    async removeRoleAuth(roleauth: Roleauto): Promise<resMessage<string | undefined>> {
        let data = await this.roleService.removeRoleAuth(roleauth)
        return responseData<string>(0, data, '删除成功')
    }
}
