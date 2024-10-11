import { Col, Row, Form, Input, DatePicker, TimePicker } from 'antd';

const { RangePicker: DateRangePicker } = DatePicker;
const { RangePicker: TimeRangePicker } = TimePicker;

export default function CampaignDetail() {

  const [form] = Form.useForm();

  return <>
    <Form form={form} layout="vertical">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="name" label="Campaign Name">
            <Input placeholder="Campaign Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="description" label="Description">
            <Input placeholder="Description" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="dateRange" label="Date range">
            <DateRangePicker style={{ width: '100%' }} format="YYYY-MM-DD"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="timeRange" label="Time Range">
            <TimeRangePicker style={{ width: '100%' }} format="HH:mm" showNow/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </>
}
