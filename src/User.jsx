import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams();
    return ( 
        <div className=" bg-gray-700 text-3xl text-white flex justify-center p-5">
        User:{id}
        </div>
     );
}
 
export default User;