import React from 'react';

import { MockData } from '../mockData';
import cls from '../Payments.module.css';

import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

interface Props {
  data: MockData[];
}

const Table = ({ data }: Props) => {
  return (
    <div className={cls.table}>
      <TableHead />
      <TableBody data={data} />
    </div>
  );
};

export default Table;
