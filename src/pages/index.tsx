import { useState } from 'react';

import { Inter } from 'next/font/google';
import Head from 'next/head';
import { FiEye } from 'react-icons/fi';

import { getHeaderLayout } from '@/components';
import { BaseModal, Button, Input, SearchInput, Textarea } from '@/shared/ui';
import { useGetPostsQuery } from '@/store/api/apiSlice';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { error, data, isLoading } = useGetPostsQuery();

  const [open, setOpen] = useState(false);

  console.log(data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Input placeholder="Email" label="Email" type="password" />

        <Button>Button</Button>

        <Button variant="outlined">Button</Button>

        <Button variant="subtle">Button</Button>

        <Button variant="default">Button</Button>

        <Button leftIcon={<FiEye />}>wefwef</Button>

        <SearchInput />
        <SearchInput fullWidth />

        <Textarea errorMessage="error" />

        <Button onClick={() => setOpen(!open)}>Show modal</Button>
        <BaseModal
          title="We have sent a link to confirm your email to epam@epam.com"
          isOpen={open}
          closeCallback={() => {
            console.log('Close callback');
            setOpen(!open);
          }}
        >
          <p>We have sent a link to confirm your </p>
        </BaseModal>
      </main>
    </>
  );
}

Home.getLayout = getHeaderLayout;
