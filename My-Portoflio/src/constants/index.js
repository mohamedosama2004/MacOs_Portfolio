const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Courses", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "2024-2025",
    title: "The Complete JavaScript Course : From Zero to Expert",
    image: "/images/blog1.png",
    link: "https://www.udemy.com/course/the-complete-javascript-course",
  },
  {
    id: 2,
    date: " 2025 - 2026",
    title: "The Ultimate React Course : React, Next.js, Redux & More",
    image: "/images/blog2.png",
    link: "https://www.udemy.com/course/the-ultimate-react-course",
  },
  {
    id: 3,
    date: " 2025 - 2026",
    title: "Route 6-months front-end diploma ",
    image: "/images/blog3.png",
    link: "https://www.routeegypt.com/",
  },
  {
    id: 4,
    date: " 2025 - 2026",
    title: "Nti FrontEnd Internship ",
    image: "/images/blog4.png",
    link: "https://www.nti.sci.eg/",
  },
  {
    id: 5,
    date: " 2024 - 2025",
    title: "AI Career Essentials",
    image: "/images/blog5.png",
    link: "https://www.alxafrica.com/programme/career-ready-skills-training",
  },
];

const techStack = [
  {
    category: " Languages",
    items: ["JavaScript", "C++", "HTML", "CSS", "Python", "Java"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/mohamedosama2004",
  },
  {
    id: 2,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#00498dff",
    link: "https://web.facebook.com/mohamed.osama.960566/",
  },
  
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#33c4f8ff",
    link: "https://www.linkedin.com/in/mohammed-osama-965612263/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Pop corn Movies Rate",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Pop Corn Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Pop-Corn is a fast and simple movie search application built with React",
            "Type any movie name and get instant matching results from the OMDb API.",
            "Each movie card shows essential details like title, year, and poster.",
            "Built using React (Vite), JavaScript (ES2023), OMDb API, Netlify hosting, custom React hooks, and modern CSS styling.",
          ],
        },
        {
          id: 2,
          name: "Pop-corn.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://pop-corn-react.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pop-corn.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "pop-corn.github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/Pop-Corn",
          position: "top-92 right-80",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "React Quiz ",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-70",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "React Quiz Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A responsive React quiz application that loads dynamic questions from JSON, tracks user progress, and provides real-time scoring with smooth UI interactions.",
            "It's built modern React (Hooks + Context API)",
          ],
        },
        {
          id: 2,
          name: "reactQuiz.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://react-quiz-q.netlify.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "REACTQUIZ.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "React quiz .github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/react-quiz",
          position: "top-60 right-70",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "World Wise",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "World Wise Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "World Wise Journey is a modern, responsive travel-inspiration application that helps users explore destinations around the world.",
            "Responsive & Fast UI — Built with a focus on performance and responsiveness across devices using React and modern web tooling.",
            "Global Coverage — Includes many destinations across the world for broad travel inspiration.",
            "React, JavaScript (ES6+), CSS/SCSS (or styled components), Netlify hosting/deployment, possibly JSON or static data for destinations.",
          ],
        },
        {
          id: 2,
          name: "World-wise.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://world-wise-journey.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "World-wise.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-90 right-20",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "World-wise.github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/world-wise",
          position: "top-52 right-80",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Bankist App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-70",
      windowPosition: "top-[10vh] left-7",
      children: [
        {
          id: 1,
          name: "Bankist Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Bankist-JS is a vanilla JavaScript (ES6+) banking interface simulation that demonstrates account operations, transaction history, and user authentication.",
            "Transaction History & Balance — View transactions, check current balance, and track money movements (deposits/withdrawals).",
            "Educational & Demonstration Purpose — Great for learning JS fundamentals (data handling, DOM manipulation, event handling).",
            "To can use the App Use user 1 :js pass1: 1111 | user 2 :jd pass2: 2222 | user 3 :stw pass3: 3333 | user 4 :ss pass4: 4444  .",
          ],
        },
        {
          id: 2,
          name: "Bankist.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mohamedosama2004.github.io/bankist-js/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Bankist.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
        {
          id: 5,
          name: "Bankist.github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/bankist-js",
          position: "top-32 right-40",
        },
      ],
    },

    // ▶ Project 5
    {
      id: 9,
      name: "Forma App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-5",
      windowPosition: "top-[23vh] left-7",
      children: [
        {
          id: 1,
          name: "Bankist Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Forma is a HTMl Css3 website .",
            "Animation used  By AOS Library.",
            "Fully Responsive on all PlatForms.",
          ],
        },
        {
          id: 2,
          name: "Forma.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://formarats.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Forma.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-5.png",
        },
        {
          id: 5,
          name: "Forma.github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/forma",
          position: "top-52 right-20",
        },
      ],
    },

    // ▶ Project 6
    {
      id: 10,
      name: "Yummy",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 left-40",
      windowPosition: "top-[3vh] left-7",
      children: [
        {
          id: 1,
          name: "Yummy.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Yummy is a clean, modern, responsive food-themed website that serves as a portfolio project to showcase frontend skills in HTML, CSS.",
            "Static Content Showcasing — Perfect for presenting a restaurant or food-service site with sections like menus, about, contact, and hero banner.",
            "Basis for extending with JavaScript, backend integration, or interactive features (e.g. ordering, reviews, dynamic menus).",
          ],
        },
        {
          id: 2,
          name: "Yummy.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mohamedosama2004.github.io/Yummy-/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Yummy.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-6.png",
        },
        {
          id: 5,
          name: "Yummy.github",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mohamedosama2004/Yummy-",
          position: "top-42 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal3.jpeg",
    },
    {
      id: 2,
      name: "Gym-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal1.jpeg",
    },
    {
      id: 3,
      name: "Gang.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal2.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/aboutme-text.jpeg",
      description: [
        "Hey! I’m Mohamed 👋, a web developer who enjoys Coding, building responsive websites",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
