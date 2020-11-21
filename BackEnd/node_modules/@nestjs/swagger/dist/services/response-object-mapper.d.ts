import { ApiResponseSchemaHost } from '../decorators';
export declare class ResponseObjectMapper {
    private readonly mimetypeContentWrapper;
    toArrayRefObject(response: Record<string, any>, name: string, produces: string[]): {
        content: Record<string, import("../interfaces/open-api-spec.interface").MediaTypeObject>;
    };
    toRefObject(response: Record<string, any>, name: string, produces: string[]): {
        content: Record<string, import("../interfaces/open-api-spec.interface").MediaTypeObject>;
    };
    wrapSchemaWithContent(response: ApiResponseSchemaHost, produces: string[]): ApiResponseSchemaHost | {
        content: Record<string, import("../interfaces/open-api-spec.interface").MediaTypeObject>;
        description?: string;
        headers?: Record<string, import("../interfaces/open-api-spec.interface").ReferenceObject | import("../interfaces/open-api-spec.interface").BaseParameterObject>;
        links?: Record<string, import("../interfaces/open-api-spec.interface").ReferenceObject | import("../interfaces/open-api-spec.interface").LinkObject>;
        status?: number;
    };
}
