import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Main = styled.main`
  min-height: calc(100vh - 64px - 80px);
  display: flex;
  flex-direction: column;
`;

const Layout = ({
  children,
  title = 'Company — Professional Services',
  description = 'Professional services and solutions for modern businesses.',
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>

    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
