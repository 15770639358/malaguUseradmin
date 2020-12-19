import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

import {Authority} from "./authority";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    rolename: string;

    @Column('int')
    category: number;

    auths: Authority[]

}