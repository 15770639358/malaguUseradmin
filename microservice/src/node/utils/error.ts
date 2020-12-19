import { Component } from '@malagu/core';
import { Context, ErrorHandler, HttpError, HTTP_ERROR_HANDlER_PRIORITY } from '@malagu/web/lib/node';

@Component(ErrorHandler)
export class HttpErrorHandler implements ErrorHandler {
    readonly priority: number = HTTP_ERROR_HANDlER_PRIORITY;

    canHandle(ctx: Context, err: Error): Promise<boolean> {
        return Promise.resolve(err instanceof HttpError);
    }

    async handle(ctx: Context, err: HttpError): Promise<void> {
        ctx.response.statusCode = err.statusCode;
        ctx.response.end(err.message);
    }
}
