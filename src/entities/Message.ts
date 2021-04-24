import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity("messages")
class Message{

        @PrimaryColumn()
        id: string;
        
        @Column()
        admin_id: string;

        @Column()
        text: string;

        
        @JoinColumn({ name: "user_id" })
        @ManyToOne(()=> User) //muitas mensages para um usuário
        user: User;

        @Column() // toda vez que for criado o BD vai verificar se o id existe na tabela usuário, senão vai dar erro
        user_id: string;

        @CreateDateColumn()
        created_at: Date;

        constructor() {
            if(!this.id) {
                this.id = uuid();
            }
        }
}

export { Message };