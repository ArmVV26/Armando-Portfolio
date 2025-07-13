import { language } from "@vue/eslint-config-prettier/skip-formatting";
import { title } from "process";
import { createI18n } from "vue-i18n";

const messages = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      abilities: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      change: "Cambiar el Idioma",
    },
    home: {
      hi: "¡Hola!",
      iam: "Soy Armando Vaquero",
      developer: [
        "Desarrollador Web Junior",
        "Full Stack Developer",
        "Apasionado por la Tecnología",
      ],
      description:
        "Apasionado por el desarrollo full stack, con formación en ciberseguridad industrial y experiencia en entornos ágiles.",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Conoce mi perfil",
      description:
        "Soy Armando Vaquero Vargas, un Desarrollador Web Junior con formación en Desarrollo de Aplicaciones Web y experiencia práctica en desarrollo full stack en entornos ágiles. Sólida base en tecnologías front-end y back-end, así como una formación complementaria en ciberseguridad industrial. Apasionado por la tecnología y en constante aprendizaje. ",
      downloadCV: "Descargar CV",
      language: ["Español (Nativo)", "Ingles (Nivel B1 - Sin Certificado)"],
      location: "Granada, España",
      education: "Mi Educación",
      studies: [
        {
          year: "2023 - 2025",
          name: "Grado Superior de Desarrollo de Aplicaciones Web",
          school: "IES Francisco Ayala",
          text: "Grado centrado en el desarrollo de aplicaciones web, cubriendo desde el diseño y la maquetación de sitios web hasta la creación de aplicaciones más complejas utilizando lenguajes como JavaScript, CSS, HTML y algunos frameworks modernos.",
          average: "Nota Media: 9,2 / 10",
        },
        {
          year: "2022 - 2023",
          name: "Curso de Especialización en Ciberseguridad Industrial",
          school: "IES Virgen de las Nieves",
          text: "Curso que se enfoca en las prácticas y tecnologías de protección de sistemas y redes dentro del ámbito industrial. Se tratan temas como auditorías de seguridad, protección de infraestructuras críticas y gestión de incidencias.",
          average: "Nota Media: 8,8 / 10",
        },
        {
          year: "2020 - 2022",
          name: "Grado Superior en Telecomunicaciones e Informático",
          school: "IES Virgen de las Nieves",
          text: "Grado que proporciona una formación integral en la instalación, configuración y mantenimiento de redes y sistemas informáticos. Se aprende a gestionar servidores, redes de comunicación y telecomunicaciones.",
          average: "Nota Media: 8,62 / 10",
        },
        {
          year: "2018 - 2020",
          name: "Bachillerato de Ciencias",
          school: "IES Manuel de Falla",
          average: "Nota Media: 6,7 / 10",
        },
      ],
      experience: "Mi Experiencia",
      works: [
        {
          time: "Marzo 2025 - Junio 2025",
          company: "Constella Intelligence",
          text: [
            "Desarrollo de interfaz basada en Vue.js: componentes reutilizables, gráficos, rutas y lógica del cliente.",
            "Conexión y consumo de APIs REST desarrolladas en Django.",
            "Uso de Git, colaboración en equipo y práctica de metodología ágil.",
          ],
        },
        {
          time: "Abril 2022 - Julio 2022",
          company: "Rodych Seguridad",
          text: [
            "Planificación e Instalación de alarmas cableadas e inalámbricas.",
            "Instalación y configuración de CCTV.",
            "Instalación y configuración de sistemas de alarmas antiincendios.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Proyectos",
      projects: [
        {
          title: "HikeLink",
          description:
            "Hikelink es una red social para senderistas. Permite subir rutas GPX, explorar mapas con Leaflet, valorar rutas y participar en el foro comunitario.",
          image: "./img-projects/HikeLink-Img-HomePage.png",
          tag: [
            "Python",
            "Django",
            "DRF",
            "PostgreSQL",
            "Pgadmin",
            "Vue.js",
            "SCSS",
            "Leaflet",
            "Axios",
            "Docker",
          ],
          github: { title: "Ver Codigo", link: "https://github.com/ArmVV26/HikeLink_TFG" },
          demo: { title: "Ver Página", link: "https://www.hikelink.es/" },
        },
        {
          title: "Pokemon Center",
          description:
            "Pokemon Center es una app para explorar Pokémons con información detallada, juegos interactivos y una calculadora de tipos.",
          image: "./img-projects/PokemonCenter-Img-HomePage.png",
          tag: [
            "React",
            "React Router",
            "Vite",
            "TailwindCSS",
            "Recharts",
            "Prettier",
            "Lighthouse",
          ],
          github: { title: "Ver Codigo", link: "https://github.com/ArmVV26/React-Pokedex" },
          demo: { title: "Ver Página", link: "https://pokedexcenter.vercel.app/" },
        },
      ],
    },
    contact: {
      title: "Contacta Conmigo",
      subtitle: "¿Te interesa colaborar o tienes una pregunta?",
      name: "Tu Nombre",
      mail: "Tu Correo",
      subject: "Asunto",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      success: "Mensaje mandado correctamente.",
      error: "Error al mandar el mensaje.",
      other: "También puedes escribirme a ",
      errorName: "El nombre es obligatorio.",
      errorEmail: "El email es obligatorio.",
      errorEmailFormat: "Formato de email inválido.",
      errorSubject: "El asunto es obligatorio.",
      errorMessage: "El mensaje es obligatorio.",
      errorMessageShort: "El mensaje debe tener al menos 10 caracteres.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      abilities: "Abilities",
      projects: "Projects",
      contact: "Contact",
      change: "Change Language",
    },
    home: {
      hi: "Hi!",
      iam: "I'm Armando Vaquero",
      developer: ["Junior Web Developer", "Full Stack Developer", "Passionate about Technology"],
      description:
        "Passionate about full stack development, with a background in industrial cybersecurity and experience in agile environments.",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know my profile",
      description:
        "I'm Armando Vaquero, a Junior Web Developer with a background in Web Application Development and practical experience in full stack development in agile environments. Solid background in front-end and back-end technologies, as well as a complementary training in industrial cybersecurity. Passionate about technology and constantly learning.",
      downloadCV: "Download CV",
      language: ["Spanish (Native)", "English (Level B1 - No Certificate)"],
      location: "Granada, Spain",
      education: "My Education",
      studies: [
        {
          year: "2023 - 2025",
          name: "Certificate of Higher Education in Web Application Development",
          school: "IES Francisco Ayala",
          text: "Degree focused on web application development, covering everything from website design and layout to the creation of more complex applications using languages like JavaScript, CSS, HTML, and some modern frameworks.",
          average: "Average Grade: 9,2 / 10",
        },
        {
          year: "2022 - 2023",
          name: "Advanced Course in Industrial Cybersecurity",
          school: "IES Virgen de las Nieves",
          text: "Course focused on practices and technologies for protecting systems and networks within the industrial field. Topics include security audits, protection of critical infrastructures, and incident management.",
          average: "Average Grade: 8,8 / 10",
        },
        {
          year: "2020 - 2022",
          name: "Certificate of Higher Education in Telecommunications and Computer Science",
          school: "IES Virgen de las Nieves",
          text: "Course focused on practices and technologies for protecting systems and networks within the industrial field. Topics include security audits, protection of critical infrastructures, and incident management.",
          average: "Average Grade: 8,62 / 10",
        },
        {
          year: "2018 - 2020",
          name: "General Certificate of Education (Science)",
          school: "IES Manuel de Falla",
          average: "Average Grade: 6,7 / 10",
        },
      ],
      experience: "My Experience",
      works: [
        {
          time: "March 2025 - June 2025",
          company: "Constella Intelligence",
          text: [
            "Development of interface based on Vue.js: reusable components, charts, routes, and client-side logic.",
            "Connection and consumption of REST APIs developed in Django.",
            "Use of Git, teamwork, and Agile methodology practice.",
          ],
        },
        {
          time: "April 2022 - July 2022",
          company: "Rodych Seguridad",
          text: [
            "Planning and installation of wired and wireless alarms.",
            "Installation and configuration of CCTV.",
            "Installation and configuration of fire alarm systems.",
          ],
        },
      ],
    },
    skills: {
      title: "Abilities",
    },
    projects: {
      title: "Projects",
      projects: [
        {
          title: "HikeLink",
          description:
            "Hikelink is a social network for hikers. It allows you to upload GPX routes, explore maps with Leaflet, rate routes and participate in the community forum.",
          image: "./img-projects/HikeLink-Img-HomePage.png",
          tag: [
            "Python",
            "Django",
            "DRF",
            "PostgreSQL",
            "Pgadmin",
            "Vue.js",
            "SCSS",
            "Leaflet",
            "Axios",
            "Docker",
          ],
          github: { title: "View Code", link: "https://github.com/ArmVV26/HikeLink_TFG" },
          demo: { title: "View Website", link: "https://www.hikelink.es/" },
        },
        {
          title: "Pokemon Center",
          description:
            "Pokemon Center is an app for exploring Pokémons with detailed information, interactive games and a type calculator.",
          image: "./img-projects/PokemonCenter-Img-HomePage.png",
          tag: [
            "React",
            "React Router",
            "Vite",
            "TailwindCSS",
            "Recharts",
            "Prettier",
            "Lighthouse",
          ],
          github: { title: "View Code", link: "https://github.com/ArmVV26/React-Pokedex" },
          demo: { title: "View Website", link: "https://pokedexcenter.vercel.app/" },
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle: "Are you interested in collaborating or do you have a question?",
      name: "Your Name",
      mail: "Your Mail",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      success: "Message sent successfully.",
      error: "Error sending message.",
      other: "You can also write to me at ",
      errorName: "The name is required.",
      errorEmail: "The email is required.",
      errorEmailFormat: "Invalid email format.",
      errorSubject: "The subject is required.",
      errorMessage: "The message is required.",
      errorMessageShort: "The message must be at least 10 characters long.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "es",
  messages,
});
