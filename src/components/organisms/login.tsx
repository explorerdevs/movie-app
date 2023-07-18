import { IconLogoSVG } from "@/common";
import { LoginFormSchema, RHFSubmitHandler, useZodForm } from "@/lib";
import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Text } from "../atoms";
import { FormField } from "../molecules";

const LoginForm = () => {
  // const navigate = useNavigate();

  const methods = useZodForm({
    schema: LoginFormSchema,
    mode: "onChange",
  });

  const onSubmit: RHFSubmitHandler<typeof LoginFormSchema> = async (data) => {
    try {
      const result = LoginFormSchema.safeParse(data);
      // The data is invalid
      if (!result.success) {
        throw new Error(JSON.stringify(result.error));
      }

      // send data to api
      console.log(data);
      // methods.reset();
      // navigate('/', { replace: true });
    } catch (error) {
      console.error("LOGIN_ERROR", error);
    }
  };

  const isSubmittable =
    Boolean(methods.formState.isDirty) && Boolean(methods.formState.isValid);

  return (
    <div className="mx-0 mt-10 flex grow flex-col">
      <div className="m-auto mb-20">
        <IconLogoSVG />
      </div>
      <FormProvider {...methods}>
        <form
          className="m-auto flex w-full max-w-[40rem] grow gap-10 rounded-2xl bg-brand-200 p-7"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <fieldset className="flex grow flex-col">
            <Text as="legend" className="mb-8 text-500">
              Login
            </Text>

            <FormField
              type="email"
              name="email"
              label={"Email Address"}
              className="py-0 text-100"
              autoComplete="username"
            />

            <FormField
              type="password"
              name="password"
              label={"Password"}
              className="py-3 text-100"
              autoComplete="current-password"
              isPassword
            />

            <div className="">
              <button
                type="submit"
                disabled={!isSubmittable}
                className="mt-8 min-w-full rounded-md bg-accent-200 p-3 font-light text-neutral-100"
              >
                Login to your account
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <Text className="text-100 font-light">
                Don’t have an account?
              </Text>
              <Link
                to="/register"
                className="text-100 font-light text-accent-200"
              >
                Sign Up
              </Link>
            </div>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
};

export { LoginForm };
