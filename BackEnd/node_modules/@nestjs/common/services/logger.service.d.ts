export declare type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose';
export interface LoggerService {
    log(message: any, context?: string): any;
    error(message: any, trace?: string, context?: string): any;
    warn(message: any, context?: string): any;
    debug?(message: any, context?: string): any;
    verbose?(message: any, context?: string): any;
}
export declare class Logger implements LoggerService {
    protected context?: string;
    private readonly isTimestampEnabled;
    private static logLevels;
    private static lastTimestamp?;
    private static instance?;
    constructor(context?: string, isTimestampEnabled?: boolean);
    error(message: any, trace?: string, context?: string): void;
    log(message: any, context?: string): void;
    warn(message: any, context?: string): void;
    debug(message: any, context?: string): void;
    verbose(message: any, context?: string): void;
    setContext(context: string): void;
    static overrideLogger(logger: LoggerService | LogLevel[] | boolean): void;
    static log(message: any, context?: string, isTimeDiffEnabled?: boolean): void;
    static error(message: any, trace?: string, context?: string, isTimeDiffEnabled?: boolean): void;
    static warn(message: any, context?: string, isTimeDiffEnabled?: boolean): void;
    static debug(message: any, context?: string, isTimeDiffEnabled?: boolean): void;
    static verbose(message: any, context?: string, isTimeDiffEnabled?: boolean): void;
    private callFunction;
    private getInstance;
    private isLogLevelEnabled;
    private static printMessage;
    private static updateAndGetTimestampDiff;
    private static printStackTrace;
}
