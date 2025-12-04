import HttpInstance from '../http';

export const getFinancialStatus = async (id) => {
  return await HttpInstance.get(`/financialStatus/${id}`);
};

export const updateFinancialStatus = async (id, data) => {
  return await HttpInstance.put(`/financialStatus/${id}`, data);
};
