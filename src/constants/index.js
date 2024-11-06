
import project1 from "../assets/projects/logo.jpg";
import project2 from "../assets/projects/weather.jpg";
import project3 from "../assets/projects/bot.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in frontend technologies like React as well as Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.I love to explore more about the fiels of AI and ML.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and delving deep into the field of machine learning and Artificial intelligence.`;

export const EXPERIENCES = [
  {
    year: "DEC-2023 : APRIL-2024",
    role: "Project Intern",
    company: "Chinar Quantum AI",
    description: `I worked on creating question-answering models for different real life problems.Working on langchain and other modules for the problem solving.`,
    technologies: ["Python", "Streamlit", "NLP", "Langchain","OpenAI],
  },
  {
    year: "AUG-2023 : DEC-2023",
    role: "Project Intern",
    company: "Indian Institute of Technology,Patna",
    description: `I was in agroup of interns working on image catalogue for shopping malls, worked on annotating images and creating models for image processng using RCNN.`,
    technologies: ["NLP", "RCNN", "Python", "Image-Annotation"],
  },
  {
    year: "2021 - 2023",
    role: "Tutor",
    company: "Koshur Scientist",
    description: `I was teaching high school maths and chemistry on their platform. Worked in a team of professionals in designing and developing the different courses for students.`,
    technologies: ["Chemistry", "Maths","CFO"],
  },
  {
    year: "DEC-2023: JAN-2024",
    role: "Intern",
    company: "Indian Institute of Technology, Delhi",
    description: `I worked on the front end of the project MAVI. I worked on enhancing the User Interface and adding text-to-speech functionality to the project.The project is for helping the Visually impaired people through mobile assistance.`,
    technologies: ["Andriod Development", "Andriod Studio","MAVI"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A fully functional portfolio website showcasing social link,work experience and about section.",
    technologies: ["HTML", "CSS", "React","Javascript","Tailwind"],
  },
  {
    title: "Network Simulator",
    image: project3,
    description:
      "An application implementing multiple layers of TCP/IP model of the computer networks,Like Physical layer,data-link layer etc",
    technologies: ["Python", "Streamlit","NetworkX"],
  },
  {
    title: "Weather Website",
    image: project2,
    description:
      "A weather website showing real time weather for any location. Shows the different weather parameters.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "PDF Chat APP",
    image: project3,
    description:
      "An LLM based app for querying PDF's. Ask any question about your uploaded PDf andd the bot will answer from the Pdf itself.",
    technologies: ["Python", "Streamlit", "Langchain","OpenAI Embeddings"],
  },
];

export const CONTACT = {
  address: "418, Chawalgam-Kulgam ,J&K (192231) ",
  phoneNo: "+91 6005296492 / +91 7051022555",
  email: "shahidfarooq438@gmail.com",
};
