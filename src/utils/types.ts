type Redirect = {
  name: string;
};

export interface AppTabs {
  name: string;
  label: string;
  redirect: Redirect;
  icon: string;
}

export interface MenuProfile {
  label: string;
  icon: string;
  action: string;
}

export interface MenuProfileActions {
  logout(): void;
  profile(): void;
}
export interface BaseApiResponse {
  message: string;
}

export interface Topic {
  id: string;
  name: string;
  active: boolean;
}

export interface User {
  name: string;
  lastName: string;
  alias: string;
  email: string;
  options: string;
  id: number;
}

export interface LoginResponse {
  message: string;
  user: User;
  token: string;
  expiresIn: string;
}

export type TokenResponse = Pick<LoginResponse, 'token' | 'expiresIn'> &
  BaseApiResponse;

export type UserResponse = {
  user: User;
  message: string;
};

export interface SigninUserData {
  email: string;
  password: string;
  name: string;
  lastName: string;
}
export interface Writting {
  content: string;
  user_id: number;
  date: string;
  title: string;
  type: number;
  options: string;
}

export type WrittingResponse = {
  writting: Writting;
  message: string;
  status: number;
};
