import {
  QuestionsActionsType,
  QuestionsStateType,
  REMOVE_GOAL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_INDUSTRY,
  SET_ROLE,
  RESET_STATE,
  RESET_PERCENT,
  SET_GOALS,
  SET_EMAIL,
  SET_PHONE,
  questionsInitialState,
} from "../index";

export function questionsReducerFunc(
  state: QuestionsStateType,
  action: QuestionsActionsType
) {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };

    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };

    case SET_INDUSTRY:
      return { ...state, industry: action.payload };

    case SET_ROLE:
      return { ...state, role: action.payload };

    case SET_GOALS:
      return { ...state, goals: [...state.goals, action.payload] };

    case REMOVE_GOAL:
      return {
        ...state,
        goals: state.goals.filter((goal) => goal !== action.payload),
      };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_PHONE:
      return { ...state, phone: action.payload };

    case RESET_STATE:
      return questionsInitialState;

    case RESET_PERCENT:
      return { ...state, percent: 0 };

    default:
      return state;
  }
}
