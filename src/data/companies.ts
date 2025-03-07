
export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  interviewPattern: string[];
  questionPapers: {
    year: string;
    title: string;
    link: string;
  }[];
}

export const companies: Company[] = [
  {
    id: "tcs",
    name: "TCS",
    logo: "/lovable-uploads/ffcaaa70-0f79-4046-a3b5-09be06b9db22.png",
    description: "Tata Consultancy Services (TCS) is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is part of the Tata Group and operates in 149 locations across 46 countries.",
    interviewPattern: [
      "Online Aptitude Test (Verbal, Quantitative, Reasoning)",
      "Technical Interview (Programming, Database, OS concepts)",
      "Managerial Round (Project discussion, Problem-solving)",
      "HR Interview (Cultural fit, Soft skills assessment)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "TCS NQT Aptitude Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "TCS Digital Coding Questions",
        link: "#"
      }
    ]
  },
  {
    id: "cts",
    name: "CTS",
    logo: "https://drive.google.com/uc?id=1a-HWjvdfAb4t3xo0O_R8_kwlqGs6Ipt-",
    description: "Cognizant Technology Solutions (CTS) is an American multinational information technology services and consulting company. It provides digital, technology, consulting, and operations services.",
    interviewPattern: [
      "GenC Next Coding Assessment",
      "Technical Interview Round 1 (Core concepts)",
      "Technical Interview Round 2 (Problem-solving)",
      "HR Interview (Communication and aptitude)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Cognizant GenC Assessment Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "GenC Next Technical Interview Questions",
        link: "#"
      }
    ]
  },
  {
    id: "techmahindra",
    name: "TECH MAHINDRA",
    logo: "/lovable-uploads/1a68714a-545b-4611-b21b-bfd2d759afc1.png",
    description: "Tech Mahindra is an Indian multinational information technology company. It provides IT services and business process outsourcing to companies in various vertical and horizontal markets.",
    interviewPattern: [
      "Online Assessment (Aptitude, Verbal, Technical)",
      "Technical Interview (Core technical concepts)",
      "Managerial Round",
      "HR Interview (Background verification, Cultural fit)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Tech Mahindra Aptitude Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Tech Mahindra Technical Interview Guide",
        link: "#"
      }
    ]
  },
  {
    id: "wipro",
    name: "WIPRO",
    logo: "/lovable-uploads/1d16b15a-ebaa-4997-98e3-989600e2c33f.png",
    description: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting, and business process services. It is one of the largest IT services companies globally.",
    interviewPattern: [
      "Online Assessment Test (NLTH)",
      "Business Discussion Round",
      "Technical Interview (Domain knowledge)",
      "HR Interview (Background check, Communication skills)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Wipro NLTH Assessment Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Wipro Elite Technical Interview Questions",
        link: "#"
      }
    ]
  },
  {
    id: "infosys",
    name: "INFOSYS",
    logo: "/lovable-uploads/44f5a2ae-73fd-4ac1-8ffa-d937cabeb536.png",
    description: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology, and outsourcing services. It is headquartered in Bangalore.",
    interviewPattern: [
      "InfyTQ Platform Assessment",
      "HackWithInfy Coding Contest (optional)",
      "Technical Interview (Programming, DBMS, OS)",
      "HR Interview (Communication skills, Attitude)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Infosys Certification Exam Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "InfyTQ Platform Assessment Guide",
        link: "#"
      }
    ]
  },
  {
    id: "mindtree",
    name: "MINDTREE",
    logo: "/lovable-uploads/e212540c-0b43-4e53-bc8c-c9b5a86a44ad.png",
    description: "Mindtree, now part of Larsen & Toubro, is an Indian multinational information technology and outsourcing company. It specializes in e-commerce, mobile applications, cloud computing, digital transformation, and more.",
    interviewPattern: [
      "Versant Test (Communication Assessment)",
      "Aptitude and Coding Assessment",
      "Technical Interview (Projects, Problem solving)",
      "HR Interview (Cultural alignment, Soft skills)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Mindtree Campus Recruitment Test",
        link: "#"
      },
      {
        year: "2022",
        title: "Mindtree Technical Interview Questions",
        link: "#"
      }
    ]
  },
  {
    id: "valuelabs",
    name: "VALUE LABS",
    logo: "https://drive.google.com/uc?id=1MC6LwK5zoTIDkmjZHgm2TxnHPGxGnrHJ",
    description: "Value Labs is a global technology company specializing in product development, data technology, and digital services. It has offices in the United States, India, and several other countries.",
    interviewPattern: [
      "Online Aptitude Test",
      "Technical Interview (Domain knowledge)",
      "Coding Round (Problem-solving skills)",
      "HR Interview (Communication, Background check)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Value Labs Assessment Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Value Labs Technical Interview Guide",
        link: "#"
      }
    ]
  },
  {
    id: "mphasis",
    name: "MPHASIS",
    logo: "https://drive.google.com/uc?id=1s4ExADXgIicpTaNjLj5Et6yv4UaPqXaT",
    description: "Mphasis is an IT services company based in Bangalore, India. It provides infrastructure technology and applications outsourcing services, as well as architecture guidance and digital transformation solutions.",
    interviewPattern: [
      "Online Aptitude and Coding Assessment",
      "Technical Interview Round 1 (Core concepts)",
      "Technical Interview Round 2 (Project discussion)",
      "HR Interview (Background verification)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Mphasis Aptitude Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Mphasis Technical Interview Guide",
        link: "#"
      }
    ]
  },
  {
    id: "zenq",
    name: "ZENQ",
    logo: "https://drive.google.com/uc?id=1FjZxLhhMSNhnkru1pZEGjD1-w8XJPTZQ",
    description: "ZenQ is a leading provider of quality engineering and software testing services. The company focuses on quality assurance, test automation, performance testing, and mobile application testing.",
    interviewPattern: [
      "Online Aptitude Test",
      "Technical Assessment (Testing concepts)",
      "Technical Interview (QA methodologies)",
      "HR Interview (Cultural fit assessment)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "ZenQ Assessment Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "ZenQ QA Interview Questions",
        link: "#"
      }
    ]
  },
  {
    id: "epam",
    name: "EPAM",
    logo: "https://drive.google.com/uc?id=14kYwuvk3DiCp_c67Qhdm5j8MQ9ctPmRm",
    description: "EPAM Systems is a global provider of software engineering and IT consulting services. The company specializes in product development, digital platform engineering, and digital product design.",
    interviewPattern: [
      "Online Assessment (Coding and aptitude)",
      "Technical Interview Round 1 (Problem-solving)",
      "Technical Interview Round 2 (System design)",
      "HR Interview (Cultural fit, Communication skills)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "EPAM Coding Assessment",
        link: "#"
      },
      {
        year: "2022",
        title: "EPAM Technical Interview Guide",
        link: "#"
      }
    ]
  },
  {
    id: "amcat",
    name: "AMCAT",
    logo: "https://drive.google.com/uc?id=1vPCyQnc844BK9jsTKQ7WIzcGpx3r3J-d",
    description: "AMCAT is not a company but a job skills assessment test that helps job seekers showcase their abilities to potential employers. It evaluates candidates on aptitude, technical knowledge, and personality traits.",
    interviewPattern: [
      "English Comprehension Module",
      "Logical Reasoning Module",
      "Quantitative Ability Module",
      "Domain-specific Modules (Programming, etc.)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "AMCAT Sample Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "AMCAT Preparation Guide",
        link: "#"
      }
    ]
  },
  {
    id: "elitmus",
    name: "ELITMUS",
    logo: "https://drive.google.com/uc?id=154gp-J7a43zDe2lwvwZPQ0uvEnU7SYF1",
    description: "eLitmus is a job application platform that offers the pH Test, a standardized employability test that measures cognitive, technical, and personality traits of candidates for job readiness.",
    interviewPattern: [
      "Problem Solving Module",
      "Verbal Ability Module",
      "Quantitative Ability Module",
      "Company-specific Technical Rounds (if selected)"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "eLitmus pH Test Sample Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "eLitmus Preparation Guide",
        link: "#"
      }
    ]
  },
  {
    id: "talentbattle",
    name: "TALENT BATTLE",
    logo: "https://drive.google.com/uc?id=1wIUuyPIS41jKHTrA_1RyMX1hBNWJ0TFS",
    description: "Talent Battle is an ed-tech platform that helps students prepare for placement exams and provides training for various technical and non-technical skills required by the industry.",
    interviewPattern: [
      "Aptitude Assessment",
      "Technical Knowledge Test",
      "Mock Interviews",
      "Resume Building and Soft Skills Training"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Talent Battle Practice Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Placement Preparation Guide",
        link: "#"
      }
    ]
  },
  {
    id: "trhr",
    name: "TR & HR Preparation",
    logo: "https://drive.google.com/uc?id=1jkLdSlyv-zAx3a8G-EZ38eXQV_AGjci4",
    description: "TR & HR Preparation resources help candidates prepare for Technical Rounds (TR) and Human Resources (HR) interviews across various companies. These are essential components of most job selection processes.",
    interviewPattern: [
      "Technical Round Preparation (Domain knowledge)",
      "Coding Practice for Technical Interviews",
      "HR Interview Question Preparation",
      "Mock Interview Sessions"
    ],
    questionPapers: [
      {
        year: "2023",
        title: "Common HR Interview Questions",
        link: "#"
      },
      {
        year: "2022",
        title: "Technical Round Preparation Guide",
        link: "#"
      }
    ]
  }
];
