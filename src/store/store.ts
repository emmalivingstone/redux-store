export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  // setting default values for reducers and initialState
  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  // console.log(store.value) to get representation of state
  // this allows you to access values without accidently mutating state.
  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload]
    };

    console.log(this.state);
  }
}
