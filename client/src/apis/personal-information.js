import HttpInstance from '../http';

export const getPersonalInformation = async (id) => {
  return await HttpInstance.get(`/personalInformation/${id}`);
};

export const updatePersonalInformation = async (id, data) => {
  return await HttpInstance.put(`/personalInformation/${id}`, data);
};
