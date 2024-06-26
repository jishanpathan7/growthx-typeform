import { ReactNode } from "react";
import styles from "./QuestionBoxPara.module.css";

type QuestionBoxParaProps = {
  children: ReactNode;
};

export function QuestionBoxPara({ children }: QuestionBoxParaProps) {
  return <p className={styles["question-box__para"]}>{children}</p>;
}
