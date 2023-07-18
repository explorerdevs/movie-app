import { cn } from "@/lib";
import { useFormContext } from "react-hook-form";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  message?: string;
}

const FormErrorText = ({
  id = "",
  message,
  className,
  children,
  ...rest
}: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <span
      role="alert"
      id={`errors-${id}`}
      aria-live="assertive"
      className={cn(
        "text-100 font-light leading-tight tracking-tighter",
        className
      )}
      {...rest}
    >
      {children || message || `${errors?.[id]?.message || ""}`}
    </span>
  );
};

export { FormErrorText };
