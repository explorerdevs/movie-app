import {
  LoginFormSchema,
  RHFSubmitHandler,
  RegisterFormSchema,
  useZodForm,
} from '@src/lib';
import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Text } from '../atoms';
import { FormField } from '../molecules';

const RegisterForm = () => {
  const methods = useZodForm({
    schema: RegisterFormSchema,
    mode: 'onChange',
  });

  const onSubmit: RHFSubmitHandler<typeof LoginFormSchema> = async (data) => {
    try {
      const result = RegisterFormSchema.safeParse(data);
      // The data is invalid
      if (!result.success) {
        throw new Error(JSON.stringify(result.error));
      }
      // send data to api
      console.log(data);
      // methods.reset();
    } catch (error) {
      console.error('LOGIN_ERROR', error);
    }
  };

  const isSubmittable =
    Boolean(methods.formState.isDirty) && Boolean(methods.formState.isValid);

  return (
    <FormProvider {...methods}>
      <form className='' onSubmit={methods.handleSubmit(onSubmit)}>
        <fieldset className=''>
          <Text as='legend' className=''>
            Sign Up
          </Text>

          <FormField
            type='email'
            name='email'
            label={'Email Address'}
            className=''
            autoComplete='username'
          />

          <FormField
            name='password'
            label={'Password'}
            className='col-span-6'
            autoComplete='new-password'
            isPassword
          />

          <FormField
            name='countersign'
            label={'Confirm Password'}
            className=''
            autoComplete='new-password'
            isPassword
          />

          <div className=''>
            <button type='submit' disabled={!isSubmittable} className=''>
              Create an account
            </button>
          </div>

          <div className=''>
            <Text>Already have an account?</Text>
            <Link to='/login' className=''>
              Login
            </Link>
          </div>
        </fieldset>
      </form>
    </FormProvider>
  );
};

export { RegisterForm };
