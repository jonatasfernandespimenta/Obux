import { INestApplication } from '@nestjs/common';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { Module } from '@nestjs/core/injector/module';
import { OpenAPIObject, SwaggerDocumentOptions } from './interfaces';
import { SchemaObject } from './interfaces/open-api-spec.interface';
export declare class SwaggerScanner {
    private readonly transfomer;
    private readonly schemaObjectFactory;
    private readonly explorer;
    scanApplication(app: INestApplication, options: SwaggerDocumentOptions): Omit<OpenAPIObject, 'openapi' | 'info'>;
    scanModuleRoutes(routes: Map<string, InstanceWrapper>, modulePath?: string, globalPrefix?: string, operationIdFactory?: (controllerKey: string, methodKey: string) => string): Array<Omit<OpenAPIObject, 'openapi' | 'info'> & Record<'root', any>>;
    getModules(modulesContainer: Map<string, Module>, include: Function[]): Module[];
    addExtraModels(schemas: SchemaObject[], extraModels: Function[]): void;
    private getGlobalPrefix;
}
