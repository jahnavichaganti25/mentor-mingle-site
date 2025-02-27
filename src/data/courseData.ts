
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
  }
};
