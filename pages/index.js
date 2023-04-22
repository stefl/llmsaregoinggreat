import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header />
      <main className="w-full mt-20">
        <h1 className="text-4xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <p className="block mb-12 text-center">
          A crowd-sourced collection of everything you shouldn't be building
          with LLMs. You're… not doing that right?
        </p>
        <div className="flex-row flex w-full">
          <div className="flex-auto text-center">
            <Link href="/evil">
              <a className="border border-white font-bold text-xl rounded p-4 hover:bg-white hover:text-gray-600">
                I'm feeling evil
              </a>
            </Link>
          </div>
          <div className="flex-auto text-center">
            <Link href="/evil">
              <a className="border border-white font-bold text-xl rounded p-4 hover:bg-white hover:text-gray-600">
                I'm feeling good
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
