import { Type } from '@nestjs/common';
import { MappedType } from './mapped-type.interface';
export declare function IntersectionType<A, B>(classARef: Type<A>, classBRef: Type<B>): MappedType<A & B>;
