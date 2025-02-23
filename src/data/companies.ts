
export interface Company {
  id: string;
  name: string;
  logo: string;
  interviewPattern: string[];
  questionPapers: {
    year: string;
    title: string;
    link: string;
  }[];
}

export const companies: Company[] = [
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    interviewPattern: [
      "Online Assessment (2-3 hours)",
      "Technical Interview 1 (Data Structures & Algorithms)",
      "Technical Interview 2 (System Design)",
      "HR Interview"
    ],
    questionPapers: [
      {
        year: "2024",
        title: "Software Developer Assessment",
        link: "#"
      },
      {
        year: "2023",
        title: "Technical Interview Questions",
        link: "#"
      }
    ]
  },
  {
    id: "google",
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    interviewPattern: [
      "Online Coding Challenge",
      "Phone Screen Interview",
      "Technical Onsite Interviews (4-5 rounds)",
      "Behavioral Interview"
    ],
    questionPapers: [
      {
        year: "2024",
        title: "Coding Challenge Questions",
        link: "#"
      },
      {
        year: "2023",
        title: "Technical Assessment Paper",
        link: "#"
      }
    ]
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    interviewPattern: [
      "Online Assessment",
      "Technical Phone Screen",
      "Virtual Onsite Interviews",
      "Leadership Principles Discussion"
    ],
    questionPapers: [
      {
        year: "2024",
        title: "SDE Assessment",
        link: "#"
      },
      {
        year: "2023",
        title: "Technical Interview Guide",
        link: "#"
      }
    ]
  },
  {
    id: "meta",
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png",
    interviewPattern: [
      "Initial Screen",
      "Technical Phone Interview",
      "Coding Interviews (2 rounds)",
      "System Design & Behavioral"
    ],
    questionPapers: [
      {
        year: "2024",
        title: "Software Engineering Assessment",
        link: "#"
      },
      {
        year: "2023",
        title: "Coding Interview Questions",
        link: "#"
      }
    ]
  }
];
