import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn, 
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting{

    @PrimaryColumn() //pass new name through notation, but if not, as we're doing here, it's not necessary
    id: string;

    @Column()
    username:string;

    @Column()
    chat : boolean;
    
    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at:Date;

    constructor() {
        if(!this.id)
            this.id = uuid();
    }

}

export { Setting }