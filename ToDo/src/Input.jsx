import React, { useState } from "react";

const Input = () => {
  const [newList, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addItem = () => {
    if (inputValue !== "") {
      const updatedList = [...newList, { text: inputValue, done: false }];
      setList(updatedList);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const updatedList = [...newList];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const toggleDone = (index) => {
    const updatedList = [...newList];
    updatedList[index].done = !updatedList[index].done;
    setList(updatedList);
  };

  const editItem = (index) => {
    setEditIndex(index);
    setEditValue(newList[index].text);
  };

  const saveEdit = (index) => {
    const updatedList = [...newList];
    updatedList[index].text = editValue;
    setList(updatedList);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <>
      <div className="max-w-25 w-full my-5 flex justify-between">
        <input
          type="text"
          placeholder="List Name"
          className="px-3 inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-2 bg-orange-400 hover:bg-orange-500"
          onClick={addItem}
        >
          Add to list
        </button>
      </div>
      {newList.map((item, index) => (
        <div
          key={index}
          className={`list max-w-25 p-2 my-1 w-full flex justify-between items-center border  ${item.done ? " bg-emerald-300 " : "border-gray-500 "}`}
        >
          {editIndex === index ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className={`bg-transparent border-0 focus:outline-none `}
            />
          ) : (
            <span className={`${item.done ? "line-through" : ""}`}>{item.text}</span>
          )}
          <section className="flex justify-center align-middle items-center">
            {editIndex === index ? (
              <button
                className="donebutton p-2 mx-1 bg-green-500 hover:bg-green-600"
                onClick={() => saveEdit(index)}
              >
                Save
              </button>
            ) : (
              <button
                className="donebutton p-2 mx-1 bg-zinc-500 hover:bg-zinc-600"
                onClick={() => editItem(index)}
              >
                Edit
              </button>
            )}

            <button
              className="donebutton p-2 mx-1 bg-indigo-500 hover:bg-indigo-600"
              onClick={() => toggleDone(index)}
            >
              {item.done ? "Undo" : "Done"}
            </button>

            <button
              className="delbutton p-2 bg-red-500 hover:bg-red-600"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default Input;
