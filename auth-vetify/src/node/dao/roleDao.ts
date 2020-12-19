import { Component } from '@malagu/core';
import {DeleteResult, InsertResult} from "typeorm";
import {Role} from "../entity/role";
import {Roleauto} from "../entity/roleauto";
import {Authority} from "../entity/authority";
import {  OrmContext, Transactional } from '@malagu/typeorm/lib/node';

@Component()
export class RoleDao {


    //获取所有角色
    @Transactional()
    async getAllRoles(): Promise<Role[]> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository.find()
    }

    //查询所有角色及其权限
    @Transactional()
    async getAllRoleAndAuth(): Promise<Role[]> {
        const roleRepository = OrmContext.getRepository(Role)
        //SELECT r.*, au.id as authId, au.authpath, au.authname, au.category from role r, roleauto ra, authority au where r.id = ra.roleId and ra.authId= au.id
        return await roleRepository.createQueryBuilder('role')
            .leftJoinAndMapMany('role.roleauth',Roleauto,'roleauto','role.id = roleauto.roleId')
            .leftJoinAndMapMany('role.auths',Authority,'auth','roleauto.authId = auth.id')
            .select(['role','auth'])
            .getMany()
    }

    @Transactional()
    async getRoleCategoryByParentCategory(category: number): Promise<{role_category: number}[]> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository
            .createQueryBuilder("role")
            .select(['role.category'])
            .where('role.category like :category',{category: category+'__'})
            .getRawMany();
    }

    @Transactional()
    async addRole(role: Role): Promise<Role> {

        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository.save<Role>(role)
    }

    //    select id from userrole where roleId in (select id from role where category like ?)
    @Transactional()
    async getUserIdByCategpry(category: number): Promise<number[]> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository.query('select userId from userrole where roleId in (select id from role where category like ?)',[category+'%'])
    }

    @Transactional()
    async removeRoles(category: number):  Promise<DeleteResult> {
        const roleRepository = OrmContext.getRepository(Role)
        return await  roleRepository
            .createQueryBuilder()
            .delete()
            .from(Role)
            .where("category like :category", { category: category+'%' })
            .execute();
    }

    //select id from role where category like ?
    @Transactional()
    async getAllRolesIdByCategory(category: number): Promise<{role_id: number}[]> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository
            .createQueryBuilder('role')
            .select(['role.id'])
            .where('role.category like :category',{category: category+'%'})
            .getRawMany()
    }

    @Transactional()
    async deleteAllRoleByRoleId(roleId: number): Promise<DeleteResult> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository
            .createQueryBuilder()
            .delete()
            .from(Roleauto)
            .where("roleId = :roleId", { roleId })
            .execute();
    }

    @Transactional()
    async addRoleAuth(roleauto: Roleauto): Promise<InsertResult> {
        const roleRepository = OrmContext.getRepository(Role)
        console.log(roleauto);
        return await roleRepository
            .createQueryBuilder()
            .insert()
            .into(Roleauto)
            .values([{roleId: roleauto.roleId, authId: roleauto.authId}])
            .execute();
    }

    @Transactional()
    async removeRoleAuth(roleauto: Roleauto): Promise<DeleteResult> {
        const roleRepository = OrmContext.getRepository(Role)
        return await roleRepository
            .createQueryBuilder()
            .delete()
            .from(Roleauto)
            .where("roleId = :roleId and authId = :authId", { roleId: roleauto.roleId,authId: roleauto.authId })
            .execute();
    }


}
