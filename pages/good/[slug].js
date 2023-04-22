const endpoint = 'https://eoa4pwbait5wsud.m.pipedream.net';
import axios from 'axios';
import Project from '../../components/Project';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import { useEffect } from 'react';
const EvilProject = ({ project, globalData }) => {
  if (!project) {
    return <></>;
  }

  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  });
  return (
    <Layout>
      <SEO
        title={project.fields['Name']}
        description={project.fields['One Liner']}
      />
      <Header name="LLMs are Going Great!" />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {project.fields['Name']}
        </h1>
        <Project project={project} />
      </main>
      <Footer copyrightText={globalData.footerText} />
      <div
        className="absolute top-0 left-0 h-screen w-full"
        style={{ zIndex: -1 }}
      >
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
};

export default EvilProject;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await axios.get(endpoint);
  console.log('Got data', { data });
  const globalData = getGlobalData();

  return {
    props: { globalData, project: data.find((p) => p.fields['Slug'] === slug) },
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
