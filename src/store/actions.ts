// set up an action constant to store the action strings

// you can make the string whatever you want, so a good naming convention is the state slice then the action description

// action constants
export const ADD_TODO = "[Todo] Add Todo";
export const REMOVE_TODO = "[Todo] Remove Todo";

// ation creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}

console.log(new AddTodo({}));
