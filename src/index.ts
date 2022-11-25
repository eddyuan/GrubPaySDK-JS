import { LoadGrubpay, loadScript } from "./shared";
import { GrubpayOption } from "../types";

// Execute our own script injection after a tick to give users time to do their
// own script injection.
const grubpayPromise = Promise.resolve().then(() => loadScript());

let loadCalled = false;

grubpayPromise.catch((err: Error) => {
  if (!loadCalled) {
    console.warn(err);
  }
});

export const loadGrubpay: LoadGrubpay = (
  secureId: string,
  options?: GrubpayOption
) => {
  loadCalled = true;
  return new Promise((resolve, reject) => {
    grubpayPromise
      .then((maybeGrubpay) => {
        if (maybeGrubpay) {
          resolve(maybeGrubpay(secureId, options));
        } else {
          resolve(null);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};
