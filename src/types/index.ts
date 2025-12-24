
export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Work = {
  id: number;
  title: string;
  subtitle?: string;
  thumbnailUrl: string;
  description?: string;
  previewUrl?: string;
  publishedAt: string;
  attributes: {
    name: string;
    value: string | number;
  }[];
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  content: string;
  description?: string;
  tags?: string[];
};

export type Review = {
  author: {
    name: string;
    imageUrl: string;
    designation: string;
    company: string;
  };
  comment: string;
};

export type Skill = {
  name: string;
  description: string;
  progress: number;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface GithubContributionData {
  publicRepos: number;
  followers: number;
  starsReceived: number;
  totalCommits: number;
  totalPullRequests: number;
  totalIssues: number;
  contributedTo: number;
  lastPushedAt: number
}