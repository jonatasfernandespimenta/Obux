import { INestApplication } from '@nestjs/common';
import { OpenAPIObject, SwaggerCustomOptions, SwaggerDocumentOptions } from './interfaces';
export declare class SwaggerModule {
    static createDocument(app: INestApplication, config: Omit<OpenAPIObject, 'paths'>, options?: SwaggerDocumentOptions): OpenAPIObject;
    static setup(path: string, app: INestApplication, document: OpenAPIObject, options?: SwaggerCustomOptions): void;
    private static setupExpress;
    private static setupFastify;
}
