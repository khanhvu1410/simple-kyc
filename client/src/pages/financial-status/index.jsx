import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
  useFinancialStatusQuery,
  useUpdateFinancialStatusMutation,
} from '../../hooks/financial-status';
import {
  assetsTypes,
  incomeTypes,
  liabilityTypes,
  marketsExperience,
  riskToleranceNumber,
  wealthSourceTypes,
} from './options';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';

const defaultFinancialStatus = {
  incomes: [
    {
      type: 0,
      amount: 0,
    },
  ],
  assets: [
    {
      type: 0,
      amount: 0,
    },
  ],
  liabilities: [
    {
      type: 0,
      amount: 0,
    },
  ],
  wealthSources: [
    {
      type: 0,
      amount: 0,
    },
  ],
  total: 0,
  experience: 0,
  riskTolerance: 0,
};

const FinancialStatus = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm(defaultFinancialStatus);

  const { fields: incomeFields, append: appendIncome } = useFieldArray({
    control,
    name: 'incomes',
  });

  const { fields: assetFields, append: appendAsset } = useFieldArray({
    control,
    name: 'assets',
  });

  const { fields: liabilityFields, append: appendLiability } = useFieldArray({
    control,
    name: 'liabilities',
  });

  const { fields: wealthSourceFields, append: appendWealthSource } =
    useFieldArray({
      control,
      name: 'wealthSources',
    });

  const { data } = useFinancialStatusQuery('019aEA2d');

  const { mutateAsync: updateFinancialStatus, isPending } =
    useUpdateFinancialStatusMutation();

  useEffect(() => {
    if (data?.data) {
      reset(data.data);
    }
  }, [data, reset]);

  const onSubmit = async (data) => {
    await updateFinancialStatus({ id: '019aEA2d', data });
  };

  const handleAddIncome = () => {
    appendIncome({
      type: 0,
      amount: 0,
    });
  };

  const handleAddAsset = () => {
    appendAsset({
      type: 0,
      amount: 0,
    });
  };

  const handleAddLiability = () => {
    appendLiability({
      type: 0,
      amount: 0,
    });
  };

  const handleAddWealthSource = () => {
    appendWealthSource({
      type: 0,
      amount: 0,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2
        className="text-2xl font-bold text-center"
        style={{ color: 'var(--primary-color)' }}
      >
        Financial Status
      </h2>
      <form
        className="mt-6 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Incomes Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Incomes (A)
          </h3>
          {incomeFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`grid grid-cols-2 gap-4 ${
                  index == incomeFields.length - 1 ? '' : 'mb-4'
                }`}
              >
                <Select
                  label="Type"
                  options={incomeTypes}
                  error={errors.incomes?.[index]?.type?.message}
                  {...register(`incomes.${index}.type`, {
                    required: 'Income type is required',
                  })}
                />
                <Input
                  label="Amount (Currency)"
                  placeholder="Enter amount"
                  type="number"
                  error={errors.incomes?.[index]?.amount?.message}
                  {...register(`incomes.${index}.amount`, {
                    required: 'Income amount is required',
                  })}
                />
              </div>
            );
          })}
          <Button handleClick={handleAddIncome}>Add Income</Button>
        </div>

        {/* Assets Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Assets (B)
          </h3>
          {assetFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`grid grid-cols-2 gap-4 ${
                  index == assetFields.length - 1 ? '' : 'mb-4'
                }`}
              >
                <Select
                  label="Type"
                  options={assetsTypes}
                  error={errors.assets?.[index]?.type?.message}
                  {...register(`assets.${index}.type`, {
                    required: 'Asset type is required',
                  })}
                />
                <Input
                  label="Amount (Currency)"
                  placeholder="Enter amount"
                  type="number"
                  error={errors.assets?.[index]?.amount?.message}
                  {...register(`assets.${index}.amount`, {
                    required: 'Asset amount is required',
                  })}
                />
              </div>
            );
          })}
          <Button handleClick={handleAddAsset}>Add Asset</Button>
        </div>

        {/* Liabilities Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Liabilities (C)
          </h3>
          <p className="text-sm mb-4 text-gray-600">
            Liabilities are any outstanding debts or obligations you may have.
            These can include loans such as personal loans, mortgages, or other
            forms of debt.
          </p>
          {liabilityFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`grid grid-cols-2 gap-4 ${
                  index == assetFields.length - 1 ? '' : 'mb-4'
                }`}
              >
                <Select
                  label="Type"
                  options={liabilityTypes}
                  error={errors.liabilities?.[index]?.type?.message}
                  {...register(`liabilities.${index}.type`, {
                    required: 'Liability type is required',
                  })}
                />
                <Input
                  label="Amount (Currency)"
                  placeholder="Enter amount"
                  type="number"
                  error={errors.liabilities?.[index]?.amount?.message}
                  {...register(`liabilities.${index}.amount`, {
                    required: 'Liability amount is required',
                  })}
                />
                <div className="mt-4">
                  <Input
                    label="Total Liabilities"
                    placeholder="Calculated Total"
                    type="number"
                  />
                </div>
              </div>
            );
          })}
          <Button handleClick={handleAddLiability}>Add Liability</Button>
        </div>

        {/* Source of Wealth Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Source of Wealth (D)
          </h3>
          <p className="text-sm mb-4 text-gray-600">
            This section identifies the origin of your wealth, such as any
            inheritance or donations you may have received. It's important for
            financial transparency.
          </p>
          {wealthSourceFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`grid grid-cols-2 gap-4 ${
                  index == wealthSourceFields.length - 1 ? '' : 'mb-4'
                }`}
              >
                <Select
                  label="Type"
                  options={wealthSourceTypes}
                  error={errors.wealthSources?.[index]?.type?.message}
                  {...register(`wealthSources.${index}.type`, {
                    required: 'Source of wealth type is required',
                  })}
                />
                <Input
                  label="Amount (Currency)"
                  placeholder="Enter amount"
                  type="number"
                  error={errors.wealthSources?.[index]?.amount?.message}
                  {...register(`wealthSources.${index}.amount`, {
                    required: 'Source of wealth amount is required',
                  })}
                />
                <div className="mt-4">
                  <Input
                    label="Total Source of Wealth"
                    placeholder="Calculated Total"
                    type="number"
                  />
                </div>
              </div>
            );
          })}
          <Button handleClick={handleAddWealthSource}>
            Add Source of Wealth
          </Button>
        </div>

        {/* Net Worth Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Net Worth
          </h3>
          <div>
            <Input
              label="Total"
              placeholder="Automatically calculated"
              {...register('total')}
            />
          </div>
        </div>

        {/* Investment Experience and Objectives Section */}
        <div className="border panel rounded-md p-4">
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Investment Experience and Objectives
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Experience in Financial Markets"
              options={marketsExperience}
              {...register('experience')}
            />
            <Select
              label="Type"
              options={riskToleranceNumber}
              {...register('riskTolerance')}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <Button type="submit" isLoading={isPending} disabled={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FinancialStatus;
