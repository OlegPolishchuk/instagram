import React from 'react';

import { getHeaderLayout } from '@/components';
import { Button } from '@/shared/ui';
import { useDeleteProfileTestMutation } from '@/store/api';

const DeleteUser = () => {
  const [deleteUser, { isLoading, isSuccess, data }] = useDeleteProfileTestMutation();
  const handleDelete = () => {
    console.log('delete');
    deleteUser();
  };

  if (isSuccess) {
    console.log(data);
  }

  return (
    <div className="flex_center">
      <Button onClick={handleDelete} isLoading={isLoading}>
        Delete account
      </Button>
    </div>
  );
};

DeleteUser.getLayout = getHeaderLayout;
export default DeleteUser;
