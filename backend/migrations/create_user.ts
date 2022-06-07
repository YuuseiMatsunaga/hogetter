import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsers1652523071530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `create table user (id int primary key auto_increment,
                name varchar(20) not null,
                password varchar(20) not null,
                email varchar(100) not null UNIQUE, 
                screen_name varchar(20) not null UNIQUE, 
                followers_count integer, 
                description varchar(255),
                created_at datetime);`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user;`, undefined);
    }

}