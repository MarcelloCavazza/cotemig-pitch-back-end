import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Lawyer {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  oab_number: string;

  @Column()
  is_active: string;

  @Column()
  created_at: string;

  @Column()
  updated_at?: string;
}
