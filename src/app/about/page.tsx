import React from 'react';
import Introduction from '../../components/Introduction';

const About: React.FC = () => {
  return (
    <section>
      <h1>About Me</h1>
      <Introduction />
      <p>I am a passionate web developer...</p>
    </section>
  );
};

export default About;