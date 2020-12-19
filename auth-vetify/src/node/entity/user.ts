import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Role} from "./role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    password: string;

    roles: Role[]

    token: ''

}
