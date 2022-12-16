import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Categories";

@Entity('videos')
export class Video {

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

  @Column({ type: 'varchar' })
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category 

  @Column({
    type: "numeric"
  })
  duration: number
  
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}
