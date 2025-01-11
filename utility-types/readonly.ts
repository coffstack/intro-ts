// readonly (keyword) e ReadOnly (type utility)
interface Todo {
  title: string;
  description: string;
  done: boolean;
}

const task: Todo = {
  title: "Learn React",
  description: "learn the best web framework (library?)",
  done: false,
};

const taskCopy: Readonly<Todo> = task;
taskCopy.description = "aaa";

console.log(task);

Object.freeze(task);

task.title = "Learn TypeScript";
console.log(task);
