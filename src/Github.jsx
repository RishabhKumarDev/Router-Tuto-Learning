import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/RishabhKumarDev")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className=" bg-gray-600 text-3xl text-white m-4 p-4 flex-col justify-center  ">
        <span className=" bg-yellow-800 text-2xl p-4 ml-3 mr-5 mb-5">
          Name: {data.name}
        </span>
        Github Follwers: {100000}
        <img
          className=" mt-5 border-black border-2 rounded-full size-52 self-end"
          src={data.avatar_url}
          alt=""
        />
      </div>
    </>
  );
};

export default Github;

export const githybInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RishabhKumarDev");
  return response.json();
};
