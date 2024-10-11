'use client';

import React from 'react';
import { Tabs } from 'antd';

import CampaignDetailTab from './tabs/detail-tab';

const items = [
  { key: '1', label: 'General Information', children: <CampaignDetailTab /> },
  { key: '2', label: 'Business Parameters', children: <CampaignDetailTab /> },
  { key: '3', label: 'CSS', children: <CampaignDetailTab /> },
  { key: '4', label: 'Contacts', children: <CampaignDetailTab /> },
  { key: '5', label: 'Schedule', children: <CampaignDetailTab /> },
];

export default function NewCampaign() {

  const [activeTab, setActiveTab] = React.useState(1);
  const onTabChange = (key) => {
    setActiveTab(key)
  }

  return (
    <>
      <Tabs defaultActiveKey={activeTab} items={items} onChange={onTabChange} />
    </>
  );
}
