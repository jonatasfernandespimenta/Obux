import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()

export class TransactionEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  due: Date;

  @ManyToOne(type => UserEntity, user => user.transactions)
  user: UserEntity[];

  @ManyToOne(type => UserEntity, receiver => receiver.transactions)
  receiver: UserEntity[];

}
