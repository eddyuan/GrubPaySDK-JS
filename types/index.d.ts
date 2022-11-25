import {
  GrubpayConstructor,
  GrubpayInstance,
  GrubpayOption,
} from "./grubpay-js";

export * from "./grubpay-js";

export const loadGrubpay: (
  secureId: string,
  options?: GrubpayOption | undefined | null
) => Promise<GrubpayInstance | null>;

declare global {
  interface Window {
    // Grubpay.js must be loaded directly from https://api.grubpay.io/v4/grubpay.js, which
    // places a `Grubpay` object on the window
    Grubpay?: GrubpayConstructor;
  }
}
