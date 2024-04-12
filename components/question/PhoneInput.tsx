import { useQuestions, useSharedStates } from "@/contexts";
import classNames from "classnames";
import {
  BtnContainer,
  Error,
  QuestionBoxPara,
  QuestionInputText,
  QuestionNumHeading,
} from "../index";
import Image from "next/image";
import styles from "./Question.module.css";
import { ChangeEventHandler } from "react";
import { SET_PHONE } from "@/reducers";

export function PhoneInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.phone ?? "";
  const { phone } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.email;
        return prevValue;
      });

    dispatch({ type: SET_PHONE, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={7}>
        Your Phone number*
      </QuestionNumHeading>

      <QuestionBoxPara>
        We won&apos;t call you unless it is absolutely required to process your
        application.
      </QuestionBoxPara>

      <QuestionInputText
        type="number"
        placeholder="+9100000000"
        value={phone}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === "" && (
        <BtnContainer
          className={classNames(styles["btn-container"], styles["ok"])}
          showPressEnter={true}
          onClick={handleOkClick}
        >
          Submit{" "}
          <Image
            src="/check-small.svg"
            alt="check small"
            width={34}
            height={34}
          />
        </BtnContainer>
      )}
    </>
  );
}
