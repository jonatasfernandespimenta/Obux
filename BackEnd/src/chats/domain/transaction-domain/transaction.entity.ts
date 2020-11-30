import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { BookEntity } from 'src/books/domain/book-domain/book.entity';

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

  @ManyToOne(type => BookEntity, book => book.transaction, {eager: true})
  book: BookEntity[];

  @Column({ default: false })
  accepted: Boolean;

}
