
import { CourseResource, Question, CourseData } from "@/types/course";

export const courseResources: Record<string, CourseResource> = {
  "c": {
    introVideo: "https://tinyurl.com/mt46w46v",
    freeLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/2cjxpbdd" },
      { platform: "YouTube", url: "https://tinyurl.com/mudxmhxt" },
      { platform: "MIT", url: "https://tinyurl.com/2p9tj8b8" },
      { platform: "Udacity", url: "https://tinyurl.com/yc6mkmvh" },
      { platform: "YouTube", url: "https://tinyurl.com/3e3jy9fa" }
    ],
    paidLinks: [
      { platform: "Coursera", url: "https://tinyurl.com/5n72mvpd" },
      { platform: "Udemy", url: "https://tinyurl.com/v8sdzbtk" },
      { platform: "Code Academy", url: "https://tinyurl.com/3fymwmrh" }
    ]
  },
  "python": {
    introVideo: "https://youtu.be/WvhQhj4n6b8",
    freeLinks: [
      { platform: "YouTube", url: "https://tinyurl.com/mr3caee8" },
      { platform: "Udacity", url: "https://tinyurl.com/sbtdpc49" },
      { platform: "YouTube", url: "https://tinyurl.com/mr2x8kum" },
      { platform: "Khan Academy", url: "https://tinyurl.com/bzxa4ney" },
      { platform: "SoloLearn", url: "https://tinyurl.com/3bkzeb67" }
    ],
    paidLinks: [
      { platform: "Coursera", url: "https://tinyurl.com/mr3caee8" },
      { platform: "Internshala", url: "https://tinyurl.com/4fp685mx" },
      { platform: "Udemy", url: "https://tinyurl.com/4994dktr" }
    ]
  },
  "java": {
    introVideo: "https://tinyurl.com/2s9kfhfp",
    freeLinks: [
      { platform: "Udacity", url: "https://tinyurl.com/87vjh9c6" },
      { platform: "YouTube", url: "https://tinyurl.com/2mb5f92b" },
      { platform: "MIT", url: "https://tinyurl.com/3er9wdby" },
      { platform: "Udemy", url: "https://tinyurl.com/mryxfmw8" },
      { platform: "YouTube", url: "https://tinyurl.com/32wx5rau" }
    ],
    paidLinks: [
      { platform: "Coursera", url: "https://tinyurl.com/bdhhkbv3" },
      { platform: "Java Brains", url: "https://tinyurl.com/bd4dxr8c" },
      { platform: "Internshala", url: "https://tinyurl.com/2438bnxe" },
      { platform: "EDX", url: "https://tinyurl.com/k28racxs" }
    ]
  }
};

export const courseQuizzes: Record<string, Question[]> = {
  "html": [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these"
      ],
      correctAnswer: "Hyper Text Markup Language"
    }
  ],
  "css": [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    }
  ]
};

export const courseData: Record<string, CourseData> = {
  "html": {
    title: "HTML Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
    resources: [
      "Complete HTML Documentation",
      "HTML Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "css": {
    title: "CSS Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/OXGznpKZ_sA",
    resources: [
      "Complete CSS Documentation",
      "CSS Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  }
};
