import { GrubpayInstance } from "./grubpay-instance";
import { GrubpayOption } from "./grubpay-options";

export interface GrubpayConstructor {
  (
    // Your secureId received from auth api
    secureId: string,
    // Styles, themes, and other options
    option?: GrubpayOption
  ): GrubpayInstance;
}
