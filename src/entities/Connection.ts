import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("connections")
class Connection{
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    admin_id: string;

    @Column()
    socket_id: string;

    
    @JoinColumn({ name: "user_id" })
    @ManyToOne(()=> User) //muitas mensages para um usuário
    user: User;

    @Column() // toda vez que for criado o BD vai verificar se o id existe na tabela usuário, senão vai dar erro
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn() // decorator
    updated_at:Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Connection }