import { useParams } from "react-router-dom";

const PageNotFound = () =>{
    const params = useParams()
    return(
        <h1 style={{color:'red', textAlign:'center' }}>{params.pageName} page Not Found</h1>
    )
}

export default PageNotFound;