import { useMutation } from '@tanstack/react-query';

import axiosInstance from "../services/api";

interface AddWordData {
  arabe: string;
  english: string;
  darija_v1: string;
  darija_v2: string;
  darija_v3: string;
  darija_v4: string;
  darija_v5: string;
  category_id: number;
}
// Define the type for the response data
const useAddWord = () => {
  const addWordMutation = useMutation({
    mutationFn: async (data: AddWordData) => {
      const response = await axiosInstance.post('/employee/words', data);
      return response.data;
    },
    onError: (error) => {
      const resError = JSON.parse(error.stack || '{}');
      console.error('Add word failed:', resError);

    },
  });

  const addWord = (data: AddWordData) => {
    return addWordMutation.mutate(data);
  };

  return {
    addWord,
    loading: addWordMutation.isPending,
    error: addWordMutation.error ? 'Adding word failed. Please try again.' : null,
    sucess: addWordMutation.isSuccess,
  };
};

export default useAddWord;

// Usage example:
// const { addWord, loading, error } = useAddWord();
// addWord({
//   arabe: 'ddsdssc',
//   english: 'keyboard',
//   darija_v1: 'wewe',
//   darija_v2: 'gfdsgfds',
//   darija_v3: 'gsfdgds',
//   darija_v4: 'w',
//   darija_v5: 'we',
//   category_id: 3
// });
