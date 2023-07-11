import { cn } from "@/lib";
import * as React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const FormLabel = ({ className, children, ...rest }: Props) => {
  return (
    <label className={cn("body-100", className)} {...rest}>
      {children}
    </label>
  );
};

export { FormLabel };
