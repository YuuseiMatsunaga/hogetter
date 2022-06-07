import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    name: string;

    @Column({ length: 20 })
    password: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 100 })
    screen_name: string;

    @Column({ length: 255 })
    description: string;

    @Column()
    followers_cont: number;

    @Column({ length: 50 })
    created_at: string
}