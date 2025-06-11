import { ReactNode } from "react";

export interface BaseCardProps {
  image: string;
  alt: string;
  growIn?: boolean;
  height?: number | string;
  children: ReactNode;
}
