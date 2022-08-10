import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Repository, EntityRepository } from 'typeorm';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  employeeId:number;

  @Column()
  name:string

  @Column()
  company:string;

  @Column({ nullable:true})
 companyMail:string;

  @Column({ default: true })
  roll:string;
  
  @Column({ default: false })
   deleted:boolean;
  
}

