import { Component } from '@malagu/core';
import { Autorpc } from '@malagu/rpc';
import { User } from '../../entity/authVetify/user';
import { resMessage } from '../../utils/resMessage';
import { responseData } from '../../utils/responseData';

@Component()
export class UserService {

    // @Autorpc('http://localhost:3000/api/UserLogin')
    // protected UserLogin: any;
    // https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/userlogin/
    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/userlogin/api/UserLogin')
    protected UserLogin: any;

    // @Autorpc('http://localhost:3002/api/UserInterfaceServive')
    // protected UserServer: any;
    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/UserInterfaceServive')
    protected UserServer: any;

    // async login(user:User): Promise<resMessage<User | undefined>> {
    //     let data = await  this.UserLogin.userLogin(user)
    //     if(data) {
    //         return responseData<User>(0, data, '登录成功')
    //     } else {
    //         return responseData<User>(400, data, '登录失败,用户名或密码错误')
    //     }
    //
    // }

    async getUserInfo(userId: number): Promise<resMessage<User | undefined>> {
        let data = await this.UserServer.getUserInfo(userId)
        return responseData<User>(0, data, '查询成功')
    }

    async getAllUser(): Promise<resMessage<User[] | undefined>> {
        let data = await this.UserServer.getAllUser()
        return responseData<User[]>(0, data, '查询成功')
    }

    async getAllUserAndRoles(): Promise<resMessage<User[] | undefined>> {
        let data = await this.UserServer.getAllUserAndRoles()
        return responseData<User[]>(0, data, '查询成功')
    }

    async addUserRoles(userId: number, roleId: number): Promise<resMessage<string | undefined>> {
        let data = await this.UserServer.addUserRoles(userId, roleId)
        return responseData<string>(0, data, '添加成功')
    }

    async removeUserRole(userId: number, roleId: number): Promise<resMessage<string | undefined>> {
        let data = await this.UserServer.removeUserRole(userId, roleId)
        return responseData<string>(0, data, '删除成功')
    }

    async removeUser(userId: number): Promise<resMessage<string | undefined>> {
        let data = await this.UserServer.removeUser(userId)
        return responseData<string>(0, data, '删除成功')
    }

    async addUser(user: User): Promise<resMessage<string | undefined>> {
        let data = await this.UserServer.addUser(user)
        return responseData<string>(0, data, '添加成功')
    }

    async getCountByUserName(username: string): Promise<resMessage<number | undefined>> {
        let data = await this.UserServer.getCountByUserName(username)
        return responseData<number>(0, data, '查询成功')
    }

    async updatePassword(user: User): Promise<resMessage<string | undefined>> {
        let data = await this.UserServer.updatePassword(user)
        return responseData<string>(0, data, '更新成功')
    }
}
