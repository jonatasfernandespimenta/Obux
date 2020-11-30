import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()

export class ChatEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chattingWith: number;

  @ManyToOne(type => UserEntity, user => user.chats)
  user: UserEntity[];

  @Column({ nullable: true })
  messages: String;

}
