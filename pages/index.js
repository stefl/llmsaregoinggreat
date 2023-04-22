import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function Index({ posts, globalData }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  });
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />

      <main className="w-full mt-20 relative">
        <h1 className="text-4xl lg:text-5xl text-center mb-12">
          <span className="text-6xl mb-6 inline-block">😬</span>
          <br />
          {globalData.blogTitle}
        </h1>
        <p className="block mb-12 text-center">
          A crowd-sourced collection of everything you shouldn&apos;t be
          building with LLMs. You&apos;re… not doing that right?
        </p>
        <div className="flex-col lg:flex-row flex w-full">
          <div className="flex-auto text-center mb-12 lg:mb-0">
            <Link href="/evil">
              <a className="border border-white font-bold text-xl rounded p-4 hover:bg-white hover:text-gray-600">
                😇 I&apos;m feeling evil
              </a>
            </Link>
          </div>
          <div className="flex-auto text-center">
            <Link href="/good">
              <a className="border border-white font-bold text-xl rounded p-4 hover:bg-white hover:text-gray-600">
                😎 I&apos;m feeling good
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <div className="p-20">
            <Link href="/about">
              <a>A London Generative AI Hackathon project</a>
            </Link>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />

      <div
        className="absolute top-0 left-0 h-screen w-full"
        style={{ zIndex: -1 }}
      >
        <div
          className="w-1/2 absolute top-0 left-0 h-screen pointer-events-none hidden lg:block"
          style={{
            backgroundColor: '#ff0000',
            mixBlendMode: 'multiply',
            opacity: 0.5,
          }}
        />
        <GradientBackground
          variant="large"
          className="fixed top-20 opacity-40 dark:opacity-60"
        />
        <GradientBackground
          variant="small"
          className="absolute bottom-0 opacity-20 dark:opacity-10"
        />
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
