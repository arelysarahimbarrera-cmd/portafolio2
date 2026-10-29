import type { Language } from '@/data/portfolio';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    intro: string;
    exploreProjects: string;
    aboutMe: string;
    linkedinButton: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    para1: string;
    para2: string;
    highlights: { title: string; text: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: { title: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    statusProposed: string;
    statusInProgress: string;
    modal: {
      objective: string;
      problem: string;
      approach: string;
      tools: string;
      results: string;
      lessons: string;
      close: string;
      closeAria: string;
      placeholder: string;
    };
    items: {
      title: string;
      tagline: string;
      objective: string;
      problem: string;
      approach: string;
      tools: string[];
      results: string;
      lessons: string;
    }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    entries: { period: string; title: string; organization: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: { email: string; linkedin: string; github: string; name: string; message: string };
    linkedinValue: string;
    githubValue: string;
    placeholders: { name: string; email: string; message: string };
    send: string;
    sending: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageShort: string;
    };
    noConfigTitle: string;
    noConfigBody: string;
    noConfigEmailLink: string;
  };
  footer: {
    builtWith: string;
    links: { about: string; skills: string; projects: string; experience: string; contact: string };
  };
  theme: {
    toLight: string;
    toDark: string;
  };
}

const translations: Record<Language, Translation> = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      getInTouch: 'Contáctame',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      selectLanguage: 'Seleccionar idioma',
    },
    hero: {
      badge: 'Portafolio',
      titlePrefix: 'De los Datos a las',
      titleAccent: 'Decisiones.',
      subtitle: 'Física | Análisis de Datos | Finanzas | Tecnología y Automatización',
      intro:
        'Combino el pensamiento analítico, los datos y la tecnología para entender problemas complejos y desarrollar soluciones prácticas.',
      exploreProjects: 'Explorar mis proyectos',
      aboutMe: 'Sobre mí',
      linkedinButton: 'Visita mi perfil de LinkedIn',
      scroll: 'Desplázate',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Una física que trabaja donde los datos se encuentran con el negocio',
      para1:
        'Comencé con una licenciatura en Física, que me enseñó a descomponer sistemas complejos en partes medibles y razonar sobre ellos con rigor. Esa mentalidad se trasladó de forma natural al análisis de datos y al sector financiero, donde trabajé con datos de negocio, reportes recurrentes y procesos operativos.',
      para2:
        'Hoy combino esa base analítica con habilidades tecnológicas prácticas: escribo Python y SQL para automatizar flujos de trabajo, validar datos y construir visualizaciones claras. También contribuyo a proyectos de ingeniería óptica, manteniendo un pie en el mundo científico que dio forma a mi forma de pensar.',
      highlights: [
        {
          title: 'Formación en Física',
          text: 'Una licenciatura en Física desarrolló mi pensamiento analítico, el rigor cuantitativo y un enfoque metódico para la resolución de problemas.',
        },
        {
          title: 'Experiencia financiera',
          text: 'Trabajo práctico en entornos financieros y de negocio: reportes, análisis de datos y soporte de procesos de negocio.',
        },
        {
          title: 'Automatización y código',
          text: 'Desarrollo de rutinas SQL y scripts en Python para validar datos, automatizar flujos de trabajo y reducir el esfuerzo manual.',
        },
        {
          title: 'Ingeniería óptica',
          text: 'Aplicación de habilidades experimentales y de medición a proyectos de ingeniería óptica y análisis de datos científicos.',
        },
      ],
    },
    skills: {
      eyebrow: 'Habilidades',
      title: 'Capacidades en cuatro dominios',
      subtitle: 'Una combinación de habilidades analíticas, de negocio y técnicas, organizadas por su ámbito de aplicación.',
      categories: [
        { title: 'Datos y análisis' },
        { title: 'Finanzas y negocio' },
        { title: 'Tecnología y automatización' },
        { title: 'Científico y técnico' },
      ],
    },
    projects: {
      eyebrow: 'Proyectos destacados',
      title: 'Proyectos propuestos en curso',
      subtitle: 'Estos son proyectos propuestos o en curso. Haz clic en cualquier tarjeta para ver el desglose completo.',
      viewDetails: 'Ver detalles',
      statusProposed: 'Propuesto',
      statusInProgress: 'En curso',
      modal: {
        objective: 'Objetivo',
        problem: 'Problema',
        approach: 'Enfoque',
        tools: 'Herramientas',
        results: 'Resultados',
        lessons: 'Lecciones aprendidas',
        close: 'Cerrar',
        closeAria: 'Cerrar detalles del proyecto',
        placeholder: 'Marcador ilustrativo: se añadirán elementos visuales y métricas a medida que se complete el proyecto.',
      },
      items: [
        {
          title: 'Business Data Insights',
          tagline: 'Análisis de datos de negocio con un panel interactivo para tomadores de decisiones.',
          objective:
            'Transformar datos de negocio en bruto en información clara y accionable mediante un panel interactivo que destaque las tendencias clave de rendimiento.',
          problem:
            'Los tomadores de decisiones suelen depender de hojas de cálculo estáticas que ocultan tendencias, retrasan el análisis y dificultan la comparación de métricas entre periodos.',
          approach:
            'Consolidar datos de múltiples fuentes, definir las métricas clave que importan a los interesados y construir un panel visual con filtros y vistas detalladas.',
          tools: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],
          results:
            'Resultado esperado: un único panel donde los equipos pueden monitorizar ingresos, actividad de clientes y KPIs operativos en tiempo real. Resultados por documentar una vez completado el proyecto.',
          lessons:
            'Por añadir una vez completado el proyecto: enfoque previsto en alinear las visualizaciones con las preguntas que los interesados realmente formulan.',
        },
        {
          title: 'Smart Data Automation',
          tagline: 'Un flujo de trabajo en Python y SQL para la validación automatizada de datos y reportes.',
          objective:
            'Reducir el esfuerzo manual y el error humano automatizando tareas repetitivas de validación de datos y generación de reportes de principio a fin.',
          problem:
            'Las comprobaciones rutinarias de datos y la generación de reportes consumen horas cada semana, son propensas a errores de copiar y pegar, y escalan mal a medida que crece el volumen de datos.',
          approach:
            'Diseñar una canalización programada que extraiga datos vía SQL, los valide con reglas de Python y genere reportes formateados, destacando anomalías para revisión.',
          tools: ['Python', 'SQL', 'Pandas', 'Scripts de automatización', 'Programación de tareas'],
          results:
            'Resultado esperado: un flujo de trabajo repetible y auditable que se ejecuta sin intervención manual. Resultados por documentar una vez completado el proyecto.',
          lessons:
            'Por añadir una vez completado el proyecto: enfoque previsto en equilibrar la validación estricta con la flexibilidad para manejar casos excepcionales.',
        },
        {
          title: 'Optical Data Lab',
          tagline: 'Visualización de datos científicos y análisis de mediciones ópticas.',
          objective:
            'Aplicar técnicas de análisis de datos a mediciones ópticas, produciendo visualizaciones que faciliten la interpretación de resultados experimentales.',
          problem:
            'Los experimentos ópticos generan grandes volúmenes de datos de medición que son difíciles de interpretar sin herramientas dedicadas de visualización y análisis.',
          approach:
            'Construir rutinas de análisis reutilizables que limpien, transformen y grafiquen datos de medición óptica, con atención a la precisión y la propagación de errores.',
          tools: ['Python', 'NumPy', 'Matplotlib', 'Datos experimentales', 'Estadística'],
          results:
            'Resultado esperado: visualizaciones claras y reproducibles que comuniquen tendencias e incertidumbres de medición. Resultados por documentar una vez completado el proyecto.',
          lessons:
            'Por añadir una vez completado el proyecto: enfoque previsto en preservar la integridad de las mediciones a lo largo de la canalización de análisis.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia y educación',
      title: 'Un recorrido entre la ciencia y el negocio',
      entries: [
        {
          period: '2019 — 2023',
          title: 'Licenciatura en Física',
          organization: 'Universidad',
          description:
            'Estudié física fundamental con énfasis en métodos experimentales, óptica y análisis de datos. Desarrollé una base sólida en pensamiento cuantitativo y resolución de problemas.',
        },
        {
          period: '2021 — 2022',
          title: 'Analista de datos financieros (Prácticas)',
          organization: 'Empresa de servicios financieros',
          description:
            'Apoyé la elaboración de reportes y el análisis en un entorno del sector financiero. Trabajé con hojas de cálculo, conjuntos de datos financieros y reportes de negocio recurrentes.',
        },
        {
          period: '2022 — 2023',
          title: 'Analista de datos de negocio',
          organization: 'Empresa tecnológica',
          description:
            'Analicé datos de negocio para informar decisiones operativas. Construí paneles y reportes, e identifiqué oportunidades de mejora de procesos.',
        },
        {
          period: '2023 — 2024',
          title: 'Especialista en datos y automatización',
          organization: 'Proyecto de consultoría',
          description:
            'Desarrollé rutinas SQL y scripts en Python para automatizar flujos de validación, procesamiento y reportes de datos para clientes.',
        },
        {
          period: '2024 — Actualidad',
          title: 'Colaboradora en ingeniería óptica',
          organization: 'Laboratorio de investigación',
          description:
            'Contribuyo a proyectos de medición óptica y análisis experimental, aplicando conocimientos de física y habilidades de datos a tareas de instrumentación.',
        },
        {
          period: '2022 — Actualidad',
          title: 'Voluntaria en divulgación científica',
          organization: 'Programa comunitario',
          description:
            'Participo en actividades de comunicación científica y divulgación, haciendo accesibles los conceptos de física y datos a audiencias más amplias.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      subtitle: '¿Tienes una oportunidad o proyecto en mente? Escríbeme a través del formulario o de cualquiera de los enlaces.',
      labels: { email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub', name: 'Nombre', message: 'Mensaje' },
      linkedinValue: 'arelysa',
      githubValue: 'arelymaya',
      placeholders: { name: 'Tu nombre', email: 'tu@ejemplo.com', message: 'Cuéntame sobre la oportunidad o proyecto...' },
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      validation: {
        nameRequired: 'Por favor, introduce tu nombre.',
        emailRequired: 'Por favor, introduce tu correo electrónico.',
        emailInvalid: 'Por favor, introduce un correo electrónico válido.',
        messageRequired: 'Por favor, introduce un mensaje.',
        messageShort: 'El mensaje debe tener al menos 10 caracteres.',
      },
      noConfigTitle: '¡Gracias por escribir!',
      noConfigBody: 'Aún no hay un backend configurado, por lo que este mensaje no fue enviado. Por favor, escríbeme directamente a',
      noConfigEmailLink: 'este correo',
    },
    footer: {
      builtWith: 'Hecho con',
      links: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    },
    theme: { toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro' },
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      getInTouch: 'Get in touch',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      selectLanguage: 'Select language',
    },
    hero: {
      badge: 'Portfolio',
      titlePrefix: 'From Data to',
      titleAccent: 'Decisions.',
      subtitle: 'Physics | Data Analytics | Finance | Technology & Automation',
      intro:
        'I combine analytical thinking, data, and technology to understand complex problems and develop practical solutions.',
      exploreProjects: 'Explore My Projects',
      aboutMe: 'About Me',
      linkedinButton: 'Visit my LinkedIn profile',
      scroll: 'Scroll',
    },
    about: {
      eyebrow: 'About Me',
      title: 'A physicist who works where data meets business',
      para1:
        'I started with a degree in Physics, which taught me to break down complex systems into measurable parts and reason about them rigorously. That mindset carried naturally into data analysis and the financial sector, where I worked with business data, recurring reports, and operational processes.',
      para2:
        'Today I combine that analytical foundation with practical technology skills — writing Python and SQL to automate workflows, validate data, and build clear visualizations. I also contribute to optical engineering projects, keeping one foot in the scientific world that shaped how I think.',
      highlights: [
        {
          title: 'Physics Foundation',
          text: 'A degree in Physics built analytical thinking, quantitative rigor, and a methodical approach to problem-solving.',
        },
        {
          title: 'Financial Experience',
          text: 'Hands-on work in financial and business environments — reporting, data analysis, and business process support.',
        },
        {
          title: 'Automation & Code',
          text: 'Building SQL routines and Python scripts to validate data, automate workflows, and reduce manual effort.',
        },
        {
          title: 'Optical Engineering',
          text: 'Applying experimental and measurement skills to optical engineering and scientific data analysis projects.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Capabilities across four domains',
      subtitle: 'A blend of analytical, business, and technical skills — organized by where they apply.',
      categories: [
        { title: 'Data & Analytics' },
        { title: 'Finance & Business' },
        { title: 'Technology & Automation' },
        { title: 'Scientific & Technical' },
      ],
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'Proposed projects in progress',
      subtitle: 'These are proposed or in-progress projects. Click any card to see the full breakdown.',
      viewDetails: 'View details',
      statusProposed: 'Proposed',
      statusInProgress: 'In Progress',
      modal: {
        objective: 'Objective',
        problem: 'Problem',
        approach: 'Approach',
        tools: 'Tools',
        results: 'Results',
        lessons: 'Lessons Learned',
        close: 'Close',
        closeAria: 'Close project details',
        placeholder: 'Illustrative placeholder — visuals and metrics will be added as the project is completed.',
      },
      items: [
        {
          title: 'Business Data Insights',
          tagline: 'Analysis of business data with an interactive dashboard for decision-makers.',
          objective:
            'Transform raw business data into clear, actionable insights through an interactive dashboard that highlights key performance trends.',
          problem:
            'Decision-makers often rely on static spreadsheets that obscure trends, delay analysis, and make it difficult to compare metrics across periods.',
          approach:
            'Consolidate data from multiple sources, define the key metrics that matter to stakeholders, and build a visual dashboard with filters and drill-down views.',
          tools: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],
          results:
            'Expected outcome: a single dashboard surface where teams can monitor revenue, customer activity, and operational KPIs in real time. Results to be documented once the project is completed.',
          lessons:
            'To be added once the project is completed — intended focus: aligning visualizations with the questions stakeholders actually ask.',
        },
        {
          title: 'Smart Data Automation',
          tagline: 'A Python and SQL workflow for automated data validation and reporting.',
          objective:
            'Reduce manual effort and human error by automating repetitive data validation and reporting tasks end to end.',
          problem:
            'Routine data checks and report generation consume hours each week, are prone to copy-paste errors, and scale poorly as data volume grows.',
          approach:
            'Design a scheduled pipeline that extracts data via SQL, validates it with Python rules, and generates formatted reports — surfacing anomalies for review.',
          tools: ['Python', 'SQL', 'Pandas', 'Automation Scripts', 'Scheduling'],
          results:
            'Expected outcome: a repeatable, auditable workflow that runs without manual intervention. Results to be documented once the project is completed.',
          lessons:
            'To be added once the project is completed — intended focus: balancing strict validation with the flexibility to handle edge cases.',
        },
        {
          title: 'Optical Data Lab',
          tagline: 'Scientific data visualization and optical measurement analysis.',
          objective:
            'Apply data analysis techniques to optical measurement data, producing visualizations that make experimental results easy to interpret.',
          problem:
            'Optical experiments generate large volumes of measurement data that are difficult to interpret without dedicated visualization and analysis tooling.',
          approach:
            'Build reusable analysis routines that clean, transform, and plot optical measurement data, with attention to precision and error propagation.',
          tools: ['Python', 'NumPy', 'Matplotlib', 'Experimental Data', 'Statistics'],
          results:
            'Expected outcome: clear, reproducible visualizations that communicate measurement trends and uncertainties. Results to be documented once the project is completed.',
          lessons:
            'To be added once the project is completed — intended focus: preserving measurement integrity throughout the analysis pipeline.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience & Education',
      title: 'A path through science and business',
      entries: [
        {
          period: '2019 — 2023',
          title: 'B.Sc. in Physics',
          organization: 'University',
          description:
            'Studied core physics with emphasis on experimental methods, optics, and data analysis. Developed strong quantitative and problem-solving foundations.',
        },
        {
          period: '2021 — 2022',
          title: 'Financial Data Analyst (Intern)',
          organization: 'Financial Services Firm',
          description:
            'Supported reporting and analysis in a financial-sector environment. Worked with spreadsheets, financial datasets, and recurring business reports.',
        },
        {
          period: '2022 — 2023',
          title: 'Business Data Analyst',
          organization: 'Technology Company',
          description:
            'Analyzed business data to inform operational decisions. Built dashboards and reports, and identified process improvement opportunities.',
        },
        {
          period: '2023 — 2024',
          title: 'Data & Automation Specialist',
          organization: 'Consulting Engagement',
          description:
            'Developed SQL routines and Python scripts to automate data validation, processing, and reporting workflows for clients.',
        },
        {
          period: '2024 — Present',
          title: 'Optical Engineering Contributor',
          organization: 'Research Laboratory',
          description:
            'Contribute to optical measurement and experimental analysis projects, applying physics knowledge and data skills to instrumentation tasks.',
        },
        {
          period: '2022 — Present',
          title: 'Science Outreach Volunteer',
          organization: 'Community Program',
          description:
            'Participate in science communication and outreach activities, making physics and data concepts accessible to broader audiences.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      subtitle: 'Have a role or project in mind? Reach out through the form or any of the links below.',
      labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', name: 'Name', message: 'Message' },
      linkedinValue: 'arelysa',
      githubValue: 'arelymaya',
      placeholders: { name: 'Your name', email: 'you@example.com', message: 'Tell me about the opportunity or project...' },
      send: 'Send message',
      sending: 'Sending...',
      validation: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
        messageShort: 'Message should be at least 10 characters.',
      },
      noConfigTitle: 'Thanks for reaching out!',
      noConfigBody: "A backend isn't configured yet, so this message wasn't delivered. Please email me directly at",
      noConfigEmailLink: 'this address',
    },
    footer: {
      builtWith: 'Built with',
      links: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    },
    theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  },

  no: {
    nav: {
      about: 'Om meg',
      skills: 'Ferdigheter',
      projects: 'Prosjekter',
      experience: 'Erfaring',
      contact: 'Kontakt',
      getInTouch: 'Ta kontakt',
      openMenu: 'Åpne meny',
      closeMenu: 'Lukk meny',
      selectLanguage: 'Velg språk',
    },
    hero: {
      badge: 'Portefølje',
      titlePrefix: 'Fra data til',
      titleAccent: 'beslutninger.',
      subtitle: 'Fysikk | Dataanalyse | Finans | Teknologi og automatisering',
      intro:
        'Jeg kombinerer analytisk tenkning, data og teknologi for å forstå komplekse problemer og utvikle praktiske løsninger.',
      exploreProjects: 'Utforsk prosjektene mine',
      aboutMe: 'Om meg',
      linkedinButton: 'Besøk LinkedIn-profilen min',
      scroll: 'Bla ned',
    },
    about: {
      eyebrow: 'Om meg',
      title: 'En fysiker som jobber der data møter næringsliv',
      para1:
        'Jeg begynte med en grad i fysikk, som lærte meg å bryte ned komplekse systemer i målbare deler og resonnere om dem med grundighet. Den tankegangen overførte seg naturlig til dataanalyse og finanssektoren, hvor jeg jobbet med forretningsdata, gjentakende rapporter og operative prosesser.',
      para2:
        'I dag kombinerer jeg det analytiske fundamentet med praktiske teknologiske ferdigheter — jeg skriver Python og SQL for å automatisere arbeidsflyter, validere data og bygge tydelige visualiseringer. Jeg bidrar også til prosjekter innen optisk ingeniørarbeid og beholder én fot i den vitenskapelige verdenen som formet min tenkemåte.',
      highlights: [
        {
          title: 'Fysikkfundament',
          text: 'En grad i fysikk bygde analytisk tenkning, kvantitativ grundighet og en metodisk tilnærming til problemløsning.',
        },
        {
          title: 'Finansiell erfaring',
          text: 'Praktisk arbeid i finansielle og forretningsmessige miljøer — rapportering, dataanalyse og støtte til forretningsprosesser.',
        },
        {
          title: 'Automatisering og kode',
          text: 'Utvikling av SQL-rutiner og Python-skript for å validere data, automatisere arbeidsflyter og redusere manuelt arbeid.',
        },
        {
          title: 'Optisk ingeniørarbeid',
          text: 'Anvendelse av eksperimentelle og måletekniske ferdigheter på prosjekter innen optisk ingeniørarbeid og vitenskapelig dataanalyse.',
        },
      ],
    },
    skills: {
      eyebrow: 'Ferdigheter',
      title: 'Kapasiteter på fire områder',
      subtitle: 'En blanding av analytiske, forretningsmessige og tekniske ferdigheter — organisert etter anvendelsesområde.',
      categories: [
        { title: 'Data og analyse' },
        { title: 'Finans og næringsliv' },
        { title: 'Teknologi og automatisering' },
        { title: 'Vitenskapelig og teknisk' },
      ],
    },
    projects: {
      eyebrow: 'Utvalgte prosjekter',
      title: 'Foreslåtte prosjekter under arbeid',
      subtitle: 'Dette er foreslåtte eller pågående prosjekter. Klikk på et kort for å se full oversikt.',
      viewDetails: 'Se detaljer',
      statusProposed: 'Foreslått',
      statusInProgress: 'Pågår',
      modal: {
        objective: 'Mål',
        problem: 'Problem',
        approach: 'Tilnærming',
        tools: 'Verktøy',
        results: 'Resultater',
        lessons: 'Lærdom',
        close: 'Lukk',
        closeAria: 'Lukk prosjektdetaljer',
        placeholder: 'Illustrativ plassholder — visuelle elementer og beregninger legges til etter hvert som prosjektet fullføres.',
      },
      items: [
        {
          title: 'Business Data Insights',
          tagline: 'Analyse av forretningsdata med et interaktivt dashbord for beslutningstakere.',
          objective:
            'Omgjøre rå forretningsdata til tydelig, handlingsrettet innsikt gjennom et interaktivt dashbord som fremhever viktige prestasjonstrender.',
          problem:
            'Beslutningstakere er ofte avhengige av statiske regneark som skjuler trender, forsinker analyse og gjør det vanskelig å sammenligne beregninger på tvers av perioder.',
          approach:
            'Konsolidere data fra flere kilder, definere de nøkkeltallene som betyr noe for interessenter, og bygge et visuelt dashbord med filtre og detaljerte visninger.',
          tools: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],
          results:
            'Forventet resultat: én dashbordflate der team kan overvåke omsetning, kundeaktivitet og operative KPI-er i sanntid. Resultater dokumenteres når prosjektet er fullført.',
          lessons:
            'Tilføyes når prosjektet er fullført — planlagt fokus: å samsvare visualiseringer med spørsmålene interessenter faktisk stiller.',
        },
        {
          title: 'Smart Data Automation',
          tagline: 'En Python- og SQL-arbeidsflyt for automatisert datavalidering og rapportering.',
          objective:
            'Redusere manuelt arbeid og menneskelige feil ved å automatisere gjentakende oppgaver for datavalidering og rapportgenerering fra ende til ende.',
          problem:
            'Rutinemessige datakontroller og rapportgenerering timer hver uke, er utsatt for feil ved kopiering og liming, og skalerer dårlig etter hvert som datavolumet vokser.',
          approach:
            'Utforme en planlagt pipeline som trekker ut data via SQL, validerer dem med Python-regler og genererer formaterte rapporter — og fremhever avvik for gjennomgang.',
          tools: ['Python', 'SQL', 'Pandas', 'Automatiseringsskript', 'Tidsplanlegging'],
          results:
            'Forventet resultat: en gjentagende, revisjonerbar arbeidsflyt som kjører uten manuell inngripen. Resultater dokumenteres når prosjektet er fullført.',
          lessons:
            'Tilføyes når prosjektet er fullført — planlagt fokus: å balansere streng validering med fleksibilitet til å håndtere spesialtilfeller.',
        },
        {
          title: 'Optical Data Lab',
          tagline: 'Vitenskapelig datavisualisering og analyse av optiske målinger.',
          objective:
            'Anvende dataanalyseteknikker på optiske måledata og produsere visualiseringer som gjør eksperimentelle resultater lette å tolke.',
          problem:
            'Optiske eksperimenter genererer store mengder måledata som er vanskelige å tolke uten dedikerte verktøy for visualisering og analyse.',
          approach:
            'Bygge gjenbrukbare analyserutiner som renser, transformerer og plotter optiske måledata, med vekt på presisjon og feilforplantning.',
          tools: ['Python', 'NumPy', 'Matplotlib', 'Eksperimentelle data', 'Statistikk'],
          results:
            'Forventet resultat: tydelige, reproduserbare visualiseringer som formidler måletrender og usikkerheter. Resultater dokumenteres når prosjektet er fullført.',
          lessons:
            'Tilføyes når prosjektet er fullført — planlagt fokus: å bevare måleintegritet gjennom hele analysepipelinen.',
        },
      ],
    },
    experience: {
      eyebrow: 'Erfaring og utdanning',
      title: 'En vei gjennom vitenskap og næringsliv',
      entries: [
        {
          period: '2019 — 2023',
          title: 'Bachelor i fysikk',
          organization: 'Universitet',
          description:
            'Studerte kjernefysikk med vekt på eksperimentelle metoder, optikk og dataanalyse. Utviklet et sterkt kvantitativt og problemløsende fundament.',
        },
        {
          period: '2021 — 2022',
          title: 'Finansiell dataanalytiker (praksisplass)',
          organization: 'Finansieringsselskap',
          description:
            'Støttet rapportering og analyse i et finanssektormiljø. Arbeidet med regneark, finansielle datasett og gjentakende forretningsrapporter.',
        },
        {
          period: '2022 — 2023',
          title: 'Forretningsdataanalytiker',
          organization: 'Teknologiselskap',
          description:
            'Analyserte forretningsdata for å understøtte operative beslutninger. Bygde dashbord og rapporter, og identifiserte muligheter for prosessforbedring.',
        },
        {
          period: '2023 — 2024',
          title: 'Spesialist i data og automatisering',
          organization: 'Konsulentoppdrag',
          description:
            'Utviklet SQL-rutiner og Python-skript for å automatisere datavalidering, -behandling og -rapportering for kunder.',
        },
        {
          period: '2024 — Nå',
          title: 'Bidragsyter innen optisk ingeniørarbeid',
          organization: 'Forskningslaboratorium',
          description:
            'Bidrar til prosjekter for optisk måling og eksperimentell analyse, og anvender fysikkunnskap og dataferdigheter på instrumenteringsoppgaver.',
        },
        {
          period: '2022 — Nå',
          title: 'Frivillig i vitenskapsformidling',
          organization: 'Samfunnsprogram',
          description:
            'Deltar i vitenskapskommunikasjon og formidlingsaktiviteter, og gjør fysikk- og databegreper tilgjengelige for et bredere publikum.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'La oss snakkes',
      subtitle: 'Har du en stilling eller et prosjekt i tankene? Ta kontakt via skjemaet eller en av lenkene nedenfor.',
      labels: { email: 'E-post', linkedin: 'LinkedIn', github: 'GitHub', name: 'Navn', message: 'Melding' },
      linkedinValue: 'arelysa',
      githubValue: 'arelymaya',
      placeholders: { name: 'Ditt navn', email: 'du@eksempel.no', message: 'Fortell meg om muligheten eller prosjektet...' },
      send: 'Send melding',
      sending: 'Sender...',
      validation: {
        nameRequired: 'Vennligst oppgi navnet ditt.',
        emailRequired: 'Vennligst oppgi e-postadressen din.',
        emailInvalid: 'Vennligst oppgi en gyldig e-postadresse.',
        messageRequired: 'Vennligst skriv en melding.',
        messageShort: 'Meldingen bør være på minst 10 tegn.',
      },
      noConfigTitle: 'Takk for at du tar kontakt!',
      noConfigBody: 'Det er ikke konfigurert noen backend ennå, så denne meldingen ble ikke levert. Vennligst send meg e-post direkte til',
      noConfigEmailLink: 'denne adressen',
    },
    footer: {
      builtWith: 'Bygget med',
      links: { about: 'Om meg', skills: 'Ferdigheter', projects: 'Prosjekter', experience: 'Erfaring', contact: 'Kontakt' },
    },
    theme: { toLight: 'Bytt til lyst modus', toDark: 'Bytt til mørkt modus' },
  },
};

export function getTranslation(lang: Language): Translation {
  return translations[lang];
}

export const languageOptions: { code: Language; shortLabel: string; fullLabel: string }[] = [
  { code: 'es', shortLabel: 'ES', fullLabel: 'Español' },
  { code: 'en', shortLabel: 'EN', fullLabel: 'English' },
  { code: 'no', shortLabel: 'NO', fullLabel: 'Norsk Bokmål' },
];
