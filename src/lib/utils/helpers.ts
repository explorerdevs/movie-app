import { cx } from "cva";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  classGroups: {
    "font-size": [
      {
        text: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      },
    ],
  },
});

export function cn(...args: ClassValue[]) {
  return customTwMerge(cx(args));
}

/*---------------------------------*
            STRING UTILS           *
  ---------------------------------*
 */

export const capitalize = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const trim = (string?: string) => {
  return string?.trim();
};

export const removeFirstChar = (string = "") => {
  return string?.slice(1);
};

export function pluralize(word: string, value: number) {
  return value === 1 ? `${word}` : `${word}s`;
}

export function truncate(str = "", length = str.length) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

type EndsWith<W, S extends string> = W extends `${infer _R}${S}` ? W : never;

export const endsWith = <Word extends string, Suffix extends string>(
  str: Word,
  suffix: Suffix
): str is EndsWith<Word, Suffix> => {
  return str.endsWith(suffix);
};

export const shortName = (name = "") => {
  const lastIndexOfSpace = name?.indexOf(" ");
  return name?.substring(0, lastIndexOfSpace);
};

/*---------------------------------*
              NUMBER UTILS           *
    ---------------------------------*
   */

export function approximate(num = 0, fractionDigits = 0) {
  return Number.parseFloat(num.toFixed(fractionDigits));
}

export function range(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

export function safeNum<T>(value: T) {
  const numbered = Number(value);
  return Number.isNaN(numbered) || isNaN(numbered) ? 0 : numbered;
}

/*---------------------------------*
            FUNCTION UTILS         *
  ---------------------------------*
*/
export /**
 * (B -> C) . (A -> B) = A -> C
 */
function compose<A extends any[], B, C>(
  f: (arg: B) => C,
  g: (...args: A) => B
): (...args: A) => C;

export /**
 * (B -> C) . (A -> B) = A -> C
 */
function compose<A extends any[], B, C>(
  f: (arg: B) => C,
  g: (...args: A) => B,
  ...args: A
): C;

export /**
 * (B -> C) . (A -> B) = A -> C
 */
function compose<A extends any[], B, C>(
  f: (arg: B) => C,
  g: (...args: A) => B,
  ...maybeArgs: A
) {
  return maybeArgs.length === 0
    ? (...args: A) => f(g(...args))
    : f(g(...maybeArgs));
}

export /**
 * A function which accepts the pairs of guards:
 * the first one is the `validator`, expected to return a boolean value.
 *
 * If the value is `true`, it's `executor` should run with the provided `args`
 * and return from the `guards` function.
 * If the value is `false`, the process continues to the next `validator`.
 *
 * When no `validator` succeeds, the default executor is run.
 */
function guard<Function extends Misc.VariadicFunction>(
  ...qualifiers: [...Misc.GuardQualifier<Function>[], Function]
): Function {
  return ((...args: Parameters<Function>) => {
    const length = qualifiers.length - 1;

    for (let index = 0; index < length; index += 1) {
      const [validator, expression] = (
        qualifiers as Misc.GuardQualifier<Function>[]
      )[index];

      if (validator(...args)) {
        return expression(...args);
      }
    }

    return (qualifiers[length] as Function)(...args);
  }) as Function;
}

/*---------------------------------*
            OBJECT UTILS           *
  ---------------------------------*
*/

export function serialize<T>(data: T): NonNullable<T> {
  return JSON.parse(JSON.stringify(data));
}

export const objectKeys = <O extends {}>(object: O): (keyof O)[] => {
  return Object.keys(object) as (keyof O)[];
};

/*---------------------------------*
              ARRAY UTILS          *
  ---------------------------------*
*/

export function hasValues<T>(
  array: T[] | null | undefined
): array is NonNullable<T[]> {
  return (array || []).length > 0;
}

// reverse array function using iterators
export function reverse<T>(data: ArrayLike<T>): Iterable<T> {
  return {
    [Symbol.iterator](): Iterator<T> {
      let len = data.length;
      return {
        next(): IteratorResult<T> {
          return len
            ? { value: data[--len], done: false }
            : { value: undefined, done: true };
        },
      };
    },
  };
}

export function pluck<I, K extends keyof I>(items: I[], key: K): I[K][] {
  return items.map((item) => item[key]);
}

/**
 * A Generic Ranking Algorithm
 * @param items T[]
 * @param order 'asc' | 'desc'
 * @returns An array containing the sorted items according to the ranking algorithm
 */

export const rank = <T>(
  items: T[],
  order: "asc" | "desc",
  callbackfn: (value: T) => number
): T[] => {
  return items
    .map((item) => ({
      item,
      rank: callbackfn(item),
    }))
    .sort((a, b) => (order === "asc" ? a.rank - b.rank : b.rank - a.rank))
    .map((ranked) => ranked.item);
};

/*-----------------------------*
        DOM UTILS              *
-------------------------------*
*/

export const isBrowser = typeof window !== "undefined";
export const isNavigator = typeof navigator !== "undefined";

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}

/*---------------------------------*
            IMAGE UTILS            *
  ---------------------------------*
 */

export const shimmer = (width: number, height: number) => `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#333" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window?.btoa(str);
