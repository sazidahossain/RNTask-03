import * as actionTypes from "../actions/types";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let item = state.list.find(x => {
        if (
          x.drink === action.payload.drink &&
          x.option === action.payload.option
        )
          return x;
      });
      let newList = state.list;
      if (item) {
        item.quantity += 1;
      } else {
        newList = state.list.concat(action.payload);
      }

      return {
        ...state,
        list: newList
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(item => item !== action.payload)
      };
    case actionTypes.CHECKOUT:
      alert("Thank you!");
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
}
