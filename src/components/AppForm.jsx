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
      <h2 className="text-4xl mb-4">Aggiungi un titolo</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          className="border-2 border-gray-400 p-2 mb-2"
          type="text"
          onChange={handleNewTitle}
          value={newTitle}
          id="title"
          placeholder="Title"
        />
        <button className="border-2 border-gray-400 p-2 mb-2" type="submit">
          Submit
        </button>
      </form>
      <h3 className="text-2xl">List</h3>
      <ul className="p-4 m-auto">
        {blog.map((title, index) => (
          <li className="grid grid-cols-2 gap-2" key={index}>
            <div className="justify-self-end text-lg font-bold">{title}</div>
            <button
              onClick={() => deleteTitle(index)}
              className="justify-self-start"
            >
              <img
                className="w-6 h-6"
                src="src/assets/trash.png"
                alt="Delete"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
