import { Component } from '@malagu/core';
import {Authority} from "../entity/authority";
import {Roleauto} from "../entity/roleauto";
import { OrmContext, Transactional } from '@malagu/typeorm/lib/node';

@Component()
export class AuthDao {


    @Transactional()
    async getAuthByRoleId(roleId: number): Promise<Authority[]> {
        const authRepository = OrmContext.getRepository(Authority)
        return await authRepository.createQueryBuilder('auth')
            .leftJoinAndSelect(Roleauto,'roleauto','roleauto.authId = auth.id')
            .where('roleauto.roleId = :roleId')
            .setParameters({roleId})
            .getMany()
    }

    @Transactional()
    async getAllAuth(): Promise<Authority[]> {
        const authRepository = OrmContext.getRepository(Authority)
        return await authRepository.createQueryBuilder('auth')
            .getMany()
    }


}
