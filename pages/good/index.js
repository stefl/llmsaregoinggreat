const endpoint = 'https://eoa4pwbait5wsud.m.pipedream.net';

import Link from 'next/link';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import axios from 'axios';
import { useEffect } from 'react';

export default function Good({ posts, globalData }) {
  for (const post of posts) {
    const { fields } = post;
    console.log({ fields });
  }

  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  });

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          <Link href="/">{globalData.blogTitle}</Link>
        </h1>
        {posts && (
          <ul className="w-full">
            {posts.map((post) => (
              <li
                key={post.fields["Slug"]}
                className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
              >
                <Link href={`/good/${post.fields["Slug"]}`}>
                  <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                    {post.fields.date && (
                      <p className="uppercase mb-3 font-bold opacity-60">
                        {post.fields.date}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl">
                      {post.fields['Name']}
                    </h2>
                    {post.fields['One Liner'] && (
                      <p className="mt-3 text-lg opacity-60">
                        {post.fields['One Liner']}
                      </p>
                    )}
                    <ArrowIcon className="mt-4" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
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

export async function getStaticProps() {
  const { data } = await axios.get(endpoint);
  console.log('Got data', { data });
  const globalData = getGlobalData();

  return { props: { posts: data, globalData }, revalidate: 60 };
}
