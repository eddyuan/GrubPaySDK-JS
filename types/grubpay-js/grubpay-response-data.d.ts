export interface GrubpayResponseData {
  // For tokenize:
  token?: string; // 'tbnea6bo'
  cardNum?: string; // '478825**************1443'
  expiryDate?: string; // '1025'
  holder?: string; // 'Adam Smith'
  pan?: string; // '896a38b73df44c2e0da633b4c3843b51' Card's MD5
  redirectUrl?: string; // 'https:\/\/develop.iotpay.ca\/devdemo\/grubpay\/result.php?abc=111&code=234&retCode=SUCCESS#foude'
  //-------------------------------------------------------------
  // For purchase:
  payOrderId?: string; // 'PC20221119005622848403095837'
  mchId?: string; // '10000123'
  mchOrderNo?: string; // '1234567890'
  originalOrderId?: string; // ''
  currency?: string; // 'USD'
  amount?: number; // 100  Amount unit in cents
  payType?: string; // 'pay'
  refundable?: number; // 100 How much can be refunded?
  status?: number; // 2, 2 = paid, 3 = paid and notified, 0 = pending
  invoiceNum?: string; // '848403095837'
  paySuccTime?: string; // 2022-11-19 00:56:36
  cardType?: string; // ''
  authNum?: string; // 'PPS009'
  transNum?: string; // '322838071796'
  channel?: string; // 'PF_CC'
  capture?: string; // 'Y' or 'N'
  returnUrl?: string;
}
