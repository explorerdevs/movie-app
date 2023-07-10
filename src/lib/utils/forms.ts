import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, UseFormProps, useForm } from "react-hook-form";
import { ZodType, z } from "zod";

export function useZodForm<T extends z.ZodType>(
  props: Omit<UseFormProps<T["_input"]>, "resolver"> & {
    schema: T;
  }
) {
  return useForm<T["_input"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined, {
      // This makes it so we can use `.transform()`s on the schema without same transform getting applied again when it reaches the server
      raw: true,
    }),
  });
}

const AuthFormSchema = z.object({
  email: z
    .string()
    .nonempty()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Can't be empty" })
    .min(6, { message: "Must more than 6 characters" })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, "Can't be empty")
    .min(8, "Must be more than 8 characters")
    .max(32, "Must be less than 32 characters")
    .trim(),
  confirmPassword: z.string().min(1, "Can't be empty").trim(),
});

export const RegisterFormSchema = AuthFormSchema.pick({
  email: true,
  password: true,
  confirmPassword: true,
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Oops! The passwords don't match",
});

export const LoginFormSchema = AuthFormSchema.pick({
  email: true,
  password: true,
});

export interface RHFSubmitHandler<T extends ZodType<any, any, any>>
  extends SubmitHandler<z.infer<T>> {}
