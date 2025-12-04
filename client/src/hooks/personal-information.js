import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getPersonalInformation,
  updatePersonalInformation,
} from '../apis/personal-information';
import { toast } from 'react-toastify';

export const usePersonalInformationQuery = (id) => {
  return useQuery({
    queryKey: ['personalInformation', id],
    queryFn: async () => await getPersonalInformation(id),
  });
};

export const useUpdatePersonalInformationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) =>
      await updatePersonalInformation(id, data),
    onSuccess: () => {
      toast.success('Update personal information successfully!');
      queryClient.invalidateQueries(['personalInformation']);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
