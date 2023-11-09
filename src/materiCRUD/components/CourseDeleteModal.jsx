import {Modal, Button} from "react-bootstrap";


// show dan handleClose dalam parameter di bawah ini adalah salah satu pengimplementasian props
const CourseDeleteModal = ({show, handleClose, onAgree}) => {



    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onAgree}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CourseDeleteModal;