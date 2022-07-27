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
