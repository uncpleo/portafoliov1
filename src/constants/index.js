import uno1 from "../assets/projects/uno_1.png";
import dos1 from "../assets/projects/dos_1.png";
import dos2 from "../assets/projects/dos_2.png";
import dos3 from "../assets/projects/dos_3.png";
import dos4 from "../assets/projects/dos_4.png";
import tres12 from "../assets/projects/tres_1_2.png";
import tres3 from "../assets/projects/tres_3.png";
import tres4 from "../assets/projects/tres_4.png";
import cinco1 from "../assets/projects/cinco_1.png";
import cop from "../assets/projects/copitoStore.png";

export const HERO_CONTENT = `I am a dedicated university student with a strong passion for full stack development, possessing hands-on experience in building web applications using modern technologies like Go, Node.js, React, SQL Server, and MySQL. Despite being in the midst of my academic journey, I have successfully contributed to various projects, applying my technical skills to create dynamic and scalable solutions. My goal is to establish a career in full stack development, leveraging my growing expertise to drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hello! I am a passionate Systems Engineering student with a strong interest in web development. I have gained hands-on experience with technologies like Node.js, Tailwind, GitHub, Express, React.js, Python, and Golang through various bootcamps and hackathons. My active participation in tech events has broadened my perspective and honed my problem-solving skills. Committed to staying current with industry trends, I regularly engage with the tech community and contribute to open-source projects. I am excited about leveraging my skills to create impactful web solutions and look forward to contributing to this dynamic field.`;

export const EXPERIENCES = [
  {
    year: "2023-2024",
    role: "Full Stack Developer",
    company: "Hospital Regional Docente Clínico-Quirúrgico \"Daniel Alcides Carrión\"",
    description: `My team developed a web application based on golang, bootstrap and SQL Server type database. The main idea about the apps was the fact that they need to save files in the data center, but with a page that will help people who don't know anything about code.`,
    technologies: ["Golang", "Bootstrap", "Javascript", "SQL Server"],
  },
  {
    year: "2024",
    role: "Data Scientist and Back-End Developer",
    company: "Health Systems Innovation Lab",
    description: `I participated in the international hackathon launched for Harvard and the business incubator area. I participated as a Back-End and Data Scientis developer because we need to do everything in Python to use the same type of code.`,
    technologies: ["Python", "Django", "HTML"],
  }
];

export const PROJECTS = [
  {
    title: "Semana 1: Ejercicio 1.1",
    image: uno1,
    description:
      "Usar apropiadamente el Editor Visual Studio Code mediante el plugin Emmet y atajos de teclado de VSC.",
    technologies: ["HTML", "Visual Studio Code"],
    link: "https://uncpleo.github.io/Semana_01/page01.html"
  },
  {
    title: "Semana 2: Ejercicio 2.1",
    image: dos1,
    description:
      "Diseñar botones interactivos similar a boostrap utilizando las clases btn success info etc.",
    technologies: ["HTML", "Visual Studio Code", "CSS"],
    link: "https://uncpleo.github.io/Semana_02/ejercicio21.html"
  },
  {
    title: "Semana 2: Ejercicio 2.2",
    image: dos2,
    description:
      "Diseñar botones interactivos para redes sociales utilizando clases (fa fa-facebook etc) y caracteres similar a font-awesome. Utilizar iconos de: fontawesome",
    technologies: ["HTML", "Visual Studio Code", "Font Awesome", "CSS"],
    link: "https://uncpleo.github.io/Semana_02/ejercicio22.html"
  },
  {
    title: "Semana 2: Ejercicio 2.3",
    image: dos3,
    description:
      "Diseñar un loader (animación de precarga) como un anillo que gira con animación infinita.",
    technologies: ["HTML", "Visual Studio Code", "CSS"],
    link: "https://uncpleo.github.io/Semana_02/ejercicio23.html"
  },
  {
    title: "Semana 2: Ejercicio 2.4",
    image: dos4,
    description:
      "Diseñar La estructua de página responsiva",
    technologies: ["HTML", "Visual Studio Code", "CSS"],
    link: "https://uncpleo.github.io/Semana_02/ejercicio24.html"
  },
  {
    title: "Semana 3: Ejercicio 3.1",
    image: tres12,
    description:
      "Diseñar una pagina web responsive con Bootstrap que contenga una fila y 12 columnas para pantallas sm, md, lg, xl y xxl. Segun la siguiente figura.",
    technologies: ["HTML", "Visual Studio Code", "Bootstrap"],
    link: "https://uncpleo.github.io/sem03/ejercicio3.1.html"
  },
  {
    title: "Semana 3: Ejercicio 3.2",
    image: tres12,
    description:
      "Desarrollar el ejercicio 3.1 con Tailwind",
    technologies: ["HTML", "Visual Studio Code", "Tailwind"],
    link: "https://uncpleo.github.io/sem03/ejercicio3.2.html"
  },
  {
    title: "Semana 3: Ejercicio 3.3",
    image: tres3,
    description:
      "Desarrollar el ejercicio 3.1 con CSS puro",
    technologies: ["HTML", "Visual Studio Code", "CSS"],
    link: "https://uncpleo.github.io/sem03/ejercicio3.3.html"
  },
  {
    title: "Semana 3: Ejercicio 3.4",
    image: tres4,
    description:
      "Diseñar una pagina web responsive con Bootstrap que contenga un diseño según la plantilla [ Plantilla BootStrap. Las características de la página deberá tener el mismo contenido texto e imagenes.",
    technologies: ["HTML", "Visual Studio Code", "Bootstrap", "Javascript"],
    link: "https://uncpleo.github.io/eje3.4/ejercicio3.4.html"
  },
  {
    title: "Semana 5",
    image: cinco1,
    description:
      "Desarrollar aplicaciones dinámicas con Javascript. Ejercicio 5.1, 5.2, 5.3, 5.4",
    technologies: ["HTML", "Visual Studio Code", "Javascript"],
    link: "https://uncpleo.github.io/Semana_05/ejercicio1.html"
  },
  {
    title: "Copito Store",
    image: cop,
    description:
      "Aplicación web que utiliza pasarela de pagos y monetización",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://uncpleo.github.io/copito-tienda/"
  }
];

export const CONTACT = {
  phoneNo: "+51 945 888 820",
  email: "leonardocqtc@gmail.com",
};
