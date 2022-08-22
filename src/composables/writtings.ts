import { Writting } from '@/utils/types';
import { ref } from 'vue';

const writtings = ref<Writting[]>([]);

export function useWrittings() {
  const setWrittings = (payload: Writting) => {
    writtings.value.push(payload);
  };

  return {
    writtings,
    setWrittings,
  };
}
