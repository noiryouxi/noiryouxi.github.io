import React from 'react';
import Introduction from '../../components/Introduction';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

const Home: React.FC = () => {
  return (
    <section>
      <Introduction />
      <Skills />
      <Projects />
      <Projects />
      <Projects />
      <Projects />
    </section>
  );
};

export default Home;