
import { CourseResource, Question, CourseData } from "@/types/course";

export const courseResources: Record<string, CourseResource> = {
  "intro-programming": {
    introVideo: "https://tinyurl.com/3c6spwhk",
    freeLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/mpc7jhry" },
      { platform: "YouTube", url: "https://tinyurl.com/24bentmr" },
      { platform: "Coursera", url: "https://tinyurl.com/y6wbvz3d" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/yc6nrvsh" },
      { platform: "BBC", url: "https://tinyurl.com/yuff77cf" }
    ],
    paidLinks: []
  },
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
      { platform: "Codecademy", url: "https://tinyurl.com/3fymwmrh" }
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
  },
  "cpp": {
    introVideo: "https://tinyurl.com/yatmbyjk",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/mr3pvfcx" },
      { platform: "MIT", url: "https://tinyurl.com/33uh59aa" },
      { platform: "YouTube", url: "https://tinyurl.com/43t7cvv4" },
      { platform: "Udacity", url: "https://tinyurl.com/hh4edu8b" },
      { platform: "Cplusplus", url: "https://tinyurl.com/2s3w27m6" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/3kmww7d8" },
      { platform: "edX", url: "https://tinyurl.com/mr37skxv" },
      { platform: "Koenig", url: "https://tinyurl.com/3c7f26z2" }
    ]
  },
  "dsa": {
    introVideo: "https://tinyurl.com/3m9rcdjf",
    freeLinks: [
      { platform: "YouTube", url: "https://tinyurl.com/yykaz3ua" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/6nx4fxk9" },
      { platform: "Simplilearn", url: "https://tinyurl.com/mr2ut6pn" },
      { platform: "Scholarhat", url: "https://tinyurl.com/5xyd3r5j" },
      { platform: "YouTube", url: "https://tinyurl.com/n39td4rf" }
    ],
    paidLinks: [
      { platform: "Coursera", url: "https://tinyurl.com/bddztdfv" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/4r8577jn" },
      { platform: "Udemy", url: "https://tinyurl.com/3mrpppyz" }
    ]
  },
  "sql": {
    introVideo: "https://tinyurl.com/8tedm9uk",
    freeLinks: [
      { platform: "Udacity", url: "https://tinyurl.com/3reat7un" },
      { platform: "SQL Bolt", url: "https://tinyurl.com/3zecukbn" },
      { platform: "YouTube", url: "https://tinyurl.com/4xcavp6d" },
      { platform: "SQL Course", url: "https://tinyurl.com/5n7yv5bh" },
      { platform: "SQL Zoo", url: "https://tinyurl.com/bdz75cpb" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/4mmwhz8r" },
      { platform: "Coursera", url: "https://tinyurl.com/22tky9kk" },
      { platform: "Intellipaat", url: "https://tinyurl.com/4bpf6vsx" }
    ]
  },
  "html-css": {
    introVideo: "https://tinyurl.com/3uhan9fs",
    freeLinks: [
      { platform: "YouTube", url: "https://tinyurl.com/2suh26ny" },
      { platform: "Codecademy", url: "https://tinyurl.com/ybnpjp4j" },
      { platform: "Shiksha", url: "https://tinyurl.com/5fj3nnjm" },
      { platform: "Udacity", url: "https://tinyurl.com/54hr8hyp" },
      { platform: "YouTube", url: "https://tinyurl.com/3zf3e9xs" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/yrs7bvz2" },
      { platform: "Guvi", url: "https://tinyurl.com/5anm5nbb" },
      { platform: "TutorialsPoint", url: "https://tinyurl.com/3hkeeb8b" }
    ]
  },
  "react": {
    introVideo: "https://tinyurl.com/5apjrdmz",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/5e5abyrn" },
      { platform: "Scaler", url: "https://tinyurl.com/4vav5pdv" },
      { platform: "YouTube", url: "https://tinyurl.com/5c57uvn5" },
      { platform: "Great Learning", url: "https://tinyurl.com/ne5eb8ke" },
      { platform: "React Tutorial", url: "https://tinyurl.com/mrxhcku3" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/bdf4kxds" },
      { platform: "Coursera", url: "https://tinyurl.com/356949xr" },
      { platform: "Internshala", url: "https://tinyurl.com/3a7853pu" }
    ]
  },
  "angular": {
    introVideo: "https://tinyurl.com/msmt38us",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/u3b93bcc" },
      { platform: "Udemy", url: "https://tinyurl.com/2z4mjdub" },
      { platform: "YouTube", url: "https://tinyurl.com/2247ebje" },
      { platform: "Great Learning", url: "https://tinyurl.com/ye2ac4ex" },
      { platform: "Eduonix", url: "https://tinyurl.com/242a3abb" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/ms59952u" },
      { platform: "Coursera", url: "https://tinyurl.com/37xrarpf" },
      { platform: "Internshala", url: "https://tinyurl.com/n8zkmwew" }
    ]
  },
  "nodejs": {
    introVideo: "https://tinyurl.com/y26vmztr",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/yc383jcx" },
      { platform: "Scholarhat", url: "https://tinyurl.com/ynxmav5b" },
      { platform: "Simplilearn", url: "https://tinyurl.com/mr7ab6kr" },
      { platform: "YouTube", url: "https://tinyurl.com/4tfehvu9" },
      { platform: "YouTube", url: "https://tinyurl.com/47y378pu" }
    ],
    paidLinks: [
      { platform: "TutorialsPoint", url: "https://tinyurl.com/55wkn5wf" },
      { platform: "Guvi", url: "https://tinyurl.com/ybhrtwrr" },
      { platform: "Udemy", url: "https://tinyurl.com/3eyrwdh4" }
    ]
  },
  "expressjs": {
    introVideo: "https://tinyurl.com/2rcdtv4s",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/yptzbuc8" },
      { platform: "YouTube", url: "https://tinyurl.com/mpms75br" },
      { platform: "Great Learning", url: "https://tinyurl.com/mtejfme7" },
      { platform: "Express", url: "https://tinyurl.com/5y83fej4" },
      { platform: "YouTube", url: "https://tinyurl.com/4fx4jz6p" }
    ],
    paidLinks: [
      { platform: "Guvi", url: "https://tinyurl.com/y8kddhsh" },
      { platform: "Udemy", url: "https://tinyurl.com/4ttdeh7x" },
      { platform: "Koenig", url: "https://tinyurl.com/bp8cseec" }
    ]
  },
  "mongodb": {
    introVideo: "https://tinyurl.com/4u8fenut",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/yc526rtw" },
      { platform: "MongoDB", url: "https://tinyurl.com/26hmr23c" },
      { platform: "YouTube", url: "https://tinyurl.com/ya9ycv36" },
      { platform: "Great Learning", url: "https://tinyurl.com/dtj4scp3" },
      { platform: "Simplilearn", url: "https://tinyurl.com/4dc23wvd" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/2s3h9avm" },
      { platform: "Coursera", url: "https://tinyurl.com/yfa7ff43" },
      { platform: "Pluralsight", url: "https://tinyurl.com/33tm7nx3" }
    ]
  },
  "machine-learning": {
    introVideo: "https://tinyurl.com/yc5awheb",
    freeLinks: [
      { platform: "Google", url: "https://tinyurl.com/4xwxmzz5" },
      { platform: "Udacity", url: "https://tinyurl.com/6e8d5s7y" },
      { platform: "YouTube", url: "https://tinyurl.com/fazaeuyw" },
      { platform: "Great Learning", url: "https://tinyurl.com/2xz9nsm3" },
      { platform: "Simplilearn", url: "https://tinyurl.com/d956p2y4" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/35e6e627" },
      { platform: "Coursera", url: "https://tinyurl.com/yc37d6p6" },
      { platform: "Pluralsight", url: "https://tinyurl.com/2s3hyz5r" }
    ]
  },
  "generative-ai": {
    introVideo: "https://tinyurl.com/yc776xaz",
    freeLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/3ce68bpm" },
      { platform: "YouTube", url: "https://tinyurl.com/mufm58ra" },
      { platform: "Infosys Springboard", url: "https://tinyurl.com/mrmxr2n2" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/4392tdx2" },
      { platform: "LinkedIn", url: "https://tinyurl.com/37ttny7h" }
    ],
    paidLinks: [
      { platform: "Internshala", url: "https://tinyurl.com/mz259rp5" },
      { platform: "Great Learning", url: "https://tinyurl.com/2kdy8urk" },
      { platform: "Guvi", url: "https://tinyurl.com/hjj7j8jw" }
    ]
  },
  "ui-ux": {
    introVideo: "https://tinyurl.com/yckdurrw",
    freeLinks: [
      { platform: "Codecademy", url: "https://tinyurl.com/pmjvjun4" },
      { platform: "YouTube", url: "https://tinyurl.com/bdc32mrn" },
      { platform: "Infosys Springboard", url: "https://tinyurl.com/2bvuhnpk" },
      { platform: "Udacity", url: "https://tinyurl.com/yck7ewsj" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/5c3dcr6e" }
    ],
    paidLinks: [
      { platform: "LinkedIn", url: "https://tinyurl.com/4h5vt25r" },
      { platform: "edX", url: "https://tinyurl.com/yvhwbpmd" },
      { platform: "Udemy", url: "https://tinyurl.com/yp68cx8s" }
    ]
  },
  "power-bi": {
    introVideo: "https://tinyurl.com/3a2e42fz",
    freeLinks: [
      { platform: "YouTube", url: "https://tinyurl.com/2mpxrnxk" },
      { platform: "MindLuster", url: "https://tinyurl.com/3jhk2zky" },
      { platform: "Microsoft", url: "https://tinyurl.com/yc4rpvub" },
      { platform: "Infosys Springboard", url: "https://tinyurl.com/38jxche9" },
      { platform: "Great Learning", url: "https://tinyurl.com/4vz5hmzj" }
    ],
    paidLinks: [
      { platform: "LinkedIn", url: "https://tinyurl.com/43rnkpec" },
      { platform: "Internshala", url: "https://tinyurl.com/eks8mf3z" },
      { platform: "Udemy", url: "https://tinyurl.com/mryutb2f" }
    ]
  },
  "data-science": {
    introVideo: "https://tinyurl.com/3arh4brj",
    freeLinks: [
      { platform: "Great Learning", url: "https://tinyurl.com/4t6evhm4" },
      { platform: "IBM Skillbuild", url: "https://tinyurl.com/y4dsjmr3" },
      { platform: "MindLuster", url: "https://tinyurl.com/3mj9amfn" },
      { platform: "Scaler", url: "https://tinyurl.com/4yvpcz28" },
      { platform: "Simplilearn", url: "https://tinyurl.com/2rne29uh" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/2xdacfj5" },
      { platform: "Internshala", url: "https://tinyurl.com/2s46hntp" },
      { platform: "edX", url: "https://tinyurl.com/bdet5ruf" }
    ]
  },
  "deep-learning": {
    introVideo: "https://tinyurl.com/2p9s25de",
    freeLinks: [
      { platform: "Great Learning", url: "https://tinyurl.com/58s3uzpz" },
      { platform: "Infosys Springboard", url: "https://tinyurl.com/ycyhf9a2" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/4mj27mrd" },
      { platform: "Udemy", url: "https://tinyurl.com/nhzk2pvb" },
      { platform: "Scaler", url: "https://tinyurl.com/muffyd43" }
    ],
    paidLinks: [
      { platform: "Udemy", url: "https://tinyurl.com/j6fn3nuj" },
      { platform: "Fast.ai", url: "https://tinyurl.com/2nvhd75p" },
      { platform: "edX", url: "https://tinyurl.com/327c6xyc" }
    ]
  },
  "javascript": {
    introVideo: "https://tinyurl.com/yj5ephsv",
    freeLinks: [
      { platform: "Udacity", url: "https://tinyurl.com/2wjrrtm6" },
      { platform: "Simplilearn", url: "https://tinyurl.com/36u686ap" },
      { platform: "Great Learning", url: "https://tinyurl.com/3jy4abbx" },
      { platform: "YouTube", url: "https://tinyurl.com/2hhtdpw6" },
      { platform: "YouTube", url: "https://tinyurl.com/46kpm5cp" }
    ],
    paidLinks: [
      { platform: "Coursera", url: "https://tinyurl.com/ysacrzks" },
      { platform: "Udemy", url: "https://tinyurl.com/5awrmju6" },
      { platform: "GeeksforGeeks", url: "https://tinyurl.com/4tfsze9w" }
    ]
  }
};

export const courseQuizzes: Record<string, Question[]> = {
  "intro-programming": [
    {
      id: 1,
      question: "What is programming?",
      options: [
        "Creating software applications",
        "Fixing computers",
        "Designing websites",
        "Setting up networks"
      ],
      correctAnswer: "Creating software applications"
    },
    {
      id: 2,
      question: "Which of these is not a programming language?",
      options: ["Java", "Python", "HTML", "Microsoft Word"],
      correctAnswer: "Microsoft Word"
    },
    {
      id: 3,
      question: "What is an algorithm?",
      options: [
        "A programming language",
        "A step-by-step procedure to solve a problem",
        "A type of computer",
        "A mathematical equation"
      ],
      correctAnswer: "A step-by-step procedure to solve a problem"
    },
    {
      id: 4,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Central Processor Utility"
      ],
      correctAnswer: "Central Processing Unit"
    },
    {
      id: 5,
      question: "Which of these is a data type?",
      options: ["Integer", "Function", "Loop", "Module"],
      correctAnswer: "Integer"
    },
    {
      id: 6,
      question: "What is a variable in programming?",
      options: [
        "A fixed value",
        "A named storage location for data",
        "A type of function",
        "A mathematical operation"
      ],
      correctAnswer: "A named storage location for data"
    },
    {
      id: 7,
      question: "What is a loop used for?",
      options: [
        "To store data",
        "To repeat a block of code",
        "To define a function",
        "To connect to the internet"
      ],
      correctAnswer: "To repeat a block of code"
    },
    {
      id: 8,
      question: "What is debugging?",
      options: [
        "Creating a new program",
        "Finding and fixing errors in code",
        "Deleting a program",
        "Adding new features to a program"
      ],
      correctAnswer: "Finding and fixing errors in code"
    },
    {
      id: 9,
      question: "What is a function in programming?",
      options: [
        "A variable type",
        "A reusable block of code",
        "A type of data",
        "A programming language"
      ],
      correctAnswer: "A reusable block of code"
    },
    {
      id: 10,
      question: "What is an IDE?",
      options: [
        "Integrated Development Environment",
        "Internet Data Explorer",
        "Internal Design Element",
        "Intelligent Data Extraction"
      ],
      correctAnswer: "Integrated Development Environment"
    }
  ],
  "c": [
    {
      id: 1,
      question: "Which of the following is not a valid C data type?",
      options: ["int", "float", "string", "char"],
      correctAnswer: "string"
    },
    {
      id: 2,
      question: "What is the correct syntax for a main function in C?",
      options: [
        "main()",
        "int main()",
        "void main()",
        "Both B and C are correct"
      ],
      correctAnswer: "Both B and C are correct"
    },
    {
      id: 3,
      question: "Which operator is used for pointer declaration?",
      options: ["&", "*", "#", "@"],
      correctAnswer: "*"
    },
    {
      id: 4,
      question: "What is the size of int data type in C?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
      correctAnswer: "Depends on the compiler"
    },
    {
      id: 5,
      question: "Which header file is used for input/output functions?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      correctAnswer: "stdio.h"
    },
    {
      id: 6,
      question: "What is the correct way to declare a one-dimensional array?",
      options: [
        "array[10]int;",
        "int array(10);",
        "int[10] array;",
        "int array[10];"
      ],
      correctAnswer: "int array[10];"
    },
    {
      id: 7,
      question: "What does malloc() function do?",
      options: [
        "Deallocates memory",
        "Allocates memory dynamically",
        "Both A and B",
        "None of these"
      ],
      correctAnswer: "Allocates memory dynamically"
    },
    {
      id: 8,
      question: "Which operator is used to access structure members through a pointer?",
      options: [".", "->", "*", "&"],
      correctAnswer: "->"
    },
    {
      id: 9,
      question: "What is the purpose of break statement?",
      options: [
        "To terminate the program",
        "To exit from a loop or switch",
        "To skip an iteration",
        "To continue execution"
      ],
      correctAnswer: "To exit from a loop or switch"
    },
    {
      id: 10,
      question: "Which of the following is not a storage class specifier in C?",
      options: ["auto", "register", "static", "volatile"],
      correctAnswer: "volatile"
    }
  ],
  "python": [
    {
      id: 1,
      question: "What is Python?",
      options: [
        "A high-level programming language",
        "A snake species",
        "A compiler",
        "An operating system"
      ],
      correctAnswer: "A high-level programming language"
    },
    {
      id: 2,
      question: "Which of these is not a valid Python data type?",
      options: ["list", "tuple", "array", "dictionary"],
      correctAnswer: "array"
    },
    {
      id: 3,
      question: "What is the correct way to create a function in Python?",
      options: [
        "function myFunc():",
        "def myFunc():",
        "create myFunc():",
        "func myFunc():"
      ],
      correctAnswer: "def myFunc():"
    },
    {
      id: 4,
      question: "What is the output of print(2**3)?",
      options: ["6", "8", "9", "16"],
      correctAnswer: "8"
    },
    {
      id: 5,
      question: "Which method is used to add an element to a list?",
      options: ["add()", "append()", "extend()", "insert()"],
      correctAnswer: "append()"
    },
    {
      id: 6,
      question: "What is a correct syntax to output 'Hello World' in Python?",
      options: [
        "echo('Hello World')",
        "console.log('Hello World')",
        "print('Hello World')",
        "system.out.println('Hello World')"
      ],
      correctAnswer: "print('Hello World')"
    },
    {
      id: 7,
      question: "What is the correct file extension for Python files?",
      options: [".pt", ".pyt", ".py", ".python"],
      correctAnswer: ".py"
    },
    {
      id: 8,
      question: "How do you start writing a while loop in Python?",
      options: [
        "while (x > y) {",
        "while x > y:",
        "while (x > y):",
        "while x > y {"
      ],
      correctAnswer: "while x > y:"
    },
    {
      id: 9,
      question: "Which operator is used for floor division?",
      options: ["/", "//", "%", "**"],
      correctAnswer: "//"
    },
    {
      id: 10,
      question: "What is the correct way to create a comment in Python?",
      options: ["//comment", "/*comment*/", "#comment", "--comment"],
      correctAnswer: "#comment"
    }
  ],
  // Add quiz questions for other courses as needed
  "java": [
    {
      id: 1,
      question: "What is Java?",
      options: [
        "A programming language",
        "A coffee type",
        "An operating system",
        "A database"
      ],
      correctAnswer: "A programming language"
    },
    {
      id: 2,
      question: "Which of these keywords is used to define a class in Java?",
      options: ["class", "struct", "int", "void"],
      correctAnswer: "class"
    },
    {
      id: 3,
      question: "What is the entry point of a Java program?",
      options: [
        "start()",
        "run()",
        "main()",
        "public static void main(String[] args)"
      ],
      correctAnswer: "public static void main(String[] args)"
    },
    {
      id: 4,
      question: "Which of these is not a primitive data type in Java?",
      options: ["byte", "short", "long", "string"],
      correctAnswer: "string"
    },
    {
      id: 5,
      question: "What is the size of double data type in Java?",
      options: ["4 bytes", "8 bytes", "16 bytes", "Depends on JVM"],
      correctAnswer: "8 bytes"
    },
    {
      id: 6,
      question: "Which keyword is used to inherit a class?",
      options: ["extends", "implements", "inherits", "super"],
      correctAnswer: "extends"
    },
    {
      id: 7,
      question: "What is the default value of int variable?",
      options: ["0", "null", "undefined", "1"],
      correctAnswer: "0"
    },
    {
      id: 8,
      question: "Which exception is thrown when you divide a number by zero?",
      options: [
        "NullPointerException",
        "ArithmeticException",
        "NumberFormatException",
        "ArrayIndexOutOfBoundsException"
      ],
      correctAnswer: "ArithmeticException"
    },
    {
      id: 9,
      question: "What is the correct way to create an array in Java?",
      options: [
        "int array = new int[10]",
        "array int[10] = new int",
        "int[] array = new int[10]",
        "new array int[10]"
      ],
      correctAnswer: "int[] array = new int[10]"
    },
    {
      id: 10,
      question: "Which method is used to get the length of a String?",
      options: ["size()", "length()", "len()", "sizeof()"],
      correctAnswer: "length()"
    }
  ]
};

export const courseData: Record<string, CourseData> = {
  "intro-programming": {
    title: "Introduction to Programming",
    videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E",
    resources: [
      "Introduction to Programming PDF",
      "Programming Fundamentals",
      "Practice Exercises",
      "Certificate of Completion"
    ]
  },
  "c": {
    title: "C Programming Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/KJgsSFOSQv0",
    resources: [
      "Complete C Documentation",
      "C Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "python": {
    title: "Python Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    resources: [
      "Complete Python Documentation",
      "Python Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "java": {
    title: "Java Complete Course 2024",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
    resources: [
      "Complete Java Documentation",
      "Java Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "cpp": {
    title: "C++ Programming Complete Course",
    videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y",
    resources: [
      "Complete C++ Documentation",
      "C++ Practice Exercises",
      "Project Files",
      "Certificate of Completion"
    ]
  },
  "dsa": {
    title: "Data Structures & Algorithms",
    videoUrl: "https://www.youtube.com/embed/RBSGKlAvoiM",
    resources: [
      "DSA Documentation",
      "Algorithm Complexity Guide",
      "Practice Problems",
      "Certificate of Completion"
    ]
  },
  "sql": {
    title: "SQL Database Course",
    videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    resources: [
      "SQL Documentation",
      "Database Design Guide",
      "Practice Exercises",
      "Certificate of Completion"
    ]
  },
  "html-css": {
    title: "HTML and CSS Complete Course",
    videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc",
    resources: [
      "HTML & CSS Documentation",
      "Web Design Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "react": {
    title: "React.js Complete Course",
    videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
    resources: [
      "React Documentation",
      "Component Design Patterns",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "angular": {
    title: "Angular.js Complete Course",
    videoUrl: "https://www.youtube.com/embed/3dHNOWTI7H8",
    resources: [
      "Angular Documentation",
      "Component Architecture Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "nodejs": {
    title: "Node.js Complete Course",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
    resources: [
      "Node.js Documentation",
      "Server-side JavaScript Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "expressjs": {
    title: "Express.js Complete Course",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
    resources: [
      "Express.js Documentation",
      "API Development Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "mongodb": {
    title: "MongoDB Complete Course",
    videoUrl: "https://www.youtube.com/embed/c2M-rlkkT5o",
    resources: [
      "MongoDB Documentation",
      "NoSQL Database Design",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "machine-learning": {
    title: "Machine Learning Complete Course",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    resources: [
      "Machine Learning Documentation",
      "Algorithm Selection Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "generative-ai": {
    title: "Generative AI Complete Course",
    videoUrl: "https://www.youtube.com/embed/gGxZnLVxXC4",
    resources: [
      "Generative AI Documentation",
      "Model Training Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "ui-ux": {
    title: "UI/UX Design Complete Course",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    resources: [
      "UI/UX Design Documentation",
      "User Experience Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "power-bi": {
    title: "Power BI Complete Course",
    videoUrl: "https://www.youtube.com/embed/88bRHaGahAc",
    resources: [
      "Power BI Documentation",
      "Data Visualization Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "data-science": {
    title: "Data Science Complete Course",
    videoUrl: "https://www.youtube.com/embed/ua-CiDNNj30",
    resources: [
      "Data Science Documentation",
      "Statistical Analysis Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "deep-learning": {
    title: "Deep Learning Complete Course",
    videoUrl: "https://www.youtube.com/embed/DooxDIRAkPA",
    resources: [
      "Deep Learning Documentation",
      "Neural Network Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  },
  "javascript": {
    title: "JavaScript Complete Course",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M",
    resources: [
      "JavaScript Documentation",
      "Web Development Guide",
      "Practice Projects",
      "Certificate of Completion"
    ]
  }
};
