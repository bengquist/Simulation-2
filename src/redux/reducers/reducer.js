const initialState = {
  name: "",
  address: "",
  city: "",
  stateid: "",
  zip: 0,
  image: "",
  monthly_mortgage: 0,
  desired_rent: 0
};

const USER_INPUT = "USER_INPUT";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT:
      return state;
    default:
      return state;
  }
}

export function inputHandler(state) {
  return {
    type: USER_INPUT,
    payload: state
  };
}
