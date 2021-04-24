import { Entity, PrimaryColumn, CreateDateColumn, Column } from "typeorm";
import { v4 } from "uuid";


@Entity("messages")
class Message{

        @PrimaryColumn()
        id: string;
        
        @Column()
        admin_id: string;

        @Column()
        text: string;


        user_id: string;

        @CreateDateColumn()
        created_at: Date;

        constructor() {

        }
}

export { Message };