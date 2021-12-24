import React from "react";
import "../../Styles/Tasks.css";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import IconButton from "../common/IconButton";
import {BsCircle, BsCheck2Circle} from "react-icons/bs";

const TaskContainer = ({ handleEdit, handleDelete, tasklist }) => {
    return(
        <React.Fragment>
            <div className="task-container">
                <h4 className="upcoming-tasks">UPCOMING TASKS</h4>
                <ul className="task-list">
                    {tasklist.map(task => 
                        <li className="task-record" key={task.id}>
                            <span className="task-icon"><BsCircle/></span>
                            <div className="task-item">
                                <span className="task-text">{task.TaskName}</span>
                                <div className="date-buttons-wrapper">
                                    <div className="date-time">
                                        <p className="task-date">{task.DateTime}</p>
                                    </div>
                                    <div className="edit-delete">
                                        <IconButton taskId={task.id} OnClick={handleEdit} btntype={"warning edit-icon"} text={<FiEdit />}/>
                                        <IconButton taskId={task.id} OnClick={handleDelete} btntype={"danger delete-icon"} text={<MdDelete />}/>
                                        <IconButton btntype={"success completed-icon"} text={<BsCheck2Circle />}/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default TaskContainer;