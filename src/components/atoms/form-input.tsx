import { cn } from "@/lib";
import { useFormContext } from "react-hook-form";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
}

const FormInput = ({ name, className, type, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(`${name}`, {
        valueAsNumber: type === "number" || undefined,
      })}
      className={cn(
        "peer mb-4 max-h-4 w-full min-w-full border-b-brand-100 bg-brand-200 px-8 py-6 outline-none border-b autofill:!bg-brand-200 aria-[invalid='true']:!border-b-accent-200",
        className
      )}
      type={type}
      aria-invalid={errors?.[name] ? "true" : "false"}
      aria-errormessage={`errors-${name}`}
      {...rest}
    />
  );
};
export { FormInput };

// 'body-100 peer w-full rounded-lg border border-brand-100 bg-white px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-white focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-white dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500'
