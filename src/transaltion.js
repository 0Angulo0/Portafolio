//* translation of all the text es/en

//? Diccionario con TODO el texto del sitio, separado por idioma (es/en).
//? Cada key (ej. "home_titulo_1") corresponde a un atributo data-i18n="key" en el HTML;
//? así el HTML no tiene texto escrito, solo "ganchos" que este archivo llena.
const translations = {
    es: {
        //& --- textos del menú/header, se usan en index.html y about.html ---
        nav_home: "Inicio",
        nav_about: "Sobre mi",
        nav_lider: "Liderazgo",
        nav_career: "Profesional",
        nav_contact: "Contacto",

        //& --- textos de la página de inicio (index.html) ---
        //& el nombre va en dos keys separadas (no un solo string con \n) para poder
        //& estilar "Angulo" distinto (cursiva y resaltado) sin tocar "Daniela"
        home_titulo_1: "Daniela",
        home_titulo_2: "Angulo",
        home_texto: "Liderar tecnologías que cierren brechas sociales, integrando ética y accesibilidad " +
                    "en cada solución.",
        home_redes_subtitulo: "Conoce más detalles ↓",

        //& --- sección "Sobre mi" (src/cv/aboutme.js) ---
        //& título partido en 3 keys para poder resaltar solo "soy" (mismo truco que home_titulo_1/2 del hero)
        about_titulo_pre: "¿Quién",
        about_titulo_destacado: "soy",
        about_titulo_post: "?",
        about_texto_1: "Soy estudiante de Ingeniería en Tecnologías Computacionales en el " +
            "ITESM Campus Santa Fe. Me especializo en el ciclo de vida de la Inteligencia Artificial: " +
            "desde la ideación y el desarrollo de modelos hasta su implementación estratégica.",
        about_titulo_nota: "¿Y como líder?",
        //& ojo: cada string de arriba necesita su propio espacio al final si el siguiente
        //& empieza con palabra (si no, quedan pegadas: "comunidades.Fui" en vez de "comunidades. Fui")
        about_texto_2: "Pero no solo escribo código: construyo equipos y muevo comunidades. " +
            "Fui reconocida con la Medalla al Liderazgo Gen 2024 por mi trayectoria de impacto en " +
            "PrepaTec.",
        //& el <strong> de aboutme.js le da el efecto de "negritas" a este segundo párrafo
        about_texto_negritas: "He estado en más de 10 posiciones de liderazgo en 7 equipos " +
            "diferentes, logrando un impacto en más de 400 personas.",

        //& --- tabla de skills de "Sobre mi" (src/cv/aboutme.js); los nombres de las skills duras
        //& (Python, SQL, etc.) están directo en el JS porque no se traducen entre es/en ---
        aboutme_tabla_titulo: "Capability Matrix",
        aboutme_tabla_hover: "Hover para detalles",
        aboutme_tabla_dominio: "Dominio",

        //& --- skills blandas de "Sobre mi" (src/cv/aboutme.js); estas sí se traducen ---
        aboutme_softskills_titulo: "Habilidades Blandas",
        skill_soft_1: "Comunicación empática",
        skill_soft_2: "Resolución de conflictos",
        skill_soft_3: "Coordinación de equipos multidisciplinarios",
        skill_soft_4: "Planeación de eventos",
        skill_soft_5: "Adaptabilidad",
        skill_soft_6: "Inteligencia emocional",
        skill_soft_7: "Perspectiva de género",
        skill_soft_8: "Liderazgo estratégico",
        skill_soft_9: "Gestión de stakeholders",
        skill_soft_10: "Aprendizaje rápido",
        skill_soft_11: "Resolución de problemas bajo presión",
        skill_soft_12: "Comunicación analítica",

        //& --- sección "Profesional" (src/cv/career.js), basada en tu CV ---
        career_titulo: "Experiencia Profesional",

        career_outlier_rol: "QA Coder",
        career_outlier_org: "Outlier LATAM",
        career_outlier_fecha: "Abr 2026 – Presente",
        career_outlier_lugar: "Remoto",
        career_outlier_bullet_1: "Reviso respuestas de código generadas por IA en cinco dimensiones de evaluación (seguimiento de instrucciones, precisión/validación de datos, optimalidad, vigencia y presentación)",
        career_outlier_bullet_2: "Identifico errores de lógica, fórmulas incorrectas y problemas de presentación en entregas de C++; reescribo las respuestas preferidas con documentación en línea y justificaciones específicas por dimensión",
        career_outlier_bullet_3: "Detecté un error crítico en una fórmula de calificación ponderada durante una evaluación técnica (pesos invertidos) que el autor original había pasado por alto",

        career_bonoeco_rol: "Practicante de Producto y GEO",
        career_bonoeco_org: "Bono Eco",
        career_bonoeco_fecha: "Mayo – Ago 2026",
        career_bonoeco_lugar: "Remoto",
        career_bonoeco_bullet_1: "Construí y desplegué 8 mini-apps de producción de principio a fin (frontend, backend, manejo de datos) para una plataforma de huella de carbono y sostenibilidad que atiende a clientes corporativos en LatAm; colaboré en el desarrollo de una novena",
        career_bonoeco_bullet_2: "Diseñé e implementé pipelines de automatización que conectan las mini-apps con Monday.com y agentes de IA de Claude para generación de reportes y comunicación con clientes",
        career_bonoeco_bullet_3: "Redacté manuales de mantenimiento para apoyar la entrega y el mantenimiento a largo plazo de la suite de mini-apps",

        career_angulo_rol: "Asistente Administrativa",
        career_angulo_org: "Instalaciones y Acabados en General \"Angulo\"",
        career_angulo_fecha: "Ene 2022 – Jul 2025",
        career_angulo_lugar: "Presencial",
        career_angulo_bullet_1: "Optimicé el manejo de inventario de oficina y la búsqueda de proveedores, logrando una reducción de costos del 15%",
        career_angulo_bullet_2: "Brindé apoyo administrativo y de programación a un equipo operativo de más de 20 empleados",

        career_kidzania_rol: "Facilitadora de Actividades",
        career_kidzania_org: "Kidzania Santa Fe",
        career_kidzania_fecha: "Jul – Sep 2024",
        career_kidzania_lugar: "Presencial",
        career_kidzania_bullet_1: "Facilité actividades diarias para más de 115 clientes, mejorando mis habilidades de comunicación y resolución de conflictos",
        career_kidzania_bullet_2: "Gestioné y ejecuté más de 20 actividades diarias, fortaleciendo mi capacidad para trabajar bajo presión",

        //& --- sección "Liderazgo" (src/cv/leadership.js), basada en tu CV ---
        leadership_titulo: "Experiencia en Liderazgo",

        leadership_sati_rol: "Presidenta",
        leadership_sati_org: "ITC/ITD Student Society (SATI)",
        leadership_sati_fecha: "Jun 2026 – Presente",
        leadership_sati_lugar: "Tec de Monterrey",
        leadership_sati_bullet_1: "Lidero una sociedad estudiantil que conecta a los alumnos con la comunidad profesional de tecnología, estructurada en torno a talleres técnicos, una visita empresarial y un hackathon",
        leadership_sati_bullet_2: "Organizo eventos de integración y espacios de networking intergeneracional para conectar a estudiantes de distintas especialidades dentro del programa",

        leadership_glp_rol: "Participante del Programa de Liderazgo Global",
        leadership_glp_org: "Eugenio Garza Sada Global Leadership Program (6ta Generación)",
        leadership_glp_fecha: "Ago 2026 – Presente",
        leadership_glp_lugar: "Tec de Monterrey",
        leadership_glp_bullet_1: "Seleccionada para un programa global de desarrollo de liderazgo con una cohorte internacional",
        leadership_glp_bullet_2: "Actualmente fundo desde cero una asociación civil enfocada en mejorar la calidad educativa de niños y adolescentes de 10 a 15 años",

        leadership_u21_rol: "Delegada",
        leadership_u21_org: "U21 Global Citizen Program (Universitas 21)",
        leadership_u21_fecha: "Mar – Abr 2026",
        leadership_u21_lugar: "Internacional",
        leadership_u21_bullet_1: "Seleccionada para un programa de liderazgo internacional que conecta a estudiantes de universidades de la red U21 alrededor del mundo, diseñado para desarrollar habilidades de liderazgo mientras se profundiza en los retos globales más urgentes de la actualidad",
        leadership_u21_bullet_2: "El programa consiste en tres semanas de capacitación experiencial en línea, donde colaboraré con estudiantes de otros países en proyectos relacionados con los Objetivos de Desarrollo Sostenible (ODS) de la ONU",

        leadership_escuderia_rol: "Líder de Eventos",
        leadership_escuderia_org: "Escudería de Ciberseguridad SF",
        leadership_escuderia_fecha: "Ago 2026 – Presente",
        leadership_escuderia_lugar: "Remoto",
        leadership_escuderia_bullet_1: "Organizo sesiones de práctica para el equipo y lidero eventos que incluyen patrocinios, activaciones y competencias",

        leadership_sati_board_rol: "Miembro de la Mesa Directiva",
        leadership_sati_board_org: "SATI (Student Society of Computer Technologies Engineering)",
        leadership_sati_board_fecha: "Ago – Dic 2025",
        leadership_sati_board_lugar: "Tec de Monterrey",
        leadership_sati_board_bullet_1: "Apoyé en la promoción de eventos, ferias estudiantiles y actividades de integración, motivando a más compañeros a participar",
        leadership_sati_board_bullet_2: "Colaboré en la organización de un evento de mujeres profesionales (formato coffee talk con ponentes), en conjunto con otras sociedades estudiantiles, escuelas del Tec y CRDH",

        leadership_panel_rol: "Panelista",
        leadership_panel_org: "Panel \"Desinformación de Género y Participación Digital de Mujeres Jóvenes\"",
        leadership_panel_fecha: "Nov 2025",
        leadership_panel_lugar: "Eon Institute & Friedrich Naumann Foundation",
        leadership_panel_bullet_1: "Evento organizado por Eon Institute y la Fundación Friedrich Naumann, en colaboración con Girl Up México y ONU Mujeres, donde fui invitada a compartir mi perspectiva junto a otras líderes estudiantiles como parte de una investigación sobre violencia de género digital",
        leadership_panel_bullet_2: "Discutimos cómo la tecnología carece de perspectiva de género, el impacto de los deepfakes y deepnudes en la vida de las mujeres, y cómo muchas mujeres jóvenes se alejan de los espacios digitales por miedo a represalias",

        leadership_logistica_rol: "Mentora de Logística",
        leadership_logistica_org: "Robotics Team \"Tamán Keet 3933\"",
        leadership_logistica_fecha: "Ago 2025 – Presente",
        leadership_logistica_lugar: "PrepaTec CSF",
        leadership_logistica_bullet_1: "Organizo reuniones y sesiones de capacitación para apoyar a la nueva generación de líderes del equipo, transformando una experiencia personal desafiante en una oportunidad de crecimiento colectivo",
        leadership_logistica_bullet_2: "Guío a la mesa directiva actual en la planeación de eventos, el manejo de inventario y la coordinación del equipo, compartiendo abiertamente errores pasados para ayudarles a obtener mejores resultados y fomentar su desarrollo",

        leadership_aero_rol: "Líder Fundadora de Comunicación",
        leadership_aero_org: "Aerodynamics Team \"Silver Wings SF\"",
        leadership_aero_fecha: "Ene – Dic 2024",
        leadership_aero_lugar: "Tec de Monterrey",
        leadership_aero_bullet_1: "Ayudé a construir el equipo desde cero, dando forma a su imagen institucional y organizando eventos de difusión",
        leadership_aero_bullet_2: "Traduje temas complejos de aerodinámica en contenido accesible para niños de 6 a 12 años sin conocimientos técnicos",

        leadership_robotics_rol: "Vicepresidenta y Presidenta",
        leadership_robotics_org: "Robotics Team \"Tamán Keet 3933\"",
        leadership_robotics_fecha: "Ago 2022 – May 2024",
        leadership_robotics_lugar: "PrepaTec CSF",
        leadership_robotics_bullet_1: "Dirigí un equipo multidisciplinario de más de 20 integrantes a lo largo de varias temporadas de competencia, desde el diseño conceptual hasta competencias nacionales",
        leadership_robotics_bullet_2: "Organicé y ejecuté más de 10 eventos por semestre (competencias, recaudaciones de fondos, sesiones técnicas), gestionando toda la logística: transporte, alimentación, inventario y presupuesto",
        leadership_robotics_bullet_3: "Promoví la participación de mujeres en roles de liderazgo STEAM dentro del equipo, apoyando la creación de un subequipo exclusivamente femenino para la competencia VEX Robotics",

        leadership_consejo_rol: "Miembro Activa",
        leadership_consejo_org: "Consejo Estudiantil CSF",
        leadership_consejo_fecha: "Ago 2023 – Jun 2024",
        leadership_consejo_lugar: "Tec de Monterrey",
        leadership_consejo_bullet_1: "Participé en la creación de la primera edición de la rúbrica de evaluación de grupos estudiantiles en colaboración con LiFE, asegurando una evaluación justa y equitativa para todos los grupos",
        leadership_consejo_bullet_2: "Trabajé de cerca con LiFE para mejorar la experiencia general de los grupos estudiantiles en el campus, representando las necesidades de mis compañeros ante la dirección",

        leadership_fetec_rol: "Voluntaria y Ex-Presidenta",
        leadership_fetec_org: "Red FETEC",
        leadership_fetec_fecha: "2022 – 2024",
        leadership_fetec_lugar: "Tec de Monterrey",
        leadership_fetec_bullet_1: "Sostuve reuniones estratégicas con directores de campus para presentar inquietudes estudiantiles, proponer mejoras y compartir el plan de trabajo de la red",
        leadership_fetec_bullet_2: "Organicé sesiones de capacitación para voluntarios y campañas de concientización para desnormalizar la violencia en todas sus formas y difundir el conocimiento del protocolo de género entre la comunidad estudiantil",
        leadership_fetec_bullet_3: "Colaboré en una sesión de capacitación a profesores sobre perspectiva de género en el aula, una experiencia que llevó a cambios concretos en el comportamiento de algunos docentes",

        //& --- sección "Proyectos" (src/cv/projects.js), basada en tu CV ---
        projects_titulo: "Proyectos Destacados",

        project_roguelite_rol: "Roguelite Card Game",
        project_roguelite_org: "JavaScript, Node.js, SQL",
        project_roguelite_fecha: "",
        project_roguelite_lugar: "",
        project_roguelite_bullet_1: "Desarrollé un juego roguelite de cartas full-stack, implementando la lógica principal en JavaScript y diseñando la interfaz web con HTML, CSS y Bootstrap",
        project_roguelite_bullet_2: "Construí un backend en Node.js para gestionar consultas a la base de datos y solicitudes a la API, integrando una base de datos SQL para el almacenamiento persistente de datos y el progreso del usuario",
        project_roguelite_bullet_3: "Integré Chart.js para visualizar métricas clave de desempeño e implementé características de accesibilidad para asegurar una experiencia inclusiva",
        project_roguelite_bullet_4: "Utilicé Git y GitHub para control de versiones, asegurando un flujo de trabajo eficiente y la integridad del código",

        project_kansai_rol: "Configuración de Agente de IA \"Kansai Toyota\"",
        project_kansai_org: "Darwin AI Platform",
        project_kansai_fecha: "",
        project_kansai_lugar: "",
        project_kansai_bullet_1: "Diseñé y desplegué un asistente de IA completo para una agencia Toyota, incluyendo pipelines de conversación de múltiples etapas, lógica de venta cruzada, y un catálogo de productos conectado a Google Sheets",
        project_kansai_bullet_2: "Demostré la aplicación práctica de herramientas de IA generativa para resolver retos reales de negocio",

        //& --- tarjeta de "logro" dentro de Proyectos (src/cv/projects.js) ---
        projects_logro_badge: "Logro",
        projects_logro_rol: "Medalla al Liderazgo",
        projects_logro_org: "PrepaTec",
        projects_logro_fecha: "Generación 2024",
        projects_logro_texto: "Otorgada a un estudiante por generación en PrepaTec, en reconocimiento a una trayectoria de impacto a lo largo de sus tres años de preparatoria",

        //& --- footer (src/components/footer.js) ---
        footer_texto: "Desarrollado por Daniela Angulo",

        //& --- textos alternativos (atributo alt de imágenes) ---
        imagen_alt: "Imagen de Ana García trabajando",
    },
    en: {
        nav_home: "Home",
        nav_about: "About me",
        nav_lider: "Leadership",
        nav_career: "Career",
        nav_contact: "Contact",

        home_titulo_1: "Daniela",
        home_titulo_2: "Angulo",
        home_texto: "Leading technologies that close social gaps, integrating ethics and accessibility " +
                    "into every solution.",
        home_redes_subtitulo: "Follow me:",
        home_redes_instagram: "Instagram",
        home_redes_github: "Github",

        about_titulo_pre: "Who",
        about_titulo_destacado: "am",
        about_titulo_post: "I?",
        about_texto_1: "I'm a Computer Technology Engineering student at ITESM Campus Santa Fe. " +
            "I specialize in the full lifecycle of Artificial Intelligence: from ideation and " +
            "model development to its strategic implementation.",
        about_titulo_nota: "And as a leader?",
        about_texto_2: "But I don't just write code: I build teams and move communities. " +
            "I was recognized with the 2024 Leadership Medal for my track record of impact at " +
            "PrepaTec.",
        about_texto_negritas: "I've held more than 10 leadership positions across 7 different teams, " +
            "reaching an impact of over 400 people.",

        aboutme_tabla_titulo: "Capability Matrix",
        aboutme_tabla_hover: "Hover for details",
        aboutme_tabla_dominio: "Proficiency",

        aboutme_softskills_titulo: "Soft Skills",
        skill_soft_1: "Empathetic communication",
        skill_soft_2: "Conflict resolution",
        skill_soft_3: "Multidisciplinary team coordination",
        skill_soft_4: "Event planning",
        skill_soft_5: "Adaptability",
        skill_soft_6: "Emotional intelligence",
        skill_soft_7: "Gender perspective",
        skill_soft_8: "Strategic leadership",
        skill_soft_9: "Stakeholder management",
        skill_soft_10: "Fast learner",
        skill_soft_11: "High-pressure problem solving",
        skill_soft_12: "Analytical communication",

        career_titulo: "Professional Experience",

        career_outlier_rol: "QA Coder",
        career_outlier_org: "Outlier LATAM",
        career_outlier_fecha: "Apr 2026 – Present",
        career_outlier_lugar: "Remote",
        career_outlier_bullet_1: "Review AI-generated coding responses across five evaluation dimensions (instruction following, accuracy/input validation, optimality, currency, presentation)",
        career_outlier_bullet_2: "Identify logic errors, incorrect formulas, and presentation issues in C++ submissions; rewrite preferred responses with inline documentation and dimension-specific justifications",
        career_outlier_bullet_3: "Caught a critical weighted-grade formula error during technical assessment (inverted weights) that the original submitter missed",

        career_bonoeco_rol: "Product & GEO Intern",
        career_bonoeco_org: "Bono Eco",
        career_bonoeco_fecha: "May – Aug 2026",
        career_bonoeco_lugar: "Remote",
        career_bonoeco_bullet_1: "Built and deployed 8 production mini-apps end-to-end (frontend, backend, data handling) for a carbon footprint and sustainability platform serving corporate clients across LatAm; collaborated on the development of a 9th",
        career_bonoeco_bullet_2: "Designed and implemented automation pipelines connecting mini-apps to Monday.com and AI Claude agents for report generation and client communication",
        career_bonoeco_bullet_3: "Authored maintenance manuals to support handoff and long-term upkeep of the mini-app suite",

        career_angulo_rol: "Administrative Assistant",
        career_angulo_org: "Instalaciones y Acabados en General \"Angulo\"",
        career_angulo_fecha: "Jan 2022 – Jul 2025",
        career_angulo_lugar: "On-site",
        career_angulo_bullet_1: "Optimized office inventory management and supplier sourcing, achieving 15% of cost reduction",
        career_angulo_bullet_2: "Provided administrative and scheduling support to an operational team of 20+ employees",

        career_kidzania_rol: "Activity Facilitator",
        career_kidzania_org: "Kidzania Santa Fe",
        career_kidzania_fecha: "Jul – Sep 2024",
        career_kidzania_lugar: "On-site",
        career_kidzania_bullet_1: "Facilitated daily activities for 115+ clients, improving my communication and conflict resolution skills",
        career_kidzania_bullet_2: "Managed and executed 20+ daily activities, strengthening my ability to work under pressure",

        leadership_titulo: "Leadership Experience",

        leadership_sati_rol: "President",
        leadership_sati_org: "ITC/ITD Student Society (SATI)",
        leadership_sati_fecha: "Jun 2026 – Present",
        leadership_sati_lugar: "Tec de Monterrey",
        leadership_sati_bullet_1: "Leading a society to bridge students with the professional tech community, structured around technical workshops, a company visit, and a hackathon",
        leadership_sati_bullet_2: "Organizing integration events and cross-generational networking spaces to connect students across different specializations within the program",

        leadership_glp_rol: "Global Leadership Program Participant",
        leadership_glp_org: "Eugenio Garza Sada Global Leadership Program (6th Generation)",
        leadership_glp_fecha: "Aug 2026 – Present",
        leadership_glp_lugar: "Tec de Monterrey",
        leadership_glp_bullet_1: "Selected for a global leadership development program with an international cohort",
        leadership_glp_bullet_2: "Currently founding a civil association from the ground up focused on improving education quality for children and adolescents ages 10–15",

        leadership_u21_rol: "Delegate",
        leadership_u21_org: "U21 Global Citizen Program (Universitas 21)",
        leadership_u21_fecha: "Mar – Apr 2026",
        leadership_u21_lugar: "International",
        leadership_u21_bullet_1: "Selected for an international leadership program connecting students from U21 network universities worldwide, designed to develop leadership skills while deepening understanding of today's most urgent global challenges",
        leadership_u21_bullet_2: "The program consists of three weeks of experiential online training, where I will collaborate with students from other countries on projects addressing the UN Sustainable Development Goals (SDGs)",

        leadership_escuderia_rol: "Events Lead",
        leadership_escuderia_org: "Escudería de Ciberseguridad SF",
        leadership_escuderia_fecha: "Aug 2026 – Present",
        leadership_escuderia_lugar: "Remote",
        leadership_escuderia_bullet_1: "Organize practice sessions for the team and lead events including sponsorships, activations, and competitions",

        leadership_sati_board_rol: "Board Member",
        leadership_sati_board_org: "SATI (Student Society of Computer Technologies Engineering)",
        leadership_sati_board_fecha: "Aug – Dec 2025",
        leadership_sati_board_lugar: "Tec de Monterrey",
        leadership_sati_board_bullet_1: "Supported event promotion, student fairs, and integration activities, encouraging more peers to participate",
        leadership_sati_board_bullet_2: "Currently collaborating on organizing a women professionals event (coffee talk format with speakers), in partnership with other student groups, Tec schools and CRDH",

        leadership_panel_rol: "Participant",
        leadership_panel_org: "Panel Discussion \"Gender Disinformation and Digital Participation of Young Women\"",
        leadership_panel_fecha: "Nov 2025",
        leadership_panel_lugar: "Eon Institute & Friedrich Naumann Foundation",
        leadership_panel_bullet_1: "Event organized by Eon Institute and Friedrich Naumann Foundation, in collaboration with Girl Up México and UN Women, where I was invited to share my perspective alongside student leaders from other universities as part of research on digital gender-based violence",
        leadership_panel_bullet_2: "We discussed how technology lacks a gender perspective, the impact of deepfakes and deepnudes on women's lives, and how many young women withdraw from digital spaces for fear of retaliation",

        leadership_logistica_rol: "Logistics Mentor",
        leadership_logistica_org: "Robotics Team \"Tamán Keet 3933\"",
        leadership_logistica_fecha: "Aug 2025 – Present",
        leadership_logistica_lugar: "PrepaTec CSF",
        leadership_logistica_bullet_1: "Organize meetings and training sessions to support the team's new generation of leaders, transforming a challenging personal experience into an opportunity for collective growth",
        leadership_logistica_bullet_2: "Guide the current board in event planning, inventory management, and team coordination, openly sharing past mistakes to help them achieve better results and foster team development",

        leadership_aero_rol: "Founding Communications Lead",
        leadership_aero_org: "Aerodynamics Team \"Silver Wings SF\"",
        leadership_aero_fecha: "Jan – Dec 2024",
        leadership_aero_lugar: "Tec de Monterrey",
        leadership_aero_bullet_1: "Helped build the team from scratch, shaping its institutional image and organizing outreach events",
        leadership_aero_bullet_2: "Translated complex aerodynamics topics into accessible content for children ages 6–12 with no technical background",

        leadership_robotics_rol: "Vice President and President",
        leadership_robotics_org: "Robotics Team \"Tamán Keet 3933\"",
        leadership_robotics_fecha: "Aug 2022 – May 2024",
        leadership_robotics_lugar: "PrepaTec CSF",
        leadership_robotics_bullet_1: "Led a multidisciplinary team of 20+ members throughout competition seasons, from conceptual design to national competitions",
        leadership_robotics_bullet_2: "Organized and executed 10+ events per semester (competitions, fundraisers, technical sessions), managing full logistics: transportation, catering, inventory, and budgeting",
        leadership_robotics_bullet_3: "Promoted women's participation in STEAM leadership roles within the team, supporting the creation of an all-women subteam for the VEX Robotics Competition",

        leadership_consejo_rol: "Active Member",
        leadership_consejo_org: "Student Council CSF",
        leadership_consejo_fecha: "Aug 2023 – Jun 2024",
        leadership_consejo_lugar: "Tec de Monterrey",
        leadership_consejo_bullet_1: "Participated in creating the first edition of the student group evaluation rubric in collaboration with LiFE, ensuring fair and equitable assessment for all groups",
        leadership_consejo_bullet_2: "Worked closely with LiFE to improve the overall student group experience on campus, representing my peers' needs before directors",

        leadership_fetec_rol: "Volunteer and Former President",
        leadership_fetec_org: "Red FETEC",
        leadership_fetec_fecha: "2022 – 2024",
        leadership_fetec_lugar: "Tec de Monterrey",
        leadership_fetec_bullet_1: "Held strategic meetings with campus directors to present student concerns, propose improvements, and share the Network's work plan",
        leadership_fetec_bullet_2: "Organized training sessions for volunteers and awareness campaigns to denormalize violence in all its forms and spread knowledge of the gender protocol among the student community",
        leadership_fetec_bullet_3: "Collaborated on training session to professors on gender perspective in the classroom, an experience that led to concrete changes in some teachers' behavior",

        projects_titulo: "Featured Projects",

        project_roguelite_rol: "Roguelite Card Game",
        project_roguelite_org: "JavaScript, Node.js, SQL",
        project_roguelite_fecha: "",
        project_roguelite_lugar: "",
        project_roguelite_bullet_1: "Developed a full-stack roguelite card game, implementing core game logic in JavaScript and designing a web interface using HTML, CSS, and Bootstrap",
        project_roguelite_bullet_2: "Built a Node.js backend to manage database queries and API requests, integrating a SQL database for persistent data storage and user progress",
        project_roguelite_bullet_3: "Integrated Chart.js to visualize key performance metrics and implemented accessibility features to ensure an inclusive user experience",
        project_roguelite_bullet_4: "Leveraged Git and GitHub for version control, ensuring efficient workflow management and code integrity",

        project_kansai_rol: "AI Worker Configuration \"Kansai Toyota\"",
        project_kansai_org: "Darwin AI Platform",
        project_kansai_fecha: "",
        project_kansai_lugar: "",
        project_kansai_bullet_1: "Designed and deployed a complete AI assistant for a Toyota dealership, including multi-stage conversation pipelines, cross-selling logic, and a connected Google Sheets product catalog",
        project_kansai_bullet_2: "Demonstrated practical application of Generative AI tools to solve real business challenges",

        projects_logro_badge: "Achievement",
        projects_logro_rol: "Leadership Medal",
        projects_logro_org: "PrepaTec",
        projects_logro_fecha: "Class of 2024",
        projects_logro_texto: "Awarded to one student per graduating class at PrepaTec in recognition of an impactful trajectory throughout three years of high school",

        footer_texto: "Developed by Daniela Angulo",

        imagen_alt: "Picture of Ana García working",
    },
};

const DEFAULT_LANG = "es"; // idioma que se usa si no hay nada guardado en localStorage o la key no existe
const STORAGE_KEY = "lang"; // nombre bajo el cual se guarda el idioma elegido en localStorage

//? Aplica el idioma "lang" a toda la página: recorre el DOM y reemplaza
//? el texto/atributos de cada elemento marcado con data-i18n / data-i18n-alt.
//? Se llama una vez al cargar la página y cada vez que se hace click en ES/EN.
function applyTranslations(lang) {
    //& si "lang" no existe en el diccionario (valor raro), cae de vuelta al idioma por defecto
    const dict = translations[lang] || translations[DEFAULT_LANG];

    //& busca todo elemento con data-i18n="key" y le pone el texto (textContent) de esa key
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    //& igual que arriba pero para el atributo "alt" de imágenes (data-i18n-alt="key")
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const key = el.getAttribute("data-i18n-alt");
        if (dict[key] !== undefined) {
            el.setAttribute("alt", dict[key]);
        }
    });

    document.documentElement.lang = lang === "en" ? "en" : "es-mx"; // // actualiza el atributo lang del <html> para accesibilidad/SEO

    //& marca visualmente (clase "is-active") cuál botón de idioma corresponde al idioma actual
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.langSwitch === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang); // // guarda la elección para que persista al navegar entre páginas
}

//? Punto de entrada: se ejecuta cuando el HTML terminó de cargar.
//? 1) aplica el idioma guardado (o el default) apenas carga la página
//? 2) conecta los botones ES/EN para que al hacer click cambien el idioma
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyTranslations(savedLang);

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
        btn.addEventListener("click", () => applyTranslations(btn.dataset.langSwitch));
    });
});
