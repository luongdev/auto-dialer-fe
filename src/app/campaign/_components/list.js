'use client';
import React from 'react';
import { Card, Button, Space, Typography, Tooltip, Dropdown, FloatButton } from 'antd';
import {
  PlusOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import ListPage from '@/components/list-page';
import { useRouter } from 'next/navigation';

export default function ListCampaign() {
  const [filter] = React.useState({});
  const [sortedInfo] = React.useState({});
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [size, setSize] = React.useState('small');
  const router = useRouter();

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const gotoCreateCampaign = (router) => {
    console.log(router)
    router('/campaign/new')
  }

  return (
    <>
      <Card
        title="CUSTOMERS"
        style={{ margin: '16px 0' }}
        extra={[
          <Space key="bar">
            {/* <Button
              key={'new-customer'}
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => }
            >
              NEW
            </Button> */}
            <Dropdown
              trigger={'click'}
              menu={{
                onClick: (e) => {
                  setSize(e.key);
                },
                selectable: true,
                items: [
                  {
                    key: 'display',
                    label: 'DISPLAY',
                    type: 'group',
                    children: [
                      {
                        key: 'small',
                        label: 'SMALL',
                      },
                      {
                        key: 'middle',
                        label: 'DEFAULT',
                      },
                      {
                        key: 'large',
                        label: 'LARGE',
                      },
                    ],
                  },
                ],
              }}
            >
              <Button icon={<SettingOutlined />} />
            </Dropdown>
          </Space>,
        ]}
      >
        <ListPage
          size={size}
          filter={filter}
          sortedInfo={sortedInfo}
          rowSelection={rowSelection}
          columns={[
            {
              title: 'Contact Name',
              key: 'Name',
              dataIndex: 'customerName',
              default: true,
              render: (customerName, { id }) => (
                <Link href={`/customer/${id}`}>{customerName}</Link>
              ),
            },
            {
              title: 'Email',
              key: 'Email',
              dataIndex: 'email',
              default: true,
              render: (email) => (
                <Typography>
                  {email}{' '}
                  <Tooltip title="Send email">
                    <Typography.Link>
                      <MailOutlined />
                    </Typography.Link>
                  </Tooltip>
                </Typography>
              ),
            },
            {
              title: 'Company Name',
              key: 'Company Name',
              dataIndex: 'companyName',
              default: true,
              render: (companyName) => (
                <Typography.Link>{companyName}</Typography.Link>
              ),
            },
            {
              title: 'Type',
              key: 'Type',
              dataIndex: 'customerType',
              default: true,
            },
            {
              title: 'Phone',
              key: 'Phone',
              dataIndex: 'workPhone',
              default: true,
            },
            {
              title: 'Website',
              key: 'Website',
              dataIndex: 'website',
              default: true,
            },
          ]}
        />
      </Card>
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        style={{ width: '4rem', height: '4rem' }}
        key={'new-campaign-fbtn'}
        onClick={() => router.push('/campaign/new')}
      />
    </>
  );
}
