import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button"
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tortor vel magna vestibulum malesuada. 
                Integer scelerisque, nunc eget porta ullamcorper, ante magna feugiat velit, eu porttitor sapien velit eget ipsum
                </p>
            </div>
        </>
    );
}

export default TaskDetails