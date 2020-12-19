import {Authority} from "../node/entity/authority";

export const AuthInterfaceService = 'AuthInterfaceService';

export interface AuthInterfaceService {

    //根据角色id获取当前角色所有权限
    getAuthByRoleId(roleId: number): Promise<Authority[]>

    //查询所有权限
    getAllAuth(): Promise<Authority[]>

}
