import {Role} from "../node/entity/role";
import {Roleauto} from "../node/entity";

export const RoleInterfaceService = 'RoleInterfaceService';

export interface RoleInterfaceService {

    //获取所有角色
    getAllRoles(): Promise<Role[]>

    //查询所有的角色及其权限
    getAllRolesAndAuth(): Promise<Role[]>

    //根据category查询当前角色的所有子角色的category
    getRoleCategoryByParentCategory(category: number): Promise<{role_category: number}[]>

    //添加角色
    addRole(role: Role) :Promise<Role>

    //判断当前角色及其子角色下是否有用户
    getUserIdByCategpry(category: number): Promise<number[]>

    //删除角色及其子角色
    removeRoles(category:number): Promise<string>

    //添加角色权限
    addRoleAuth(roleauto: Roleauto): Promise<string>

    //删除角色权限
    removeRoleAuth(roleauto: Roleauto): Promise<string>
}
