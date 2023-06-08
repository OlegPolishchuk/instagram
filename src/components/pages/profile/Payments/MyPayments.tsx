import React, { useState } from 'react';

import { Controls } from './Controls/Controls';
import { mockData, selectOptions } from './mockData';
import Table from './Table/Table';

export const MyPayments = () => {
  const [itemsCount, setItemsCount] = useState(Number(selectOptions[1].value));
  const [currentPage, setCurrentPage] = useState(1);

  const totalCount = mockData.length;
  const pageCount = Math.ceil(totalCount / itemsCount);
  const dataChunk = getDataChunk(currentPage, itemsCount);

  const handleChangePage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const handleChangeItemsCount = (newItemsCount: number) => {
    setItemsCount(newItemsCount);
    setCurrentPage(1);
  };

  return (
    <div>
      <Table data={dataChunk} />

      <Controls
        countItemsValue={itemsCount}
        currentPage={currentPage}
        pageCount={pageCount}
        onChangePage={handleChangePage}
        selectOptions={selectOptions}
        onChangeItemsCount={handleChangeItemsCount}
      />
    </div>
  );
};

function getDataChunk(currentPageNumber: number, itemsCount: number) {
  const startIndex: number = (currentPageNumber - 1) * itemsCount;
  const endIndex = startIndex + itemsCount;

  return mockData.slice(startIndex, endIndex);
}
