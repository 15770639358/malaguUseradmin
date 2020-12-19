import {User} from "../entity/user";
import { OrmContext, Transactional } from '@malagu/typeorm/lib/node';
import {DeleteResult, InsertResult, UpdateResult} from "typeorm";
import {Userrole} from "../entity/userrole";
import {Role} from "../entity/role";
import { Component } from '@malagu/core';

@Component()
export class UserDao {

    //登录
    @Transactional()
    async  login(user: User): Promise<User | undefined> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository.createQueryBuilder('user')
            .where('user.username = :username and user.password = :password')
            .setParameters({username: user.username, password: user.password})
            .getOne()
    }

    //获取用户信息
    @Transactional()
    async getUserInfo(userId: number): Promise<User | undefined> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository.createQueryBuilder('user')
            .leftJoinAndMapMany('user.userRoles',Userrole,'userRole','user.id = userRole.userId')
            .leftJoinAndMapMany('user.roles',Role,'role','userRole.roleId = role.id')
            .select(["user.id", "user.username",'role.id', 'role.rolename'])
            .where('user.id = :userId')
            .setParameters({userId})
            .getOne()
    }

    @Transactional()
    async getAllUser(): Promise<User[]> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository.createQueryBuilder('user')
            .select(['user.id','user.username'])
            .getMany()
    }

    @Transactional()
    async getAllUserAndRoles(): Promise<User[]> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository.createQueryBuilder('user')
            .leftJoinAndMapMany('user.userRoles',Userrole,'userRole','user.id = userRole.userId')
            .leftJoinAndMapMany('user.roles',Role,'role','userRole.roleId = role.id')
            .select(['user','role'])
            .getMany()
    }

    @Transactional()
    async addUserRoles(userId: number, roleId: number): Promise<InsertResult> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository
            .createQueryBuilder()
            .insert()
            .into(Userrole)
            .values([{userId, roleId}])
            .execute();
    }

    @Transactional()
    async removeUserRole(userId: number, roleId: number): Promise<DeleteResult> {
        const userRepository = OrmContext.getRepository(User)
        return  await userRepository
            .createQueryBuilder()
            .delete()
            .from(Userrole)
            .where("userId = :userId and roleId = :roleId", { userId,roleId })
            .execute();
    }

    @Transactional()
    async removeUser(userId: number): Promise<DeleteResult> {
        const userRepository = OrmContext.getRepository(User)
        return  await userRepository
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :userId", { userId })
            .execute();
    }

    @Transactional()
    async removeUserAllRoles(userId: number): Promise<DeleteResult> {
        const userRepository = OrmContext.getRepository(User)
        return  await userRepository
            .createQueryBuilder()
            .delete()
            .from(Userrole)
            .where("userId = :userId", { userId })
            .execute();
    }

    @Transactional()
    async addUser(user: User): Promise<User> {
        const userRepository = OrmContext.getRepository(User)
        //e10adc3949ba59abbe56e057f20f883e 123456
        user.password = 'e10adc3949ba59abbe56e057f20f883e';
        return await userRepository.save<User>(user)
    }

    @Transactional()
    async getCountByUserName(username: string): Promise<number> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository
            .createQueryBuilder("user")
            .select("count(1)", "count")
            .where("user.username = :username", { username })
            .getRawOne();
    }

    @Transactional()
    async updatePassword(user: User): Promise<UpdateResult> {
        const userRepository = OrmContext.getRepository(User)
        return await userRepository
            .createQueryBuilder('user')
            .update(User)
            .set({ password: user.password })
            .where("id = :id", { id: user.id })
            .execute();
    }


}
