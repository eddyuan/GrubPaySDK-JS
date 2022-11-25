import { GrubpayInstance, GrubpayOption, GrubpayConstructor } from "../types";

const V4_URL = "https://api.grubpay.io/v4/grubpay.js";

export type LoadGrubpay = (
  secureId: string,
  options?: GrubpayOption
) => Promise<GrubpayInstance | null>;

export function findScript(): HTMLScriptElement | null {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    `script[src^="${V4_URL}"]`
  );

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    return script;
  }

  return null;
}

function injectScript(): HTMLScriptElement {
  const script = document.createElement("script");
  script.src = `${V4_URL}`;

  const headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error(
      "Expected document.body not to be null. Stripe.js requires a <body> element."
    );
  }

  headOrBody.appendChild(script);

  return script;
}

let grubpayPromise: Promise<GrubpayConstructor | null> | null = null;

export const loadScript = (): Promise<GrubpayConstructor | null> => {
  // Ensure that we only attempt to load Stripe.js at most once
  if (grubpayPromise !== null) {
    return grubpayPromise;
  }

  grubpayPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      console.warn("No window found");
      resolve(null);
      return;
    }

    if (window.Grubpay) {
      resolve(window.Grubpay);
      return;
    }

    try {
      let script = findScript();

      if (script) {
        // console.warn("existed script will be used");
      } else {
        script = injectScript();
      }

      script.addEventListener("load", () => {
        if (window.Grubpay) {
          resolve(window.Grubpay);
        } else {
          reject(new Error("Grubpay.js not available"));
        }
      });

      script.addEventListener("error", () => {
        reject(new Error("Failed to load Grubpay.js"));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });

  return grubpayPromise;
};
