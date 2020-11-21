import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()

export class ChatEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  messages: String;

  @ManyToOne(type => UserEntity, user => user.chats)
  user: UserEntity[];

}
