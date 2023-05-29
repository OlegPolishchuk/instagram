import React from 'react';

import Image from 'next/image';

import cls from '../PostLists.module.css';

interface Props {
  url: string;
}
export const Post = ({ url }: Props) => {
  return (
    <div className={cls.post}>
      <Image className={cls.image} src={url} alt="" fill />
    </div>
  );
};
