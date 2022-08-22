import { api } from '@/boot/axios';
import { Writting, WrittingResponse } from '@/utils/types';
import { useUser } from '@/composables/user';

const saveEmotionalDiarySession = (data: Writting) => {
  const { token } = useUser();
  return api.post<WrittingResponse>('/writting/emotional-session', data, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
};

const savePersonalWritting = (data: Writting) => {
  const { token } = useUser();
  return api.post<WrittingResponse>('/writting/newone', data, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
};

export const writtingService = {
  saveEmotionalDiarySession,
  savePersonalWritting,
};
