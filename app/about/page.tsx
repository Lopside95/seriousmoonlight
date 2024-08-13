import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:max-w-[70%]">
        <h3>About Us</h3>
        <h4 className="sm:text-2xl sm:leading-9 font-normal sm:font-[270]">
          <div className="pt-8 pb-6">
            We’re a collection of brand strategy and content specialists who
            work together to tell compelling stories.
          </div>
          Peter Wallington has been inspired by David Bowie’s music since, well,
          a long time ago. He has been a journalist, co-founded a PR firm called
          DiagonalStreet Communications and sold it to Ogilvy South Africa after
          a while, and during that time worked on financial and corporate
          communication campaigns. Serious Moonlight has focused on logistics,
          tourism and education, and Peter works with talented designers,
          writers, media and business strategists and social media operators.
        </h4>
      </div>
    </div>
  );
};

export default About;
