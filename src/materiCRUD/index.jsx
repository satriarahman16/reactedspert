import { useState } from "react";
import { useEffect} from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import CourseCreateModal from "./components/CourseCreateModal";
import CourseEditModal from "./components/CourseEditModal";
import CourseDeleteModal from "./components/CourseDeleteModal";
import courseService from "./utils/service";

const MateriCrud = () => {
    // buat state untuk memunculkan atau menyembunyikan
    // useState adalah hooks Reactnya dia menerima default value di sini misalnya menggunakan false karena dia tertutup dulu modalnya
    // urutan pertama adalah value dari statenya, dan urutan kedua adalah fungsi untuk merubah nilai statenya
    const [showCreateModal, setShowCreateModal] = useState(false);

    const [courses, setCourses] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState({});
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    // bikin fungsi satu lagi untuk togglenya seperti saklar
    const toggleCreateModal = () => {
        setShowCreateModal(!showCreateModal);
    };

    const openEditModal = (courseData) => {
      setSelectedCourse(courseData);
      setShowEditModal(true)
    }
    const closeEditModal = () => {
      // balikan ke data semula
      setSelectedCourse({});
      setShowEditModal(false)
    }
    const openDeleteModal = (courseData) => {
      setSelectedCourse(courseData);
      setShowDeleteModal(true)
    }
    const closeDeleteModal = () => {
      // balikan ke data semula
      setSelectedCourse({});
      setShowDeleteModal(false)
    }

    const handleSubmit = (payload) => {
      courseService.addCourse(payload)
      toggleCreateModal() 
      fetchCourses()    
    };

// memangggil Service , dan perlu id yang terpilih
    const handleDelete = () => {
      const {id} = selectedCourse;
      courseService.deleteCourse(id)
      closeDeleteModal() 
      fetchCourses()    
    };



    const handleUpdate = (payload) => {
      // destructuring variable untuk mengambil data dari payload, semua key yg tidak diambil menjadi othersdata
      const {id, ...othersData} = payload
      courseService.updateCourse(id, othersData);
      closeEditModal()
      // fetch ulang untuk mendapat data terkini
      fetchCourses()
    }

    const fetchCourses = ()=> {
      const result = courseService.getCourses();
      setCourses(result.data)
    }

// fungsi yang akan dieksekusi ketika dependensinya diubah, akan memanggil terus fungsinya ketika ada perubahan data di dependensina
    useEffect(()=>{
      fetchCourses()
    }, [])

   
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Row>
            {/* md adalah untuk tablet ke atas, sm, xs untuk mobile, dan large lg untuk desktop ke atas  */}
         {/* 8 bagian, lalu offset --> ngeskip 2 kolom di depan artinya nnti ada di tengah   */}
          <Col md={{ span: 8, offset: 2 }}>
            <Button onClick={toggleCreateModal}>
                Add Course
            </Button>
            <Table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item, index)=>{
                  return(
                    <tr key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      {/* agar tidak langsung ketrigger fungsinya maka diberikan ()=> onclick menerima parameter berupa fungsi bukan fungsi execute lebih ke deklarasi fungsi */}
                      <td>
                      <Button onClick={() => openEditModal(item)} variant="warning">Update</Button>
                      {' '}
                      <Button onClick={() => openDeleteModal(item)} variant="danger">Delete</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <CourseCreateModal 
      show={showCreateModal} 
      handleClose={toggleCreateModal} 
      handleSubmit={handleSubmit}
      />

      <CourseEditModal 
      data={selectedCourse}
      handleClose={closeEditModal} 
      handleSubmit={handleUpdate}
      show={showEditModal} 
      />

      <CourseDeleteModal
        handleClose={closeDeleteModal}
        onAgree={handleDelete}
        show={showDeleteModal}
      />
    </div>
  );
};

export default MateriCrud;

