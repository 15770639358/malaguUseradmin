import { Rpc } from '@malagu/rpc';
import {UserInterfaceServive} from "../../common/userInterfaceService";
import {User} from "../entity";
import {UserDao} from "../dao/userDao";
import { Autowired, Component } from '@malagu/core';
import {DeleteResult, InsertResult, UpdateResult} from "typeorm";
import {getToken} from "../utils/getToken";
import {vetifyToken} from "../utils/vetifyToken";

@Rpc(UserInterfaceServive)
@Component()
export class UserService implements UserInterfaceServive {

    @Autowired()
    private userDao: UserDao

    async login(user: User): Promise<User | undefined> {
        let data = await this.userDao.login(user)
        if(data) {
            let token = getToken(data.username)
            data['token'] = token
            return Promise.resolve(data)
        }else {
            return Promise.resolve(data)
        }
    }

    async vetifyToken(token: string): Promise<boolean> {
        let data = vetifyToken(token)
        return Promise.resolve(data)
    }

    async  addUser(user: User): Promise<User> {
        let data = await this.userDao.addUser(user)
        return Promise.resolve(data);
    }

    async addUserRoles(userId: number, roleId: number): Promise<InsertResult> {
        let data = await this.userDao.addUserRoles(userId,roleId)
        return Promise.resolve(data);
    }

    async getAllUser(): Promise<User[]> {
        let data = await this.userDao.getAllUser()
        return Promise.resolve(data);
    }

    async getAllUserAndRoles(): Promise<User[]> {
        let data = await this.userDao.getAllUserAndRoles()
        return Promise.resolve(data);
    }

    async getCountByUserName(username: string): Promise<number> {
        let data = await this.userDao.getCountByUserName(username)
        return Promise.resolve(data);
    }

    async getUserInfo(userId: number): Promise<User | undefined> {
        let data = await this.userDao.getUserInfo(userId)
        return Promise.resolve(data);
    }

    async removeUser(userId: number): Promise<DeleteResult[]> {
        let data1 = await this.userDao.removeUserAllRoles(userId)
        let data2 = await this.userDao.removeUser(userId)
        return Promise.resolve([data1,data2]);
    }

    async removeUserAllRoles(userId: number): Promise<DeleteResult> {
        let data = await this.userDao.removeUserAllRoles(userId)
        return Promise.resolve(data);
    }

    async removeUserRole(userId: number, roleId: number): Promise<DeleteResult> {
        let data = await this.userDao.removeUserRole(userId,roleId)
        return Promise.resolve(data);
    }

    async updatePassword(user: User): Promise<UpdateResult> {
        let data = await this.userDao.updatePassword(user)
        return Promise.resolve(data);
    }


}
