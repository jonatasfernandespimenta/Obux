import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne } from 'typeorm';

@Entity()

export class BookEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  titulo: String;

  @Column()
  editora: String;

  @Column()
  autor: String;

  @Column()
  ano: Number;

  @Column()
  genero: String;

  @Column()
  qualidade: String;

  @Column()
  disponibilidade: Number;
  
  @Column()
  sinopse: String;

  @Column()
  foto: String;

  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity[];

}
