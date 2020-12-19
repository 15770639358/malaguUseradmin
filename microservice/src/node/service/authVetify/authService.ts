import { Component } from '@malagu/core';
import { Autorpc } from '@malagu/rpc';
import { resMessage } from '../../utils/resMessage';
import { responseData } from '../../utils/responseData';
import {Authority} from "../../entity/authVetify";

@Component()
export class AuthService {

    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/AuthInterfaceService')
    protected authService: any;


    // async getAllRoles(): Promise<resMessage<Role[] | undefined>> {
    //     let data = await this.roleService.getAllRoles()
    //     return responseData<Role[]>(0, data, '获取成功')
    // }

    async getAuthByRoleId(roleId: number): Promise<resMessage<Authority[] | undefined>> {
        let data = await this.authService.getAuthByRoleId(roleId)
        return responseData<Authority[]>(0, data, '获取成功');
    }

    async getAllAuth(): Promise<resMessage<Authority[] | undefined>> {
        let data = await this.authService.getAllAuth()
        return responseData<Authority[]>(0, data, '获取成功');
    }
}
