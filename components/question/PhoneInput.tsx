/* eslint-disable @next/next/no-img-element */
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
  const {
    errorMsg: error,
    setErrorMsg,
    handleOkClick,
    handleQuestionNumUpdate,
  } = useSharedStates();
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

  const handleSubmit = () => {
    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      industry: state.industry,
      role: state.role,
      goals: state.goals,
      email: state.email,
      phone: `+91${state.phone}`,
    };

    const url = "https://eo3oi83n1j77wgp.m.pipedream.net/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Something went wrong");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
    handleQuestionNumUpdate();
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
        placeholder="Enter your phone number here"
        value={phone}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === "" && (
        <BtnContainer
          className={classNames(styles["btn-container"], styles["ok"])}
          showPressEnter={true}
          onClick={() => {
            handleSubmit();
            handleOkClick();
          }}
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
