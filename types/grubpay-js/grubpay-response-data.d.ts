export interface GrubpayResponseData {
  // Purchase related results ------------------------------------
  payOrderId?: string; // 'PC20221119005622848403095837'
  mchId?: string; // '10001234'
  mchOrderNo?: string; // '1234567890'
  originalOrderId?: string; // ''
  currency?: string; // 'USD'
  amount?: number; // 100  Amount unit in cents
  payType?: string; // 'pay'
  refundable?: number; // 100 How much can be refunded?
  status?: number; // 0 = pending, 2 = paid, 3 = paid and notified, others = failed
  invoiceNum?: string; // '848403095837'
  paySuccTime?: string; // 2022-11-19 00:56:36
  cardType?: string; // ''
  authNum?: string; // 'PPS009'
  transNum?: string; // '322838071796'
  channel?: string; // 'PF_CC'
  capture?: string; // 'Y' or 'N'

  // Tokenize related results ------------------------------------
  token?: string; // '1aaaaa11-1a11-aaa1-aa11-11a11aa1a1aa'
  cardNum?: string; // '412345**********1234'
  expiryDate?: string; // '1025'
  // holder?: string; // 'Adam Smith'
  pan?: string; // '896a38b73df44c2e0da633b4c3843b51' Card's MD5

  // Conditional results ------------------------------------
  returnUrl?: string; //
}
