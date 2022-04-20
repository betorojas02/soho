import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Proyecto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    description: string
}
