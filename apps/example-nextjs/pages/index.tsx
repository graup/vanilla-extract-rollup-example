import Head from 'next/head';

import { BillingPage } from '../components/billing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>

      <BillingPage />
    </div>
  );
}
