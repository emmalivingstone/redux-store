import { renderTodos } from "./utils";
import * as fromStore from "./store";

const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;

// creating a new central store for the app.
const store = new fromStore.Store(
  {}
  // {
  // initial State - Wouldn't usually provide this in a realworld app
  // unless you were using Server Side rendering.
  //   todos: [{ label: "Eat Pizza", complete: false }]
  // }
);

button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch({
      type: "ADD_TODO",
      payload
    });

    input.value = "";
  },
  false
);

todoList.addEventListener("click", function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});
