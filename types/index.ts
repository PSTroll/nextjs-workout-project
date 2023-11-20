import { ReactNode } from "react";

export interface PlanElementProps {
  planName: string;
  className: string;
}

export interface SemiTransparentCardProps {
  content: string | ReactNode;
  link: string;
  linkContent: string;
  imageSrc: string;
  title: string;
}

export interface HeaderProps {
  title: string;
}

export interface CalculatorCardProps {
  title: string;
  content: string;
}

export interface PlanCardProps {
  level: string;
}

export interface Post {
  content: string;
  slug: string;
  data: {
    title: string;
    snippet: string;
    date: Date;
    imagesrc: string;
  };
}

export type formType = {
  name: string;
  lastname: string;
  age: string;
  email: string;
  activity: string;
};

export type orderType = {
  name: string;
  lastname: string;
  age: string;
  email: string;
  activity: string;
  level: string;
};
