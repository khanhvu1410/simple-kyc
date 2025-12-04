import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { login } from '../apis/auth';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (params) => await login(params),
    onSuccess: () => {
      toast.success('Login successfully!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
