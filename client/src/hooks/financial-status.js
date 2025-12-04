import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getFinancialStatus,
  updateFinancialStatus,
} from '../apis/financial-status';
import { toast } from 'react-toastify';

export const useFinancialStatusQuery = (id) => {
  return useQuery({
    queryKey: ['financialStatus', id],
    queryFn: async () => await getFinancialStatus(id),
  });
};

export const useUpdateFinancialStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => await updateFinancialStatus(id, data),
    onSuccess: () => {
      toast.success('Update financial status successfully!');
      queryClient.invalidateQueries(['financialStatus']);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
