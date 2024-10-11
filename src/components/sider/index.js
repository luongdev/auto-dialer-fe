'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  ContactsOutlined,
  DashboardOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  ProfileOutlined,
  SettingOutlined,
  CalendarOutlined,
  LineChartOutlined,
  CopyOutlined,
  LinkOutlined,
  MailOutlined,
  CommentOutlined,
  GoldOutlined,
  StarOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import Logo from './logo';
import LogoFull from './logo-full';
import { useTheme } from '@/state/theme/theme-context';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    'Dashboard',
    <DashboardOutlined />,
  ),
  {
    type: 'divider',
  },
  getItem('Campaign', 'Campaign', <AppstoreOutlined />, [
    getItem(<Link href={'/campaign'}>List</Link>, 'List', <ContainerOutlined />),
  ]),
  {
    type: 'divider',
  },
];

export default function _Sider() {
  const [siderCollapsed, setSiderCollapsed] = React.useState(false);
  const { theme } = useTheme();
  const onCollapse = (collapsed) => {
    setSiderCollapsed(collapsed);
  };
  const logo = React.useMemo(() => {
    if (siderCollapsed)
      return <Logo fill={'#00B96B'} style={{ width: 44, height: 55 }} />;
    return <LogoFull fill={'#00B96B'} style={{ width: '100%', height: 44 }} />;
  }, [siderCollapsed]);

  return (
    <Sider theme={theme} collapsible onCollapse={onCollapse} breakpoint="md">
      <div className="demo-logo-vertical">
        <Link href={'/'}>{logo}</Link>
      </div>
      <Menu
        theme={theme}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        style={{
          borderTop: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      />
    </Sider>
  );
}
