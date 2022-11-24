import { GrubpayResponseData } from './grubpay-response-data';

export interface GrubpayResponse {
  // If the result is success
  success: boolean;

  // The is quavalent to retMsg from our API
  message?: string | null;

  // The is quavalent to retData from our API
  data?: GrubpayResponseData | null;

  // SecuredId expired or invalid or paid, a new one need to be generated
  invalidSecureId?: boolean | null;

  // The reason caused it to fail
  error?: string | null;

  // Time out when query order, this does NOT mean the order is failed, further query from merchant's side need to be performed
  timeout?: boolean | null;

  // This field is usually empty
  hint?: string | null;

  // Input form has validation error, request not sent
  validatorErrors?: object | null;

  // User cancelled captcha
  captchaError?: boolean | null;

  // User cancelled agreement
  agreementError?: boolean | null;

  // When captcha is required
  requireCaptcha?: boolean | null;

  // When ach agreement is required
  requireAchAgreement?: boolean | null;

  // If use have selected the 'Save card' checkbox
  userWantSaveCard?: boolean | null;

  // If the merchant requested a forceSaveCard
  forceSaveCard?: boolean | null;
}
