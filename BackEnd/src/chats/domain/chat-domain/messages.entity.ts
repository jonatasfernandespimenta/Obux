import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { ChatEntity } from './chat.entity';

@Entity()

export class MessagesEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type => ChatEntity, chat => chat.messages)
  chatId: ChatEntity;

}
