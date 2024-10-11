import Link from 'next/link'
import PageContent from '@/components/page-content'
import NewCampaign from '../_components/new/index'

export default function CreateCampaign() {

  return <PageContent
    breadcrumbs={[
      { title: (<Link href={'/'}> HOME </Link>) },
      { title: (<Link href={'/campaign'}> Campaign </Link>) },
      { title: 'New Campaign' },
    ]}
  >
    <NewCampaign />
  </PageContent>
}