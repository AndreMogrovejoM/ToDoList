import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';


export default function CreateTask({modal, toggle, save}) {

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

    const handleSave = () => {
        
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj);
    }

    return (
        <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Task Name</Label>
                        <Input placeholder="Task..."
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="taskName"
                        value={taskName}/>
                        <p style={{color: "gray", padding: "5px", fontSize: "smaller"}}>Character Left: {charLeftTittle}</p>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <textarea 
                        placeholder="Description..."
                        rows="5"
                        className="form-control"
                        name="description"
                        onChange={handleChange}
                        value={description}/>
                        <p style={{color: "gray", padding: "5px", fontSize: "smaller"}}>Character Left: {charLeftDesc}</p>
                        
                    </FormGroup>

                </Form>
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}
