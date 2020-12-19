import './middleware/loginJwt'
import './controller/authVetify/user'
import './controller/authVetify/role'
import './controller/authVetify/auth'
import { autoBind } from '@malagu/core';
import {WriteLogs} from "./log/logs";
import {methodThree} from './log/listenerMethodTree'
// import {UserController} from "./controller/authVetify/user";
//监听controller，写入数据流数据库
methodThree.forEach(model => {
    model.router.forEach(controller => {
        const {[controller.routerName]: routername} = require(`./controller/${model.modelName}/${controller.routerTs}`)
        WriteLogs(routername, controller.method)
    })
})
export default autoBind();
