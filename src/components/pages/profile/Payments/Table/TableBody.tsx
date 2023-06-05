import React from 'react';

import { MockData } from '../mockData';
import cls from '../Payments.module.css';

import { TableRow } from './TableRow';

interface Props {
  data: MockData[];
}
export const TableBody = ({ data }: Props) => {
  return (
    <div className={cls.table_body}>
      {data.map(dataItem => (
        <TableRow key={dataItem.id} data={dataItem} />
      ))}
    </div>
  );
};
