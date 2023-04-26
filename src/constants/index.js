import {
    backend,
    blender,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    upbyte,
    elontomars,
    myblog,
    quora,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "3D Modeling",
      icon: blender,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Myblog",
      description:
        "리액트와 Express를 활용해서 만든 개인 블로그 입니다. 기본적인 CRUD를 지원하고 개인 로그인 및 구글 Oauth기반 로그인, 사진 업로드, 내용 및 태그별 검색, 반응형 디자인을 지원합니다.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: myblog,
      source_code_link: "https://github.com/clf-jun/myblog",
    },
    {
      name: "QuoraClone",
      description:
        "북미권 지식인 쿼라 클론코딩입니다. 프론트는 리액트, MUI를 사용했으며 백엔드는 Firebase 입니다. 기본적인 CRUD와 구글 Oauth 기반 로그인이 가능합니다",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: quora,
      source_code_link: "https://github.com/clf-jun/quora_clone_project",
    },
    {
      name: "Upbyte",
      description:
        "리액트와 Express 기반, 업비트의 Rest Api 및 웹소켓 Api를 활용해서 만든 실시간 모의코인 거래소입니다. 오픈 소스를 기반으로 시작했으며, 아직 제작 중에 있습니다.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "websocket api",
          color: "pink-text-gradient",
        },
      ],
      image: upbyte,
      source_code_link: "https://github.com/clf-jun",
    },
    {
      name: "ElonToMars",
      description:
        "ELONHERO라는 밈 코인을 제작하면서 만든 홍보용 게임입니다. 유니티(C#)로 구현하였으며, WebGL 방식으로 빌드를 하여 웹사이트 내에서 플레이가 가능하도록 하였습니다.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "webgl",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: elontomars,
      source_code_link: "https://github.com/clf-jun",
    },
  ];
  
  export { services, technologies, experiences, projects };