import { getTodosFromLocalStorage } from "./todos/storage.js";
import { renderTodos, initTodoHandlers } from "./todos/dom.js";

const todos = getTodosFromLocalStorage() || [];

renderTodos(todos);
initTodoHandlers(todos);
