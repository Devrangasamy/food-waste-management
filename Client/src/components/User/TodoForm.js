import React, { useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [input1, setInput1] = useState(props.edit ? props.edit.number : "");

  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      number: input1,
    });
    setInput("");
    setInput1("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <input
            placeholder="Update your person"
            value={input1}
            onChange={handleChange1}
            name="number"
            type={"number"}
            ref={inputRef1}
            className="todo-input edit"
          />

          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <div>
            <input
              placeholder="Add Food"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />
            <input
              placeholder="Add No of Person"
              value={input1}
              type={"number"}
              onChange={handleChange1}
              name="number"
              className="todo-input"
              ref={inputRef1}
            />
          </div>
          <button onClick={handleSubmit} className="todo-button">
            Add More
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
