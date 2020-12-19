import { Component, Autowired } from '@malagu/core';
import {fromtDatatolist} from "../utils/dataFromtToList";
import {AuthInterfaceService} from "../../common/AuthInterfaceService";
import {AuthDao} from "../Dao/authDao";
import {Authority} from "../entity/authority";
import {Rpc} from "@malagu/rpc";

@Rpc(AuthInterfaceService)
@Component()
export class authService implements AuthInterfaceService{

    @Autowired()
    protected authDao: AuthDao

    async getAuthByRoleId(roleId: number): Promise<Authority[]>{
            let data = await this.authDao.getAuthByRoleId(roleId)
            let auths = fromtDatatolist(data)
            return Promise.resolve(auths)
    }

    async getAllAuth(): Promise<Authority[]> {
            let data = await this.authDao.getAllAuth()
            let auths = fromtDatatolist(data)
            return Promise.resolve(auths)
    }


}
