import { Component } from '@malagu/core';
import { Context, Middleware } from '@malagu/web/lib/node';
import { Autorpc } from '@malagu/rpc';

@Component(Middleware)
export class LoginJwtMiddleware implements Middleware {

    @Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/UserInterfaceServive')
    protected UserLogin: any;

    async handle(ctx: Context, next: () => Promise<void>): Promise<void> {
        const request = Context.getRequest()
        let token = request.headers.authorization
        let flag = false
        console.log(request.path);
        if(request.path === '/user/login'){
            await next()
            return
        }
        flag = await this.UserLogin.vetifyToken(token)
        if(flag) {
            await next()
        }else {
            ctx.response.body = JSON.stringify({code: 400,message: '登录超时'})
        }

    }

    readonly priority = 1;

}
