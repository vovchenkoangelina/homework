import { getTodosFromLocalStorage } from "./js/todos/storage.js";
import { renderTodos, initTodoHandlers } from "./js/todos/dom.js";

const todos = getTodosFromLocalStorage() || [];

renderTodos(todos);
initTodoHandlers(todos);
