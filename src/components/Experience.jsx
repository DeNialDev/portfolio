import React from "react";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      title: "Vue",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
      style: "shadow-orange-800",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technolgies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-lg hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img className="w-20 mx-auto" src={src} alt="laravel-logo" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
