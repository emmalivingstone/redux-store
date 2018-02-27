export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Eat Pizza", complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD_TODO": {
      // respond to todo that has been added
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };
    }
  }
  return state;
}
