import { Dispatch, SetStateAction } from "react";

export type QuestionProps = {
  inView: boolean;
  inViewSlide: "up" | "down" | "";
  outView: boolean;
  outViewSlide: "up" | "down" | "";
  isRendered?: boolean;
  type:
    | "intro"
    | "firstName"
    | "lastName"
    | "industry"
    | "role"
    | "goal"
    | "email"
    | "phone"
    | "thankyou";
};

export type IndustriesProps = {
  showIndustriesList: boolean;
  setShowIndustriesList: Dispatch<SetStateAction<boolean>>;
};
