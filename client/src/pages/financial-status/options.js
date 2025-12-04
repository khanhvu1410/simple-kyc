import {
  ASSET_TYPES,
  INCOME_TYPES,
  LIABILITY_TYPES,
  MARKETS_EXPERIENCE,
  RISK_TOLERANCE_NUMBER,
  WEALTH_SOURCE_TYPES,
} from './constant';

export const incomeTypes = [
  {
    key: 'salary',
    text: 'Salary',
    value: INCOME_TYPES.SALARY,
  },
  {
    key: 'investment',
    text: 'Investment',
    value: INCOME_TYPES.INVESTMENT,
  },
  {
    key: 'others',
    text: 'Others',
    value: INCOME_TYPES.OTHERS,
  },
];

export const assetsTypes = [
  {
    key: 'bond',
    text: 'Bond',
    value: ASSET_TYPES.BOND,
  },
  {
    key: 'liquidity',
    text: 'Liquidity',
    value: ASSET_TYPES.LIQUIDITY,
  },
  {
    key: 'realEstate',
    text: 'Real Estate',
    value: ASSET_TYPES.REAL_ESTATE,
  },
  {
    key: 'others',
    text: 'Others',
    value: ASSET_TYPES.OTHERS,
  },
];

export const liabilityTypes = [
  {
    key: 'personalLoan',
    text: 'Personal Loan',
    value: LIABILITY_TYPES.PERSONAL_LOAN,
  },
  {
    key: 'realEstateLoan',
    text: 'Real Estate Loan',
    value: LIABILITY_TYPES.REAL_ESTATE_LOAN,
  },
  {
    key: 'others',
    text: 'Others',
    value: LIABILITY_TYPES.OTHERS,
  },
];

export const wealthSourceTypes = [
  {
    key: 'inheritance',
    text: 'Inheritance',
    value: WEALTH_SOURCE_TYPES.INHERITANCE,
  },
  {
    key: 'donation',
    text: 'Donation',
    value: WEALTH_SOURCE_TYPES.DONATION,
  },
];

export const marketsExperience = [
  {
    key: 'lessThan5Years',
    text: '< 5 years',
    value: MARKETS_EXPERIENCE.LESS_THAN_5,
  },
  {
    key: 'moreThan5Years',
    text: '> 5 and < 10 years',
    value: MARKETS_EXPERIENCE.MORE_THAN_5,
  },
  {
    key: 'moreThan10Years',
    text: '> 10 years',
    value: MARKETS_EXPERIENCE.MORE_THAN_10,
  },
];

export const riskToleranceNumber = [
  {
    key: '10percent',
    text: '10%',
    value: RISK_TOLERANCE_NUMBER.PERCENT_10,
  },
  {
    key: '30percent',
    text: '30%',
    value: RISK_TOLERANCE_NUMBER.PERCENT_30,
  },
  {
    key: 'allIn',
    text: 'All-in',
    value: RISK_TOLERANCE_NUMBER.ALL_IN,
  },
];
