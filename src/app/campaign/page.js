import PageContent from '@/components/page-content'
import { HomeOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import Link from 'next/link'
import ListCampaign from './_components/list'

export default function CampaignPage() {
  return <PageContent
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
        title: 'Campaign',
      },
    ]}
  >
    <ListCampaign />
  </PageContent>
}