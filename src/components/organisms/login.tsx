import { LoginFormSchema, RHFSubmitHandler, useZodForm } from '@/lib';
import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Text } from '../atoms';
import { FormField } from '../molecules';

const LoginForm = () => {
  // const navigate = useNavigate();

  const methods = useZodForm({
    schema: LoginFormSchema,
    mode: 'onChange',
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
      console.error('LOGIN_ERROR', error);
    }
  };

  const isSubmittable =
    Boolean(methods.formState.isDirty) && Boolean(methods.formState.isValid);

  return (
    <FormProvider {...methods}>
      <form
        className='w-full max-w-[40rem]'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <fieldset className=''>
          <Text as='legend' className=''>
            Login
          </Text>

          <FormField
            type='email'
            name='email'
            label={'Email Address'}
            className=''
            autoComplete='username'
          />

          <FormField
            type='password'
            name='password'
            label={'Password'}
            className=''
            autoComplete='current-password'
            isPassword
          />

          <div className=''>
            <button type='submit' disabled={!isSubmittable} className=''>
              Login to your account
            </button>
          </div>

          <div className=''>
            <Text>Don’t have an account?</Text>
            <Link to='/register' className=''>
              Sign Up
            </Link>
          </div>
        </fieldset>
      </form>
    </FormProvider>
  );
};

export { LoginForm };
