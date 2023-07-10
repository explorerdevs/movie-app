import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useReducer } from "react";
import { FormControl, FormErrorText, FormInput, FormLabel } from "../atoms";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  isPassword?: boolean;
}

const FormField = ({
  name,
  isPassword,
  type,
  placeholder,
  label,
  defaultValue,
  autoComplete,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
}: Props) => {
  const [isPasswordShown, setIsPasswordShown] = useReducer(
    (prev) => !prev,
    false
  );

  return (
    <FormControl as="div" className={clsx("relative", className)}>
      <FormInput
        type={isPassword && isPasswordShown ? "text" : type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
      />

      <div className='dark:text-brand-300 flex items-center justify-between text-brand-900 peer-aria-[invalid="true"]:!text-accent-200'>
        <FormLabel htmlFor={name} className={labelClassName} children={label} />
        <FormErrorText id={name} className={errorClassName} />
      </div>

      {isPassword && (
        <button
          type="button"
          onClick={setIsPasswordShown}
          className="absolute right-0 top-[56%] mr-6"
        >
          {isPasswordShown ? (
            <EyeSlashIcon className="text-brand-500 aspect-square w-7" />
          ) : (
            <EyeIcon className="text-brand-500 aspect-square w-7" />
          )}
          <span className="sr-only">View Password</span>
        </button>
      )}
    </FormControl>
  );
};

export { FormField };
