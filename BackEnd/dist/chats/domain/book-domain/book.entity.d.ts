import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { BaseEntity } from 'typeorm';
export declare class BookEntity extends BaseEntity {
    id: number;
    titulo: String;
    autor: String;
    ano: Number;
    genero: String;
    qualidade: Number;
    foto: String;
    disponibilidade: Number;
    sinopse: String;
    user: UserEntity[];
}
