import { GrubpayOption } from './grubpay-options';
import { GrubpayResponse } from './grubpay-response';
import { GrubpaySubmitParams } from './grubpay-submit-params';

export interface GrubpayInstance {
  mount(target: string): Promise<boolean>;
  update(option: GrubpayOption): void;
  submitPayment(params: GrubpaySubmitParams | null): Promise<GrubpayResponse>;
  dispose(): void;
}
