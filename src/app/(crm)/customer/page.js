import React from 'react';
import Link from 'next/link';
import { Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import PageContent from '@/components/page-content';
import ListCustomer from '../../campaign/_components/list';

export default async function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: (
            <Link href={'/'}>
              <Space>
                <HomeOutlined />
                HOME
              </Space>
            </Link>
          ),
        },
        {
          title: 'CUSTOMER',
        },
      ]}
    >
      <ListCustomer />
    </PageContent>
  );
}
