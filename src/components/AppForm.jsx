import { useState } from "react";

export default function AppForm() {
  const [blog, setBlog] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  function handleNewTitle(event) {
    setNewTitle(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    const newBlog = [...blog, newTitle];
    setBlog(newBlog);

    setNewTitle("");
  }

  function deleteTitle(index) {
    const newBlog = [...blog];
    newBlog.splice(index, 1);
    setBlog(newBlog);
  }

  return (
    <div>
      <h2>Aggiungi un titolo</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={handleNewTitle}
          value={newTitle}
          id="title"
          placeholder="Title"
        />
        <button type="submit">Submit</button>
      </form>
      <p>List</p>
      <ul>
        {blog.map((title, index) => (
          <li key={index}>
            {title}
            <button onClick={() => deleteTitle(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
