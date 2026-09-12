import { Context } from './Context';
declare class QrCodeGeneratorError extends Error {
    isQrCodeGeneratorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { QrCodeGeneratorError };
