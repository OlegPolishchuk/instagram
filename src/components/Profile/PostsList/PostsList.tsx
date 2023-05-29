import React from 'react';

import cls from './PostLists.module.css';

import { Post } from '@/components/Profile/PostsList/Components';
import { useGetFakePhotosQuery } from '@/store/api';

export const PostsList = () => {
  const { data } = useGetFakePhotosQuery();

  if (!data) {
    return null;
  }

  return (
    <div className={cls.container}>
      {data.map(photo => (
        <Post key={photo.id} url={photo.url} />
      ))}
    </div>
  );
};
