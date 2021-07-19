import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreateUsers1624543726080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name:"email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "Boolean",
                        default: false
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "Timestamp",
                        default: "now()"
                    }

                ],

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
