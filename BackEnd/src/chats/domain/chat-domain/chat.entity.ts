import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { MessagesEntity } from './messages.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';

@Entity()

export class ChatEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chattingWith: number;

  @ManyToOne(type => UserEntity, user => user.chats)
  user: UserEntity[];

  @OneToMany(type => MessagesEntity, msg => msg.messages)
  messages: MessagesEntity[];

}
