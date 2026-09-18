export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
}

export const setTodosFromLocaleStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
}