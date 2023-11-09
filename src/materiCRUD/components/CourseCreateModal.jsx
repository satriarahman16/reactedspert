import {Form, Modal, Button} from "react-bootstrap";
import {  useState } from "react";

// show dan handleClose dalam parameter di bawah ini adalah salah satu pengimplementasian props
const CourseCreateModal = ({show, handleClose, handleSubmit, data}) => {
    // buat state untuk menyimpan name dan description
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    // untuk memastikan datanya berbeda maka menggunakan time stamp
    const timeStamp = Math.floor(Date.now()/1000)
    const submitData = () => {
      const payload = {
        id: Math.floor(Date.now()/1000),
       name,
       description
    }
    handleSubmit(payload);
  }

  // useEffect(()=>{
  //   setDescription(data.description);
  //   setName(data.name);
  // })
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="course name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CourseCreateModal;