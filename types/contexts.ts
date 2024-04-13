import { QuestionsActionsType, QuestionsStateType } from "@/reducers";
import { Dispatch, SetStateAction } from "react";
import { ObjectType } from "./index";

/**
 * questions-context
 */

export type QuestionsContextType = {
  state: QuestionsStateType;
  dispatch: Dispatch<QuestionsActionsType>;
  percent: number;
};

/**
 * shared-states-context
 */

export type QuestionNumType = { prev: null | number; now: number };

export type SharedStatesContextType = {
  questionNum: QuestionNumType;
  setQuestionNum: Dispatch<SetStateAction<QuestionNumType>>;
  errorMsg: ObjectType;
  setErrorMsg: Dispatch<SetStateAction<ObjectType>>;
  showIndustriesList: boolean;
  setShowIndustriesList: Dispatch<SetStateAction<boolean>>;
  handleQuestionNumUpdate: () => void;
  handleOkClick: () => void;
};
