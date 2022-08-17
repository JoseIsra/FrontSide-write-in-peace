import { ref, reactive } from 'vue';
import { User } from '@/utils/types';

let user = reactive<User>({} as User);
const token = ref<string>('');

export function useUser() {
  const setUser = (payload: User) => {
    user = payload;
  };

  const setToken = (payload: string) => {
    token.value = payload;
  };

  return {
    user,
    setUser,
    token,
    setToken,
  };
}
