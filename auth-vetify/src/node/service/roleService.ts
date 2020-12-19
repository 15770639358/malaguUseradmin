import { Component, Autowired } from '@malagu/core';
import {RoleDao} from "../Dao/roleDao";
import {RoleInterfaceService} from "../../common/RoleInterfaceService";
import {Role} from "../entity/role";
import {fromtDatatolist} from "../utils/dataFromtToList";
import {Roleauto} from "../entity/roleauto";
import {Rpc} from "@malagu/rpc";
import {Transactional} from "@malagu/typeorm/lib/node";

@Rpc(RoleInterfaceService)
@Component()
export class roleService implements RoleInterfaceService{

    @Autowired()
    protected roleDao: RoleDao

    async getAllRoles(): Promise<Role[]> {
            let data = await this.roleDao.getAllRoles()
            let roles = fromtDatatolist(data)
            return Promise.resolve(roles);
    }

    async getAllRolesAndAuth(): Promise<Role[]> {
        let data = await this.roleDao.getAllRoleAndAuth()
        return Promise.resolve(data);
    }

    async getRoleCategoryByParentCategory(category: number): Promise<{role_category: number}[]> {
        let data = await this.roleDao.getRoleCategoryByParentCategory(category)
        return Promise.resolve(data);
    }

    @Transactional()
    async addRole(role: Role): Promise<Role> {
        let data: {role_category: number}[] = await this.roleDao.getRoleCategoryByParentCategory(role.category)
        let addCategory = null
            let categs: number[] = []
            data.forEach(categ => {
                categs.push(categ['role_category'])
            })
            categs = categs.sort( (a,b) => {
                return b-a
            })
            if(categs.length > 0){
                addCategory = categs[0] + 1
            }else {
                addCategory = role.category * 100 + 10
            }
            role.category = addCategory
            let rerole = await this.roleDao.addRole(role)
            return Promise.resolve(rerole);
    }

    async getUserIdByCategpry(category: number): Promise<number[]> {
            let data = await this.roleDao.getUserIdByCategpry(category)
            return Promise.resolve(data)
    }

    async removeRoles(category: number): Promise<string> {
            let data = await this.roleDao.getUserIdByCategpry(category)
            if(data.length !== 0){
                return Promise.resolve('当前角色及其子角色下含有用户，不可删除')
            }
            let ids: {role_id: number}[] = await this.roleDao.getAllRolesIdByCategory(category)
        for (const categ of ids) {
                await this.roleDao.deleteAllRoleByRoleId(categ['role_id'])
            }
            await  this.roleDao.removeRoles(category)
            // let data = await roleDaos.removeRole(category+'%')
            return Promise.resolve('删除成功')
    }

    async addRoleAuth(roleauto: Roleauto): Promise<string> {
            await this.roleDao.addRoleAuth(roleauto)
            return Promise.resolve('添加成功')
    }

    async removeRoleAuth(roleauto: Roleauto): Promise<string> {
            await this.roleDao.removeRoleAuth(roleauto)
            return Promise.resolve('删除成功')
    }

}
