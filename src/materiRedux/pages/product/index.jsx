import { useEffect } from "react"
import { httpService } from "../../utils/service"
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/product/action";
import { Card, Container } from "react-bootstrap";
import Loader from "../../components/Loader";


const ProductPage = () => {
    const {entities, loading} =  useSelector((state) => state.product)
    console.log('isloading', loading)
    const dispatch = useDispatch()
    const fetchProduct = async () => {
       dispatch(getAll())
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return ( 
        <Container style ={{display:'flex', gap:'12px', flexWrap:'wrap', marginTop:'24px'}}>
            {loading ? <Loader/> : entities.map((item) => {
                return (
                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <p>$ {item.price}</p> 
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                    </Card>       
                )
            })}
            
        </Container>
    )
}

export default ProductPage;