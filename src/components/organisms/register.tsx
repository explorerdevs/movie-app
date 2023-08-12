import { IconLogoSVG } from "@/common";
import { RHFSubmitHandler, RegisterFormSchema, useZodForm } from "@/lib";
import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { Text } from "../atoms";
import { FormField } from "../molecules";

const RegisterForm = () => {
  // const navigate = useNavigate()
  const methods = useZodForm({
    schema: RegisterFormSchema,
    mode: "onChange",
  });

  const onSubmit: RHFSubmitHandler<typeof RegisterFormSchema> = async (
    data
  ) => {
    try {
      const result = RegisterFormSchema.safeParse(data);
      // The data is invalid
      if (!result.success) {
        throw new Error(JSON.stringify(result.error));
      }
      // send data to api
      console.log(data);
      // methods.reset();
      // navigate('/login')
    } catch (error) {
      console.error("LOGIN_ERROR", error);
    }
  };

  const isSubmittable =
    Boolean(methods.formState.isDirty) && Boolean(methods.formState.isValid);

  return (
    <div className="mx-0 mt-10 flex max-w-[30rem] grow flex-col">
      <div className="m-auto mb-20"><IconLogoSVG  /></div>
      
      <FormProvider {...methods}>
        <form
          className="m-auto flex w-full max-w-[40rem] grow gap-10 rounded-2xl bg-brand-200 p-7 lg:mt-40"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <fieldset className="flex grow flex-col">
            <Text as="legend" className="mb-8 text-500">
              Sign Up
            </Text>

            <FormField
              type="email"
              name="email"
              className="py-0 text-100"
              autoComplete="username"
              placeholder="Email Address"
            />

            <FormField
              type="password"
              name="password"
              className="col-span-6 py-3 text-100"
              autoComplete="new-password"
              placeholder="Password"
              isPassword
            />

            <FormField
              type="password"
              name="countersign"
              className="py-3 text-100"
              autoComplete="new-password"
              placeholder="Confirm Password"
              isPassword
            />

            <div className="">
              <button
                type="submit"
                disabled={!isSubmittable}
                className="ease-in-outfocus:bg-accent-100 mt-8 min-w-full rounded-md bg-accent-200 p-3 font-light text-neutral-100  cursor-pointer transition-colors duration-700 hover:bg-accent-100"
              >
                Create an account
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Text className="text-100 font-light">
                Already have an account?
              </Text>
              <Link
                to="/login"
                className=" text-100 font-light text-accent-200"
              >
                Login
              </Link>
            </div>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
};

export { RegisterForm };
