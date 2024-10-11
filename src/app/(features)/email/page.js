import React from 'react';
import Link from 'next/link';

import PageContent from '@/components/page-content';
import EmailPage from './_components/email';

export default function Page() {
  return (
    <PageContent
      breadcrumbs={[
        {
          title: <Link href={'/dashboard'}>DASHBOARD</Link>,
        },
        {
          title: 'EMAIL',
        },
      ]}
    >
      <EmailPage />
    </PageContent>
  );
}
