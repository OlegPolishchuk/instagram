import { Option } from '@/shared/ui/CustomSelect/CustomSelect';

export interface MockData {
  id: number;
  date: string;
  price: string;
  subscriptionType: string;
  paymentType: string;
}

export const mockData = [
  {
    id: 0,
    date: '12.12.2022',
    price: '10$',
    subscriptionType: '2 month',
    paymentType: 'PayPal',
  },
  {
    id: 1,
    date: '12.12.2022',
    price: '10$',
    subscriptionType: '12 month',
    paymentType: 'Stripe',
  },
  {
    id: 2,
    date: '12.12.2022',
    price: '70$',
    subscriptionType: '20 month',
    paymentType: 'PayPal',
  },
  {
    id: 3,
    date: '12.12.2022',
    price: '30$',
    subscriptionType: '12 month',
    paymentType: 'PayPal',
  },
  {
    id: 4,
    date: '12.12.2022',
    price: '70$',
    subscriptionType: '8 month',
    paymentType: 'Stripe',
  },
  {
    id: 5,
    date: '12.12.2022',
    price: '30$',
    subscriptionType: '20 month',
    paymentType: 'PayPal',
  },
  {
    id: 6,
    date: '12.12.2022',
    price: '30$',
    subscriptionType: '30 month',
    paymentType: 'Stripe',
  },
  {
    id: 7,
    date: '12.12.2022',
    price: '70$',
    subscriptionType: '20 month',
    paymentType: 'PayPal',
  },
  {
    id: 8,
    date: '12.12.2022',
    price: '30$',
    subscriptionType: '12 month',
    paymentType: 'PayPal',
  },
  {
    id: 9,
    date: '12.12.2022',
    price: '10$',
    subscriptionType: '5 month',
    paymentType: 'Stripe',
  },
];

export const selectOptions: Option[] = [
  { label: '1', value: '1' },
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '20', value: '20' },
];
