const GET_ELEMENT_ID = "GET_ELEMENT_ID";
const TOGGLE_POPAP = "OPEN_POPAP";
const GET_INPUT_TEXT = "GET_INPUT_TEXT";
const TOTAL_COUNT = "TOTAL_COUNT";
const INVESTED = "INVESTED";

let initialState = {
  loans: [
    {
      id: "1",
      title: "Voluptate et sed tempora qui quisquam.",
      tranche: "A",
      available: "11,959",
      annualised_return: "8.60",
      term_remaining: "864000",
      ltv: "48.80",
      amount: "85,754",
      invested: false,
    },
    {
      id: "5",
      title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
      tranche: "B",
      available: "31,405",
      annualised_return: "7.10",
      term_remaining: "1620000",
      ltv: "48.80",
      amount: "85,754",
      invested: false,
    },
    {
      id: "12",
      title:
        "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      tranche: "C",
      available: "12,359",
      annualised_return: "4.80",
      term_remaining: "879000",
      ltv: "48.80",
      amount: "85,754",
      invested: false,
    },
  ],
  statePopap: false,
  currentLoan: {},
  textValue: "",
  totalAmountInvestment: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ELEMENT_ID: {
      let loan = state.loans.filter((el) => (el.id == action.id ? el : ""));
      return {
        ...state,
        currentLoan: loan[0],
      };
    }
    case TOGGLE_POPAP: {
      return {
        ...state,
        statePopap: action.toggle,
      };
    }
    case GET_INPUT_TEXT: {
      return {
        ...state,
        textValue: action.text,
      };
    }
    case TOTAL_COUNT: {
      return {
        ...state,
        totalAmountInvestment:
          state.totalAmountInvestment + Number(state.textValue),
      };
    }
    case INVESTED: {
      return {
        ...state,
        loans: state.loans.map((el) => {
          if (el.id == action.id) {
            let strAva = String(el.available).split(",").join("");
            let strAmo = String(el.amount).split(",").join("");
            let difference = +strAva - +state.textValue;
            let sum = +strAmo + +state.textValue;
            return {
              ...el,
              available: difference,
              amount: sum,
              invested: true,
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };
    }
    default:
      return state;
  }
};

export const getTogglePopap = (toggle) => ({ type: TOGGLE_POPAP, toggle });
export const getElementId = (id) => ({ type: GET_ELEMENT_ID, id });
export const getInputText = (text) => ({ type: GET_INPUT_TEXT, text });
export const totalCount = () => ({ type: TOTAL_COUNT });
export const addInvested = (id) => ({ type: INVESTED, id });

export default Reducer;
