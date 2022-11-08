import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity('users')
export class User {

  @PrimaryColumn()
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text', unique: true })
  email: string
  
  @Column({ type: 'text' })
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }

}