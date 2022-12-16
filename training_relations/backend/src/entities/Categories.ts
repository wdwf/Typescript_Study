import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('categories')
export class Category {

  @PrimaryColumn({
    type: 'uuid',
  })
  id: string

  @Column({ 
    type: 'varchar',
    unique: true
  })
  name: string

  @Column({
    type: 'varchar',
  })
  description: string
  
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}
