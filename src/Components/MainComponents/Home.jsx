import "../../Styles/Home.css";
import Input from "../common/Form";
import TaskContainer from "./Tasks";
import Button from "../common/Button";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";


toast.configure();
const Home = () => {

  //#region States
  
  const [TaskName, setTaskName] = useState("");
  const [DateTime, setDateTime] = useState(new Date());

  const [tasks, setTasks] = useState([
    {
      id: 1,
      TaskName: "Duis bibendum, felis sed interdum venenatis.",
      DateTime: "12/01/2022, 01:20:00 AM",
      isCompleted: false
    }, 
    {
      id: 2,
      TaskName: "Nulla ut erat id mauris vulputate elementum.",
      DateTime: "25/12/2021, 07:20:00 PM",
      isCompleted: false
    }, 
    {
      id: 3,
      TaskName: "Duis bibendum. Morbi non quam nec dui luctus rutrum.",
      DateTime: "26/04/2022, 12:24:00 AM",
      isCompleted: false
    }, 
    {
      id: 4,
      TaskName: "Cras mi pede, malesuada in, imperdiet et.",
      DateTime: "27/12/2021, 12:34:00 PM",
      isCompleted: false
    }, {
      id: 5,
      TaskName: "Fusce posuere felis sed lacus.",
      DateTime: "30/12/2021, 12:20:00 AM",
      isCompleted: false
    }
  ])

  //#endregion

  //#region handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length===0? 1 :tasks[tasks.length-1].id+1,
      TaskName: TaskName,
      DateTime: DateTime.toLocaleString(),
      isCompleted: false
    }
    
    setTasks([...tasks, newTask]);

    toast(
      "Task added successfully!",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        theme: "colored",
        }
    );
  }

  const handleTaskOnChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleDateTimeOnChange = (event) => {
    setDateTime(event.target.value);
  }

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast(
      "Task deleted successfully!",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "error",
        theme: "colored",
        }
    );
  }

  const handleTaskEdit = (id) => {
    
    const editTask = tasks.find(task => task.id === id);
    
    setTaskName(editTask.TaskName);
    setDateTime(new Date(editTask.DateTime));
    console.log(new Date(editTask.DateTime));
  }

  //#endregion

    return (
      <React.Fragment>
      <div className="main-container">
        <form onSubmit={handleSubmit} className="add-task-container">
          <Input OnChange={handleTaskOnChange} value_text={TaskName} name={"taskInput"} inputtype={"text"} placeholder={"Enter task"} />
          <DateTimePickerComponent 
            value={DateTime}
            format={"dd-MM-yyyy hh:mm a"}
            step={5}
            onChange={ handleDateTimeOnChange }/>
          <Button type={"submit"} btntype={"success add-task"} text={<AiOutlinePlus />}/>
        </form>
        <div className="tasklist-container">
          <TaskContainer handleEdit={handleTaskEdit} handleDelete={handleTaskDelete} tasklist={tasks}/>
        </div>
      </div>
      </React.Fragment>
    );
}
 
export default Home;