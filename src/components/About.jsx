import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About me
          </p>
        </div>
        <p className="text-xl mt-20">
          Web developer with experience in building dynamic sites and
          applications. Ability in front-end and back-end languages,
          collaborator in multidisciplinary teams. multidisciplinary teams.
          Committed to continuous learning to deliver quality and performance.
          performance.
        </p>
      </div>
    </div>
  );
};

export default About;
