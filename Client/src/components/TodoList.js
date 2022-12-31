import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// import { Formend } from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [fooddetails, setFood] = useState({
    description: "",
    date: "",
    address: "",
    state: "",
    city: "",
    mobile: "",
  });
  const Navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setFood({ ...fooddetails, [name]: value });
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (todos.length <= 0) {
      alert("Pls Enter atleast one food");
      return;
    }
    if (!fooddetails.address) {
      alert("Pls Enter Address !!!");
      return;
    }
    if (!fooddetails.city) {
      alert("Pls Enter City !!");
      return;
    }
    if (!fooddetails.date) {
      alert("Pls Enter Date!!!");
      return;
    }
    if (!fooddetails.description) {
      alert("Pls Enter Description about food !!!");
      return;
    }
    if (!fooddetails.mobile) {
      alert("Pls Enter mobile number to contact !!!");
      return;
    }
    if (!fooddetails.state) {
      alert("Pls enter State !!");
      return;
    }
    // console.log(fooddetails);
    // console.log(todos);
    // console.log({
    //   fooddetails: todos,
    //   description: fooddetails["description"],
    //   data: fooddetails["date"],
    //   address: fooddetails["address"],
    //   state: fooddetails["state"],
    //   city: fooddetails["city"],
    //   mobile: fooddetails["mobile"],
    // });

    const addfood = async (todos, fooddetails) => {
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      // console.log("todos", todos);
      // console.log("food details", fooddetails);
      const response = await fetch("/api/v1/donarfoods/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          userid: current.user._id,
          fooddetails: todos,
          description: fooddetails["description"],
          data: fooddetails["data"],
          address: fooddetails["address"],
          state: fooddetails["state"],
          city: fooddetails["city"],
          mobile: fooddetails["mobile"],
          createdAt: Date.now(),
        }),
      });
      const json = await response.json();

      if (json.status === "success") {
        alert("Successfully Added your Food");
        Navigate("/Donarpage/dashboard");
      } else {
        alert(json.status);
      }
      // console.log(json);
      // alert(json.status);
    };

    addfood(todos, fooddetails);
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    if (!todo.number || /^\s*$/.test(todo.number)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
    // alert(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const Loginnot = async () => {
    const currentuser = await fetch("/api/v1/users/me/");
    const current = await currentuser.json();
    // console.log(current);
    if (current.status === "failure" || current.user.role !== "Donar") {
      Navigate("/loginregister");
      alert(current.Error);
    }
  };
  Loginnot();

  return (
    <>
      <h1>List Your Food Details</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <form onSubmit={OnSubmit}>
        <div className="name">
          <label className="label">Description</label>
          <input
            className="input"
            type="textarea"
            name="description"
            onChange={(e) => changeHandler(e)}
            value={changeHandler.description}
          />
        </div>
        <div className="num">
          <label className="label">Pickup Date</label>
          <input
            type="text"
            className="input"
            name="date"
            onChange={(e) => changeHandler(e)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <div className="name">
          <label className="label">Pickup Address</label>
          <input
            className="input"
            name="address"
            type="textarea"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="name">
          <label className="label">Choose State</label>
          <select
            name="state"
            id="state"
            className="input"
            onChange={(e) => changeHandler(e)}
          >
            <option></option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="name">
          <label className="label">Choose City</label>
          <input
            className="input"
            type="text"
            name="city"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="name">
          <label className="label">Contact person mobile number</label>
          <input
            className="input"
            type="number"
            name="mobile"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="name">
          <label className="label">Pictures:</label>
          <input className="input" type="file" />
        </div>
        <div>
          <button className="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoList;
