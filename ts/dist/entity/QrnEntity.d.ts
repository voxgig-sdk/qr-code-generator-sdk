import { QrCodeGeneratorEntityBase } from '../QrCodeGeneratorEntityBase';
import type { QrCodeGeneratorSDK } from '../QrCodeGeneratorSDK';
import type { Control } from '../types';
import type { Qrn, QrnLoadMatch } from '../QrCodeGeneratorTypes';
declare class QrnEntity extends QrCodeGeneratorEntityBase<Qrn> {
    constructor(client: QrCodeGeneratorSDK, entopts: any);
    make(this: QrnEntity): QrnEntity;
    load(this: any, reqmatch?: QrnLoadMatch, ctrl?: Control): Promise<QrnEntity>;
}
export { QrnEntity };
