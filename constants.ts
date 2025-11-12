
import type { AppContent } from './types';

export const CONTENT: AppContent = {
  nl: {
    header: {
      name: 'Lucas van Erven',
      navLinks: [
        { id: 'opleiding', text: 'Opleiding' },
        { id: 'ict-werkervaring', text: 'ICT-Werkervaring' },
        { id: 'andere-werkervaring', text: 'Andere Werkervaring' },
        { id: 'hobbys', text: 'Hobby’s' },
      ],
    },
    hero: {
      title: 'Wie ben ik?',
      paragraph1:
        'Ik ben Lucas, een gepassioneerde neurodivergente developer. Mijn interessevelden komen van heinde en verre. Ik houd mij bezig met vele verschillende tijdsbestedingen.',
      paragraph2: 'Lees verder om meer over mij te weten te komen!',
    },
    aboutMe: {
      paragraph1: 'In 2022 ben ik mijn reis als developer begonnen door de opleiding HBO-ICT aan Hogeschool Windesheim te gaan volgen. In deze periode heb ik mijn vaardigheden op zowel professioneel als persoonlijk vlak gigantisch doen groeien. Hoewel ik geregeld tegen uitdagingen aanloop, ben ik altijd bereid om te leren en mijzelf te verbeteren.',
      paragraph2: 'Op 13-jarige leeftijd heb ik de diagnose PDD-NOS gekregen, hedendaags beter bekend als autismespectrumstoornis. Alhoewel ik altijd nog bezig ben met het begrijpen en temmen van mijn autisme, heb ik grote sprongen gemaakt om er mee om te gaan. Ik ben er namelijk goed van bewust dat mijn neurodivergentie van tijd tot tijd voor uitdagingen voor zowel mijzelf als anderen kan zorgen. Hiernaast ben ik onlangs gediagnosticeerd met ADHD. De combinatie van deze diagnoses verklaart veel over mijn manier van denken en handelen, en vormt soms verwarring in de sociale omgang. Desondanks ben ik van mening dat iemand\'s diagnostiek niet hun identiteit definieert. Er zitten namelijk ook vele voordelen aan mijn neurodivergentie. Gesprekken hierover zijn altijd welkom!',
      paragraph3: 'Verder ben ik fanatiek voorstander van sport en beweging. Zo doe ik twee à drie keer per week aan boogschieten, en doe ik regelmatig aan hardlopen en krachttraining. Verder doe ik ook mee aan evenementen zoals Mud Masters en Strong Viking.'
    },
    education: {
      title: 'Opleiding',
      institutions: [
        {
          id: 'windesheim',
          institution: 'Hogeschool Windesheim',
          logoUrl: 'https://picsum.photos/seed/windesheim/80/80',
          years: '2022 - heden',
          status: 'Lopend',
          details: {
            opleidingsnaam: 'HBO-ICT',
            niveau: 'HBO Bachelor',
            uitstroomprofiel: 'Software Engineering',
            locatie: 'Almere, Flevoland',
          },
          clickableText: 'Klik voor details',
          dialogContent: {
            title: 'HBO-ICT - Hogeschool Windesheim',
            projects: [
              { title: 'PSEMO - ADHD Medicatie Tracker', date: '08/2025 - 02/2026', description: 'React Native Expo mobiele applicatie voor het bijhouden van ADHD medicatie.', skills: ['React Native', 'Expo', 'Supabase', 'PostgreSQL'] },
              { title: 'AlphaRainbow stage', date: '03/2022 - 07/2025', description: 'Migratie van lokaal python programma naar webapplicatie variant.', skills: ['Vue.js 3', 'Python', 'Vite', 'REST API'] }
            ],
            curriculum: [
              { year: 4, courses: [
                { name: 'Basis algoritmiek en informatica', status: 'Lopend', credits: 3 },
                { name: 'Introduction to machine learning', status: 'Lopend', credits: 5 },
                { name: 'Low-code development', status: 'Lopend', credits: 5 },
                { name: 'PSEMO', status: 'Lopend', credits: 15 },
                { name: 'Visieontwikkeling', status: 'Komend', credits: 2 },
                { name: 'Afstudeerstage', status: 'Komend', credits: 30 }
              ]},
              { year: 3, courses: [
                { name: 'Stage software engineering', status: 'Afgerond', credits: 30 },
                { name: 'Persoonlijke profileringsruimte / Minor', status: 'Afgerond', credits: 30 }
              ]},
              { year: 2, courses: [
                { name: 'C#', status: 'Afgerond', credits: 5 },
                { name: 'C# advanced', status: 'Lopend', credits: 5 },
                { name: 'Comakership software development', status: 'Afgerond', credits: 15 },
                { name: 'Operations', status: 'Afgerond', credits: 5 },
                { name: 'Privacy & security', status: 'Afgerond', credits: 5 },
                { name: 'Product ownership', status: 'Afgerond', credits: 5 },
                { name: 'Professional skills 3', status: 'Afgerond', credits: 5 },
                { name: 'Professional skills 4', status: 'Afgerond', credits: 5 },
                { name: 'Project Software development lifecycle', status: 'Afgerond', credits: 10 }
              ]},
              { year: 1, courses: [
                { name: 'Analyse en functioneel ontwerpen', status: 'Afgerond', credits: 3 },
                { name: 'Databases', status: 'Afgerond', credits: 3 },
                { name: 'Engels', status: 'Afgerond', credits: 3 },
                { name: 'Inleiding programmeren', status: 'Afgerond', credits: 3 },
                { name: 'Inleiding security', status: 'Afgerond', credits: 3 },
                { name: 'Java praktijk', status: 'Afgerond', credits: 3 },
                { name: 'Java theorie', status: 'Afgerond', credits: 3 },
                { name: 'Kenmerkende beroepssituatie', status: 'Afgerond', credits: 15 },
                { name: 'Nederlands', status: 'Afgerond', credits: 3 },
                { name: 'Pakketselectie', status: 'Afgerond', credits: 3 },
                { name: 'Procesmodelleren', status: 'Afgerond', credits: 3 },
                { name: 'Professionele ontwikkeling 1', status: 'Afgerond', credits: 3 },
                { name: 'Professionele ontwikkeling 2', status: 'Afgerond', credits: 3 },
                { name: 'Servicemanagement', status: 'Afgerond', credits: 3 },
                { name: 'Smart things', status: 'Afgerond', credits: 3 },
                { name: 'Structured query language', status: 'Afgerond', credits: 3 }
              ]}
            ]
          }
        },
        {
          id: 'hu',
          institution: 'Hogeschool Utrecht',
          logoUrl: 'https://picsum.photos/seed/hu/80/80',
          years: '2024-2025',
          status: 'Afgerond',
          details: {
            opleidingsnaam: 'Toegepaste psychologie',
            niveau: 'HBO Bachelor',
            uitstroomprofiel: 'N.V.T.',
            locatie: 'Utrecht, Utrecht',
          },
          clickableText: 'Klik voor details',
          dialogContent: {
            title: 'Toegepaste psychologie - Hogeschool Utrecht',
            mainProject: {
                title: 'Sociale uitingsvormen van autisme',
                description: 'Onderzoek naar de diverse uitingsvormen van autisme in sociale contexten, en welke uitdagingen dit kan creëren. Onder andere door de geschiedenis van autisme en de diagnosestelling onder de loep te nemen.',
            },
            followedCourses: [
                { name: 'Fundamenten van de psychologie', credits: 5 },
                { name: 'Hersenen en gedrag', credits: 5 },
                { name: 'Persoonlijkheidsleer', credits: 5 },
                { name: 'Project A', credits: 5 },
                { name: 'Project B', credits: 5 },
                { name: 'Sociale Psychologie', credits: 5 },
            ]
          }
        },
        {
          id: 'baken',
          institution: 'Baken Park Lyceum',
          logoUrl: 'https://picsum.photos/seed/baken/80/80',
          years: '2018 - 2021',
          status: 'Afgerond',
          details: {
            opleidingsnaam: 'N.V.T.',
            niveau: 'HAVO',
            uitstroomprofiel: 'N&G, N&T',
            locatie: 'Almere, Flevoland',
          },
          clickableText: 'Extracurriculair diploma',
          accordionContent: {
            title: 'European Business Competence *License',
            certificateNumber: 'NL-J-3223',
            issuedBy: 'ebcl-nederland',
            date: '04/07/2019',
            logoUrl: 'https://picsum.photos/seed/ebcl/80/40',
          }
        },
      ],
    },
    workExperience: {
      title: 'Werkervaring',
      categories: {
        it: 'ICT',
        communication: 'Communicatie & Onderwijs',
        logistics: 'Logistiek & Retail',
      },
      jobs: {
        it: [
          { title: 'Mobile Developer', company: 'Windesheim - Project PSEMO', date: '08/2025 — 02/2026', description: 'Praktijkgerichte Software Engineering met Onderwijs, ofwel PSEMO, is een project waarin ik in een tweetal werk aan het conceptualiseren, ontwerpen, ontwikkelen en implementeren van een mobiele app. Deze app is bedoeld om mensen met ADHD te ondersteunen bij het innemen van hun medicatie.', supervisor: 'Christian Nyqvist', skills: ['React Native Expo', 'Supabase', 'PostgreSQL', 'Scrum'], logoUrl: 'https://picsum.photos/seed/windesheim-work/80/80' },
          { title: 'ICT-stagiair', company: 'AlphaRainbow', date: '03/2025 — 07/2025', description: 'Deze stage was de eerste omgeving waar ik volledig zelfstandig een ICT-project mocht uitvoeren. Gedurende deze periode heb ik op zowel persoonlijk als professioneel vlak veel groei doorgemaakt. Kwesties rondom mijn neurodivergentie welke mij voorheen nog onbekend waren, kwamen hier aan het licht. Onder begeleiding heb ik een webapplicatie ontwikkeld in Vue, gebaseerd op een lokaal Python-programma.', supervisor: 'Marco Strijker', skills: ['Python', 'Vue.js', 'Vite', 'Scrum/Waterval mix'], logoUrl: 'https://picsum.photos/seed/alpharainbow/80/80' },
          { title: 'Software Developer', company: 'DareIT - Comakership Software Development', date: '02/2024 — 06/2024', description: 'Deze comaker markeerde mijn start als jong professional. In een groep van vier studenten hebben wij met MudBlazor een webapplicatie ontwikkeld. Deze webapplicatie moest de fundering vormen voor een nieuwe zusteractiviteit van het bedrijf. Wij hebben naar eigen zeggen van onze begeleider "uitstekend werk geleverd", en tot op heden wordt ons werk nog steeds gebruikt.', supervisor: 'René Gisbertz & Dave Ruiters', skills: ['C#', '.NET', 'MudBlazor', 'Basis Scrum'], logoUrl: 'https://picsum.photos/seed/dareit/80/80' }
        ],
        communication: [
          { title: 'Studentambassadeur', company: 'Windesheim', date: '2023 — heden', description: 'Vertegenwoordigen van het HBO, en Windesheim promoten. Dit doe ik door voorlichtingen te geven aan, studie- en oriëntatiemarkten te organiseren voor, en andere activiteiten te ondergaan met middelbare scholieren.', skills: ['Teamleiding', 'Evenementorganisatie', 'Voorlichtingen geven', 'Publiekelijk spreken'], logoUrl: 'https://picsum.photos/seed/windesheim-comm/80/80' },
          { title: 'Studentcoach', company: 'Windesheim', date: '2023 — 2024', description: 'Ondersteunen van jongerejaars studenten. Dit deed ik door persoonlijke begeleiding, 1-op-1 coaching, en lesgeven.', skills: ['Coaching', 'Gespreksvoering', 'Persoonlijke begeleiding', 'Lesgeven'], logoUrl: 'https://picsum.photos/seed/windesheim-coach/80/80' }
        ],
        logistics: [
          { title: 'Magazijnmedewerker', company: 'Macot Online B.V.', date: '06/2025 — heden', description: 'Met behulp van een handscanner en een WMS verzamel ik als primaire picker benodigde goederen voor klantbestellingen. Hierbij gebruik ik een EPT. Deze bestellingen worden vervolgens verpakt en verzendklaar gemaakt. Ook zorg ik voor inkomende goederen en de verwerking hiervan.', skills: ['WMS', 'Orderpicking', 'EPT', 'Inbound'], logoUrl: 'https://picsum.photos/seed/macot/80/80' },
          { title: 'Logistiek Medewerker', company: 'BoekenVoordeel B.V.', date: '06/2023 — 05/2024', description: 'Als logistiek medewerker verzamelde ik klantbestellingen met een tablet, a.d.h.v. een WMS. Deze bestellingen maakte ik vervolgens verzendklaar. Na enige tijd kreeg ik leidinggevende taken, waardoor ik een team van ongeveer 8 medewerkers aanstuurde.', skills: ['Leidinggeven', 'Orderpicking', 'Orderpacking'], logoUrl: 'https://picsum.photos/seed/boekenvoordeel/80/80' }
        ]
      },
      technicalSkills: {
        title: 'Technische Vaardigheden',
        frontend: { title: 'Frontend', skills: [{name: 'Vue.js'}, {name: 'React Native Expo'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'MudBlazor'}] },
        backend: { title: 'Backend', skills: [{name: 'Node.js'}, {name: 'C#'}, {name: '.NET'}, {name: 'PHP'}, {name: 'Java'}, {name: 'Supabase'}] },
        database: { title: 'Database', skills: [{name: 'SQL'}, {name: 'PostgreSQL'}, {name: 'MongoDB'}] }
      },
      transferableSkills: {
        title: 'Overdraagbare Vaardigheden',
        skills: [
            { title: 'Communicatie', description: 'Ervaring in mijn Windesheim-rollen hebben mijn vermogen aangescherpt om concepten uit te leggen op het niveau van mijn doelgroep. Ik ben gigantisch gegroeid in het creëren van duidelijkheid en consensus, ongeacht of ik met (mede)studenten, collega\'s of externe partijen spreek.' },
            { title: 'Probleemoplossend vermogen', description: 'Wegens het feit dat ik al jaren voor velen als steunpilaar fungeer, en veel taken uitvoer welk bijna volledig zelfstandig uit te voeren zijn, heb ik een instinct ontwikkeld om om te gaan met onverwachte situaties en problemen.' },
            { title: 'Teamleiding', description: 'In mijn periode bij BoekenVoordeel kreeg ik mijn eerste leidinggevende taken. Hier leerde ik onder andere hoe ik een team sturing kon geven, werkzaamheden kon delegeren, en in het algemeen moraal hoog kon houden. Bij mijn windesheim-rollen heb ik deze vaardigheden goed kunnen uitbreiden en verfijnen.' },
            { title: 'Oog voor detail', description: 'Logistieke functies laten geen ruimte voor fouten. Dit heeft mijn discipline voor preciesie en kwaliteit doen verhogen. Paar dit met mijn autistische kwaliteiten, en de rekensom is snel gemaakt.' },
            { title: 'Flexibiliteit', description: 'Werken in drie verschillende sectoren, soms allen tegelijk, heeft mij geleerd comfortabeler te zijn met snelle veranderingen. Als u bekend met autisme bent, weet u dat verandering voor ons lang niet altijd even makkelijk is. Dit is voor mij niet anders, maar mijn functies hebben mij geleerd om hier veel beter mee om te gaan.' }
        ]
      }
    },
    hobbies: {
      title: 'Hobby’s',
      intro: 'Leer mij buiten het professionele leven kennen',
      hobbies: [
        { name: 'Boogschieten', description: 'Begin 2025 ben ik de wereld van de handboogsport ingestapt. Deze ogenschijnlijke eengvoudige sport is echter complexer dan meesten denken. Ondertussen schiet ik mijn eigen recurveboog, en ben ik actief lid van de Handboogvereniging Almere.', percentage: 80 },
        { name: 'Hardlopen', description: 'Hardlopen is voor mij de perfecte manier om mijn hoofd leeg te maken, en tegelijkertijd fit te blijven. Wegens langdurige blessures is mijn conditie de oude niet meer, maar langzaam maar zeker keert mijn hardloopplezier terug.', percentage: 50 },
        { name: 'Muziek', description: 'Muziek is mijn manier om te ontspannen, mijzelf te kalmeren, te focussen, en nog veel meer. Muziek is voor mij een bron van rust en comfort. Mijn muzieksmaak bevalt lang niet iedereen, maar ik geniet er des te meer van.', percentage: 100 },
        { name: '(Online) Spellen', description: 'Online spellen zijn voor mij een manier om te verbinden en plezier te hebben met vrienden. Ook met een bordspelletje en de juiste mensen kan ik groots genieten.', percentage: 65 },
        { name: 'Koken', description: 'Toegegeven, ik ben geen keukenprins. Echter vind ik het een aangename uitdaging om nieuwe recepten uit te proberen.', percentage: 40 },
        { name: 'Alles en Niets', description: 'Met regelmaat start ik enthousiast nieuwe dingen - ideeën, projecten, hobby’s - vaak sneller dan ik ze kan afronden.', percentage: 75 }
      ]
    },
    goals: {
      title: 'Persoonlijke Toekomstdoelen',
      goals: [
        { title: 'Strong Viking bijl', description: 'Elke tweede deelname aan het evenement ontvangt een deelnemer een deel van de Strong Viking bijl. Deze bestaat uit vier stukken. Nog vijf deelnames te gaan!' },
        { title: 'Drie achtereenvolgende Almere Weerwater Runs', description: 'Jaarlijks wordt in Almere de Weerwater Run georganiseerd. Dit is het grootste hardloopevenement van de de stad, en brengt een fantastische sfeer met zich mee. Ik wil deze run drie achtereenvolgende jaren uitlopen.' },
        { title: 'Marathon', description: 'Wegens inspanningsastma ben ik minder in staat om grote afstanden te rennen. Een levensdoel van mij is om dit te overwinnen, en uiteindelijk een marathon te lopen.' },
        { title: 'Kilimanjaro', description: 'Mijn grootste droom is om bovenop de Kilimanjaro te staan. Dit vereist meer dan alleen fysieke voorbereiding, en ik ben meer dan bereid om deze kolossale uitdaging aan te gaan.' },
        { title: 'Opleiding in Psychologie', description: 'Ik heb altijd een grote interesse gehad in de menselijke aard, waar komt ons gedrag vandaan, en hoe kan dat worden beïnvloed? Het is zeker een mogelijkheid dat ik in de toekomst een opleiding in de psychologie onder handen neem.' }
      ]
    },
    footer: {
      title: 'Connect',
      email: 'lucasvanerven@email.com',
      linkedin: 'linkedin.com/in/lucasvanerven'
    }
  },
  en: {
    header: {
      name: 'Lucas van Erven',
      navLinks: [
        { id: 'opleiding', text: 'Education' },
        { id: 'ict-werkervaring', text: 'IT Work Experience' },
        { id: 'andere-werkervaring', text: 'Other Work Experience' },
        { id: 'hobbys', text: 'Hobbies' },
      ],
    },
    hero: {
      title: 'Who am I?',
      paragraph1:
        'I am Lucas, a passionate neurodivergent developer. My fields of interest come from far and wide. I engage in many different pastimes.',
      paragraph2: 'Read on to find out more about me!',
    },
    aboutMe: {
      paragraph1: 'In 2022, I began my journey as a developer by starting the HBO-ICT program at Windesheim University of Applied Sciences. During this period, my skills have grown immensely, both professionally and personally. Although I regularly face challenges, I am always willing to learn and improve myself.',
      paragraph2: 'At the age of 13, I was diagnosed with PDD-NOS, now better known as autism spectrum disorder. Although I am still in the process of understanding and taming my autism, I have made great strides in coping with it. I am well aware that my neurodivergence can sometimes create challenges for myself and others. In addition, I was recently diagnosed with ADHD. The combination of these diagnoses explains a lot about my way of thinking and acting, and sometimes causes confusion in social interactions. Nevertheless, I believe that a person\'s diagnosis does not define their identity. There are also many advantages to my neurodivergence. Conversations about this are always welcome!',
      paragraph3: 'Furthermore, I am a fervent advocate of sports and exercise. I practice archery two to three times a week, and I regularly go running and do strength training. As a result, I also participate in events like Mud Masters and Strong Viking.'
    },
    education: {
      title: 'Education',
      institutions: [
        {
          id: 'windesheim',
          institution: 'Windesheim University of Applied Sciences',
          logoUrl: 'https://picsum.photos/seed/windesheim/80/80',
          years: '2022 - present',
          status: 'Lopend',
          details: {
            opleidingsnaam: 'HBO-ICT (B.Sc. in IT)',
            niveau: 'Bachelor of Science',
            uitstroomprofiel: 'Software Engineering',
            locatie: 'Almere, Flevoland',
          },
          clickableText: 'Click for details',
          dialogContent: {
            title: 'HBO-ICT - Windesheim University of Applied Sciences',
            projects: [
              { title: 'PSEMO - ADHD Medication Tracker', date: '08/2025 - 02/2026', description: 'React Native Expo mobile application for tracking ADHD medication.', skills: ['React Native', 'Expo', 'Supabase', 'PostgreSQL'] },
              { title: 'AlphaRainbow Internship', date: '03/2022 - 07/2025', description: 'Migration of a local Python program to a web application version.', skills: ['Vue.js 3', 'Python', 'Vite', 'REST API'] }
            ],
            curriculum: [
              { year: 4, courses: [
                { name: 'Basic Algorithms and Informatics', status: 'Lopend', credits: 3 },
                { name: 'Introduction to Machine Learning', status: 'Lopend', credits: 5 },
                { name: 'Low-Code Development', status: 'Lopend', credits: 5 },
                { name: 'PSEMO', status: 'Lopend', credits: 15 },
                { name: 'Vision Development', status: 'Komend', credits: 2 },
                { name: 'Graduation Internship', status: 'Komend', credits: 30 }
              ]},
              { year: 3, courses: [
                { name: 'Software Engineering Internship', status: 'Afgerond', credits: 30 },
                { name: 'Personal Profiling Space / Minor', status: 'Afgerond', credits: 30 }
              ]},
              { year: 2, courses: [
                { name: 'C#', status: 'Afgerond', credits: 5 },
                { name: 'C# Advanced', status: 'Lopend', credits: 5 },
                { name: 'Comakership Software Development', status: 'Afgerond', credits: 15 },
                { name: 'Operations', status: 'Afgerond', credits: 5 },
                { name: 'Privacy & Security', status: 'Afgerond', credits: 5 },
                { name: 'Product Ownership', status: 'Afgerond', credits: 5 },
                { name: 'Professional Skills 3', status: 'Afgerond', credits: 5 },
                { name: 'Professional Skills 4', status: 'Afgerond', credits: 5 },
                { name: 'Project Software Development Lifecycle', status: 'Afgerond', credits: 10 }
              ]},
              { year: 1, courses: [
                { name: 'Analysis and Functional Design', status: 'Afgerond', credits: 3 },
                { name: 'Databases', status: 'Afgerond', credits: 3 },
                { name: 'English', status: 'Afgerond', credits: 3 },
                { name: 'Introduction to Programming', status: 'Afgerond', credits: 3 },
                { name: 'Introduction to Security', status: 'Afgerond', credits: 3 },
                { name: 'Java Practice', status: 'Afgerond', credits: 3 },
                { name: 'Java Theory', status: 'Afgerond', credits: 3 },
                { name: 'Characteristic Professional Situation', status: 'Afgerond', credits: 15 },
                { name: 'Dutch', status: 'Afgerond', credits: 3 },
                { name: 'Package Selection', status: 'Afgerond', credits: 3 },
                { name: 'Process Modeling', status: 'Afgerond', credits: 3 },
                { name: 'Professional Development 1', status: 'Afgerond', credits: 3 },
                { name: 'Professional Development 2', status: 'Afgerond', credits: 3 },
                { name: 'Service Management', status: 'Afgerond', credits: 3 },
                { name: 'Smart Things', status: 'Afgerond', credits: 3 },
                { name: 'Structured Query Language', status: 'Afgerond', credits: 3 }
              ]}
            ]
          }
        },
        {
          id: 'hu',
          institution: 'Utrecht University of Applied Sciences',
          logoUrl: 'https://picsum.photos/seed/hu/80/80',
          years: '2024-2025',
          status: 'Afgerond',
          details: {
            opleidingsnaam: 'Applied Psychology',
            niveau: 'Bachelor of Science',
            uitstroomprofiel: 'N/A',
            locatie: 'Utrecht, Utrecht',
          },
          clickableText: 'Click for details',
          dialogContent: {
            title: 'Applied Psychology - Utrecht University of Applied Sciences',
            mainProject: {
                title: 'Social Manifestations of Autism',
                description: 'Research into the diverse manifestations of autism in social contexts, and the challenges this can create. Including an examination of the history of autism and its diagnosis.',
            },
            followedCourses: [
                { name: 'Foundations of Psychology', credits: 5 },
                { name: 'Brain and Behavior', credits: 5 },
                { name: 'Personality Theory', credits: 5 },
                { name: 'Project A', credits: 5 },
                { name: 'Project B', credits: 5 },
                { name: 'Social Psychology', credits: 5 },
            ]
          }
        },
        {
          id: 'baken',
          institution: 'Baken Park Lyceum',
          logoUrl: 'https://picsum.photos/seed/baken/80/80',
          years: '2018 - 2021',
          status: 'Afgerond',
          details: {
            opleidingsnaam: 'N/A',
            niveau: 'HAVO',
            uitstroomprofiel: 'Science & Health, Science & Technology',
            locatie: 'Almere, Flevoland',
          },
          clickableText: 'Extracurricular Diploma',
          accordionContent: {
            title: 'European Business Competence *License',
            certificateNumber: 'NL-J-3223',
            issuedBy: 'ebcl-netherlands',
            date: '07/04/2019',
            logoUrl: 'https://picsum.photos/seed/ebcl/80/40',
          }
        },
      ],
    },
    workExperience: {
      title: 'Work Experience',
      categories: {
        it: 'IT Work Experience',
        communication: 'Communication & Education',
        logistics: 'Logistics & Retail',
      },
      jobs: {
        it: [
          { title: 'Mobile Developer', company: 'Windesheim - Project PSEMO', date: '08/2025 — 02/2026', description: 'Practice-oriented Software Engineering with Education (PSEMO) is a project where I work in a team of two to conceptualize, design, develop, and implement a mobile app. This app is intended to support people with ADHD in taking their medication.', supervisor: 'Christian Nyqvist', skills: ['React Native Expo', 'Supabase', 'PostgreSQL', 'Scrum'], logoUrl: 'https://picsum.photos/seed/windesheim-work/80/80' },
          { title: 'IT Intern', company: 'AlphaRainbow', date: '03/2025 — 07/2025', description: 'This internship was the first environment where I could independently carry out an IT project. During this period, I experienced significant personal and professional growth. Issues related to my neurodivergence, previously unknown to me, came to light here. Under guidance, I developed a web application in Vue, based on a local Python program.', supervisor: 'Marco Strijker', skills: ['Python', 'Vue.js', 'Vite', 'Scrum/Waterfall mix'], logoUrl: 'https://picsum.photos/seed/alpharainbow/80/80' },
          { title: 'Software Developer', company: 'DareIT - Comakership Software Development', date: '02/2024 — 06/2024', description: 'This comakership marked my start as a young professional. In a group of four students, we developed a web application with MudBlazor. This web application was to form the foundation for a new sister activity of the company. According to our supervisor, we "delivered excellent work," and to this day, our work is still in use.', supervisor: 'René Gisbertz & Dave Ruiters', skills: ['C#', '.NET', 'MudBlazor', 'Basic Scrum'], logoUrl: 'https://picsum.photos/seed/dareit/80/80' }
        ],
        communication: [
          { title: 'Student Ambassador', company: 'Windesheim', date: '2023 — present', description: 'Representing higher vocational education and promoting Windesheim. I do this by giving presentations to, organizing study and orientation fairs for, and engaging in other activities with high school students.', skills: ['Team Leadership', 'Event Organization', 'Giving Presentations', 'Public Speaking'], logoUrl: 'https://picsum.photos/seed/windesheim-comm/80/80' },
          { title: 'Student Coach', company: 'Windesheim', date: '2023 — 2024', description: 'Supporting junior students. I did this through personal guidance, 1-on-1 coaching, and teaching.', skills: ['Coaching', 'Conversation Skills', 'Personal Guidance', 'Teaching'], logoUrl: 'https://picsum.photos/seed/windesheim-coach/80/80' }
        ],
        logistics: [
          { title: 'Warehouse Employee', company: 'Macot Online B.V.', date: '06/2025 — present', description: 'Using a hand scanner and a WMS, I work as a primary picker to collect necessary goods for customer orders. I use an EPT for this. These orders are then packed and made ready for shipment. I also handle incoming goods and their processing.', skills: ['WMS', 'Order Picking', 'EPT', 'Inbound'], logoUrl: 'https://picsum.photos/seed/macot/80/80' },
          { title: 'Logistics Employee', company: 'BoekenVoordeel B.V.', date: '06/2023 — 05/2024', description: 'As a logistics employee, I collected customer orders with a tablet, based on a WMS. I then prepared these orders for shipment. After some time, I was given leadership tasks, managing a team of about 8 employees.', skills: ['Leadership', 'Order Picking', 'Order Packing'], logoUrl: 'https://picsum.photos/seed/boekenvoordeel/80/80' }
        ]
      },
      technicalSkills: {
        title: 'Technical Skills',
        frontend: { title: 'Frontend', skills: [{name: 'Vue.js'}, {name: 'React Native Expo'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'MudBlazor'}] },
        backend: { title: 'Backend', skills: [{name: 'Node.js'}, {name: 'C#'}, {name: '.NET'}, {name: 'PHP'}, {name: 'Java'}, {name: 'Supabase'}] },
        database: { title: 'Database', skills: [{name: 'SQL'}, {name: 'PostgreSQL'}, {name: 'MongoDB'}] }
      },
      transferableSkills: {
        title: 'Transferable Skills',
        skills: [
            { title: 'Communication', description: 'Experience in my Windesheim roles has sharpened my ability to explain concepts at the level of my target audience. I have grown immensely in creating clarity and consensus, whether speaking with (fellow) students, colleagues, or external parties.' },
            { title: 'Problem-Solving Ability', description: 'Because I have served as a pillar of support for many for years, and perform many tasks that are almost entirely independent, I have developed an instinct for dealing with unexpected situations and problems.' },
            { title: 'Team Leadership', description: 'During my time at BoekenVoordeel, I was given my first leadership tasks. Here I learned, among other things, how to guide a team, delegate tasks, and generally keep morale high. In my Windesheim roles, I have been able to expand and refine these skills well.' },
            { title: 'Attention to Detail', description: 'Logistics functions leave no room for error. This has increased my discipline for precision and quality. Pair this with my autistic qualities, and the math is simple.' },
            { title: 'Flexibility', description: 'Working in three different sectors, sometimes all at once, has taught me to be more comfortable with rapid changes. If you are familiar with autism, you know that change is not always easy for us. This is no different for me, but my roles have taught me to cope with it much better.' }
        ]
      }
    },
    hobbies: {
      title: 'Hobbies',
      intro: 'Get to know me outside of my professional life',
      hobbies: [
        { name: 'Archery', description: 'In early 2025, I entered the world of archery. This seemingly simple sport is more complex than most people think. I now shoot my own recurve bow and am an active member of the Almere Archery Association.', percentage: 80 },
        { name: 'Running', description: 'For me, running is the perfect way to clear my head and stay fit at the same time. Due to long-term injuries, my fitness is not what it used to be, but slowly my joy for running is returning.', percentage: 50 },
        { name: 'Music', description: 'Music is my way to relax, calm myself, focus, and much more. For me, music is a source of peace and comfort. Not everyone likes my taste in music, but I enjoy it all the more.', percentage: 100 },
        { name: '(Online) Games', description: 'Online games are a way for me to connect and have fun with friends. I can also greatly enjoy a board game with the right people.', percentage: 65 },
        { name: 'Cooking', description: 'Admittedly, I am not a master chef. However, I find it a pleasant challenge to try out new recipes.', percentage: 40 },
        { name: 'Everything and Nothing', description: 'I regularly start new things with enthusiasm - ideas, projects, hobbies - often faster than I can finish them.', percentage: 75 }
      ]
    },
    goals: {
      title: 'Personal Future Goals',
      goals: [
        { title: 'Strong Viking Axe', description: 'For every second participation in the event, a participant receives a part of the Strong Viking axe. It consists of four pieces. Five more participations to go!' },
        { title: 'Three consecutive Almere Weerwater Runs', description: 'The Weerwater Run is organized annually in Almere. It is the largest running event in the city and brings a fantastic atmosphere. I want to complete this run for three consecutive years.' },
        { title: 'Marathon', description: 'Due to exercise-induced asthma, I am less able to run long distances. A life goal of mine is to overcome this and eventually run a marathon.' },
        { title: 'Kilimanjaro', description: 'My biggest dream is to stand on top of Kilimanjaro. This requires more than just physical preparation, and I am more than willing to take on this colossal challenge.' },
        { title: 'Education in Psychology', description: 'I have always had a great interest in human nature, where our behavior comes from, and how it can be influenced. It is certainly a possibility that I will pursue a degree in psychology in the future.' }
      ]
    },
    footer: {
      title: 'Connect',
      email: 'lucasvanerven@email.com',
      linkedin: 'linkedin.com/in/lucasvanerven'
    }
  }
};
