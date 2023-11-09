import { useEffect } from "react"
import { httpService } from "../../utils/service"

const ProductPage = () => {
    const fetchProduct = async () => {
        const response = await httpService.get('/product')

        console.log('response', response.data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return ( 
        <div>
            Product
        </div>
    )
}

export default ProductPage;