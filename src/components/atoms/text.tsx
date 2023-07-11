import { cn } from "@/lib";
import type { VariantProps } from "cva";
import { cva } from "cva";

const textVariants = cva("", {
  defaultVariants: {
    color: "primary",
    size: "sm",
    weight: "light",
  },
  variants: {
    color: {
      primary: "text-white",
      "primary/75": "text-white/75",
      "primary/50": "text-white/50",
    },
    size: {
      sx: "",
      sm: "text-200",
      md: "text-300",
      lg: "text-700",
      xl: "text-800",
      "2xl": "text-900 tracking-tighter",
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-normal",
      light: "font-light",
    },
  },
  compoundVariants: [],
});

interface TextVariants extends VariantProps<typeof textVariants> {}
const text = (variants: TextVariants, className = "") =>
  cn(textVariants(variants), className);

type TextProps<E extends React.ElementType = "p"> = ElementProps<E> &
  TextVariants;

/**
 * This text component can be used for all text-based elements
 * such as headings, paragraphs, spans, abbreviations etc.
 *
 * @example
 * <Text as="h3">
 *   Hey, you gotta do some writing. The world can't wait to hear from you.
 * </Text>
 * @example
 * <Text as="p">
 *   Well, no one knows what it means but it's provocative...
 *   and keeps the people going
 * </Text>
 */
const Text = <E extends React.ElementType = "p">({
  as: As,
  color,
  weight,
  size,
  uppercase,
  className,
  children,
  ...rest
}: TextProps<E>) => {
  const Rendered = As || "p";

  return (
    <Rendered className={text({ color, weight, size }, className)} {...rest}>
      {children}
    </Rendered>
  );
};

export { Text };
