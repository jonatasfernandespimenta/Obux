import { Controller } from '@nestjs/common/interfaces';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { DenormalizedDoc } from './interfaces/denormalized-doc.interface';
import { SchemaObject } from './interfaces/open-api-spec.interface';
import { SchemaObjectFactory } from './services/schema-object-factory';
export declare class SwaggerExplorer {
    private readonly schemaObjectFactory;
    private readonly mimetypeContentWrapper;
    private readonly metadataScanner;
    private readonly schemas;
    private readonly schemaRefsStack;
    private operationIdFactory;
    constructor(schemaObjectFactory: SchemaObjectFactory);
    exploreController(wrapper: InstanceWrapper<Controller>, modulePath?: string, globalPrefix?: string, operationIdFactory?: (controllerKey: string, methodKey: string) => string): DenormalizedDoc[];
    getSchemas(): SchemaObject[];
    private generateDenormalizedDocument;
    private exploreGlobalMetadata;
    private exploreRoutePathAndMethod;
    private getOperationId;
    private reflectControllerPath;
    private validateRoutePath;
    private mergeMetadata;
    private deepMergeMetadata;
    private mergeValues;
    private migrateOperationSchema;
    private registerExtraModels;
}
