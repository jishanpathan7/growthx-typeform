import { useQuestions, useSharedStates } from "@/contexts";
import classNames from "classnames";
import { BtnContainer, QuestionBoxHeading } from "../index";
import styles from "./Question.module.css";

export function Thankyou() {
  const { dispatch } = useQuestions();
  const { setQuestionNum } = useSharedStates();

  const handleCreateTypeform = () => {
    // Reset state
    dispatch({
      type: "RESET_STATE",
      payload: "",
    });
    // Dispatch an action to reset the percent to 0
    dispatch({
      type: "RESET_PERCENT",
      payload: 0,
    });
    setQuestionNum({ prev: null, now: 0 });
  };

  return (
    <>
      <QuestionBoxHeading>
        Thanks for completing this typeform <br />
        <br />
        <strong>Now Create your own</strong> -- its free, easy, & beautiful
      </QuestionBoxHeading>

      <BtnContainer
        className={classNames(styles["btn-container"], styles["ok"])}
        showPressEnter={true}
        onClick={handleCreateTypeform}
      >
        Create a typeform{" "}
      </BtnContainer>
    </>
  );
}
