import { Component } from '@malagu/core';
import { Autorpc } from '@malagu/rpc';
import {User} from "../entity/User";
import {resMessage} from "../utils/resMessage";
import {responseData} from "../utils/responseData";
import { Context } from '@malagu/web/lib/node';

@Component()
export class UserService {


    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/UserInterfaceServive')
    protected UserServer: any;

    async login(user:User): Promise<resMessage<User | undefined>> {
        let data = await this.UserServer.login(user)
        if(data) {
            Context.getSession().foo = data
            let foo = Context.getSession()
            console.log(foo);
            return responseData<User>(0, data, '登录成功')
        } else {
            return responseData<User>(400, data, '登录失败,用户名或密码错误')
        }
    }

    async isLogin(): Promise<resMessage<User | undefined>> {
        let foo = Context.getSession().foo
        console.log(foo);
        if(foo) {
            return Promise.resolve(responseData<User>(0, foo, '用户已登录'))
        } else {
            return Promise.resolve(responseData<User>(0, foo, '用户未登录'))
        }
    }
}
