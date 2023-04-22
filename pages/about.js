import { useEffect } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const AboutTheProject = ({ globalData }) => {
  useEffect(() => {
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
  });
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full mt-20 relative">
        <h1 className="text-4xl lg:text-5xl text-center mb-12">
          <span className="text-6xl mb-6 inline-block">😬</span>
          <br />
          About the project
        </h1>
        <p className="block mb-12 text-center">
          A crowd-sourced collection of everything you shouldn&apos;t be
          building with LLMs. You&apos;re… not doing that right?
        </p>

        <p className="block mb-12 text-center">
          This project was made at{' '}
          <a href="https://commonmagic.notion.site/commonmagic/AI-Hackathon-London-0d33d78465894bbb8639f19f5daf6b50">
            the inaugural AI Hackathon London
          </a>
          .
        </p>

        <p className="block mb-12 text-center">
          What started as a playful idea to explore the darker side of the
          exciting recent developments turned into this website which gathers
          several experiments the LLMSAGG team made over twenty four hours
          together.
        </p>

      </main>
    </Layout>
  );
};

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}

export default AboutTheProject;
