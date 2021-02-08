import { Profiler } from 'inspector';
import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne, JoinColumn, RelationId, JoinTable, OneToMany } from 'typeorm';

@Entity()

export class BookEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ default: ' ' })
  titulo: String;

  @Column({ default: ' ' })
  editora: String;

  @Column({ default: ' ' })
  autor: String;

  @Column({ default: ' ' })
  ano: String;

  @Column({ default: ' ' })
  genero: String;

  @Column({ default: ' ' })
  qualidade: String;

  @Column()
  disponibilidade: Number;
  
  @Column({ default: ' ' })
  sinopse: String;

  @Column({ default: ' ' })
  foto: String;

  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;
  
  @OneToMany(type => TransactionEntity, transaction => transaction.book)
  transaction: TransactionEntity;
}
