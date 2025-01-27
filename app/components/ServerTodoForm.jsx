// server action haro dar dakhele server component ha ejra mikonim
function ServerTodoForm() {
  const addTodo = async (formData) => {
    "use server";
    const title = formData.get("title");
    const description = formData.get("description");
         console.log(title);
         console.log(description);
  };
  return (
    <div>
      <h3>Todo Form</h3>
      <form action={addTodo}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" name="description" type="text" />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default ServerTodoForm;
