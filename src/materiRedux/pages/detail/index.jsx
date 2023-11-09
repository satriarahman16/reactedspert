import { useParams } from "react-router-dom";

const DetailPage = () => {
    const {id} = useParams();
    console.log('id product', id)
    return (
        <div>
            Detail
        </div>
    )
}

export default DetailPage;