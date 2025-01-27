import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

const TodoList = async () => {
  await connectDB();
  const todos = await Todo.find();
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo._id}>
          {todo.title} - {todo.description}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
