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
