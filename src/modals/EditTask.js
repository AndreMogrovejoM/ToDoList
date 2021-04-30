import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [charLeftDesc, setCharLeftDesc] = useState(140);
    const [charLeftTittle, setCharLeftTittle] = useState(25);

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        const charCount = value.length;
        if ( name === "taskName"){
            if ( charLeftTittle > 0){
                setTaskName(value);
                setCharLeftTittle(25 - charCount);
            }
        } else {
            if ( charLeftDesc > 0){
                setDescription(value)
                setCharLeftDesc(140 - charCount);
            }
        }       
        
    };

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[taskObj])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                        <p style={{color: "gray", padding: "5px", fontSize: "smaller"}}>Character Left: {charLeftTittle}</p>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                        <p style={{color: "gray", padding: "5px", fontSize: "smaller"}}>Character Left: {charLeftDesc}</p>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;