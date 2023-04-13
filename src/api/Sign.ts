import { ISignIn, ISignUp, ISignUpReturn } from '../models/api';
import { mainInstance } from './instance';

export const signUp = (requestData: ISignUp): Promise<ISignUpReturn> =>
  mainInstance
    .post('/auth/register', requestData)
    .then((data: any) => {
      return {
        ok: true,
        user: data,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data.data,
      };
    });

export const signIn = (requestData: ISignIn): Promise<ISignUpReturn> =>
  mainInstance
    .post('/auth/login', requestData)
    .then((data: any) => {
      return {
        ok: true,
        data: data.data,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data,
      };
    });

export const getMe = (): Promise<ISignUpReturn> =>
  mainInstance
    .get('/auth/me')
    .then((data: any) => {
      return {
        ok: true,
        data: data.data,
      };
    })
    .catch((data) => {
      return {
        ok: false,
        error: data,
      };
    });
