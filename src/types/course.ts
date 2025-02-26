
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface CourseResource {
  introVideo: string;
  freeLinks: Array<{
    platform: string;
    url: string;
  }>;
  paidLinks: Array<{
    platform: string;
    url: string;
  }>;
}

export interface CourseData {
  title: string;
  videoUrl: string;
  resources: string[];
}
