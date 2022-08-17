import { api } from '@/boot/axios';
import {
  BaseApiResponse,
  UserResponse,
  SigninUserData,
  TokenResponse,
  LoginResponse,
} from '@/utils/types';
import { useUser } from '@/composables/user';

const logoutUser = () => {
  return api.get<BaseApiResponse>('/user/logout');
};

const requestToken = () => {
  return api.get<TokenResponse>('/user/refresh');
};

const signUpUser = (data: SigninUserData) => {
  return api.post<LoginResponse>('/user/signin', data);
};

const getUserData = async () => {
  const { token } = useUser();
  const { data } = await api.get<UserResponse>('/user/userme', {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  return data;
};

export const userService = {
  logoutUser,
  requestToken,
  getUserData,
  signUpUser,
};
