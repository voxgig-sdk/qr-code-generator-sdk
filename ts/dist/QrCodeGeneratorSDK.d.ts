import { QrnEntity } from './entity/QrnEntity';
export type * from './QrCodeGeneratorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { QrCodeGeneratorEntityBase } from './QrCodeGeneratorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class QrCodeGeneratorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Qrn(entopts?: Record<string, any>): QrnEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): QrCodeGeneratorSDK;
    tester(testopts?: any, sdkopts?: any): QrCodeGeneratorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof QrCodeGeneratorSDK;
export { stdutil, config, BaseFeature, QrCodeGeneratorEntityBase, QrCodeGeneratorSDK, SDK, };
