import * as ts from 'typescript';
import { PluginOptions } from '../merge-options';
import { AbstractFileVisitor } from './abstract.visitor';
declare type ClassMetadata = Record<string, ts.ObjectLiteralExpression>;
export declare class ModelClassVisitor extends AbstractFileVisitor {
    visit(sourceFile: ts.SourceFile, ctx: ts.TransformationContext, program: ts.Program, options: PluginOptions): ts.SourceFile;
    addMetadataFactory(node: ts.ClassDeclaration, classMetadata: ClassMetadata): ts.ClassDeclaration;
    inspectPropertyDeclaration(compilerNode: ts.PropertyDeclaration, typeChecker: ts.TypeChecker, options: PluginOptions, hostFilename: string, sourceFile: ts.SourceFile, metadata: ClassMetadata): void;
    createDecoratorObjectLiteralExpr(node: ts.PropertyDeclaration | ts.PropertySignature, typeChecker: ts.TypeChecker, existingProperties?: ts.NodeArray<ts.PropertyAssignment>, options?: PluginOptions, hostFilename?: string, sourceFile?: ts.SourceFile): ts.ObjectLiteralExpression;
    private createTypePropertyAssignments;
    createEnumPropertyAssignment(node: ts.PropertyDeclaration | ts.PropertySignature, typeChecker: ts.TypeChecker, existingProperties: ts.NodeArray<ts.PropertyAssignment>, hostFilename: string): ts.PropertyAssignment | ts.PropertyAssignment[];
    createDefaultPropertyAssignment(node: ts.PropertyDeclaration | ts.PropertySignature, existingProperties: ts.NodeArray<ts.PropertyAssignment>): ts.PropertyAssignment;
    createValidationPropertyAssignments(node: ts.PropertyDeclaration | ts.PropertySignature): ts.PropertyAssignment[];
    addPropertyByValidationDecorator(decoratorName: string, propertyKey: string, decorators: ts.NodeArray<ts.Decorator>, assignments: ts.PropertyAssignment[]): void;
    addClassMetadata(node: ts.PropertyDeclaration, objectLiteral: ts.ObjectLiteralExpression, sourceFile: ts.SourceFile, metadata: ClassMetadata): void;
    createDescriptionAndExamplePropertyAssigments(node: ts.PropertyDeclaration | ts.PropertySignature, existingProperties?: ts.NodeArray<ts.PropertyAssignment>, options?: PluginOptions, sourceFile?: ts.SourceFile): ts.PropertyAssignment[];
}
export {};
