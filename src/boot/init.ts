import { boot } from 'quasar/wrappers';
import { userService } from '@/api/userApi';
import { useUser } from '@/composables/user';
import { UserResponse } from '@/utils/types';

export default boot(async ({ router }) => {
  const { setToken, setUser } = useUser();
  const { data } = await userService.requestToken();
  const res = data.message;
  if (res.startsWith('NOTOKEN')) {
    // error handler
    void router.push({
      name: 'landing',
    });
    return;
  }
  // get token set token
  setToken(data.token);
  // get user info
  const userData: UserResponse = await userService.getUserData();
  if (!userData.user) {
    void router.push({
      name: 'landing',
    });
    return;
  }
  setUser(userData.user);
  await router.push({
    name: 'emotional',
  });
});
