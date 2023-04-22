const endpoint = 'https://eoe319htqkfl5jw.m.pipedream.net';
import axios from 'axios';
import Project from '../../components/Project';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import Link from 'next/link';
const EvilProject = ({ project, globalData }) => {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {project.fields["Name"]}
        </h1>
        <Project project={project} />
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
};

export default EvilProject;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await axios.get(endpoint);
  console.log('Got data', { data });
  const globalData = getGlobalData();

  return {
    props: { project: data.find((p) => p.fields['Slug'] === slug), globalData },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { data } = await axios.get(endpoint);
  return {
    paths: data.map((p) => {
      console.log('Path', p.fields);
      return {
        params: {
          slug: p.fields['Slug'],
        },
      };
    }),
    fallback: true, // can also be true or 'blocking'
  };
}
