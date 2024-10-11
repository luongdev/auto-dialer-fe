'use client';

import { Button, Collapse, Row, Col } from 'antd';
import CampaignDetail from './_components/campaign-detail';
import ContactStrategy from './_components/contact-strategy';

const items = [
  {
    key: '1',
    label: 'Campaign Detail',
    children: <CampaignDetail />,
  },
  {
    key: '2',
    label: 'Contact Strategy',
    children: <ContactStrategy />,
  }
];

export default function CampaignDetailTab() {
  return <>
    <Row gutter={24}>
      <Col span={24}><Collapse items={items} /></Col>
    </Row>
    <Row style={{marginTop: '1rem', textAlign: 'right'}}>
      <Col span={24}>
        <Button type="primary" size="large">Save</Button>
      </Col>
    </Row>
  </>
}