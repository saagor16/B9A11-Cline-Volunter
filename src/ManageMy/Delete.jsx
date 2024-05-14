/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const Delete = ({ spot, index }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/volunteer/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
   
        
          <td>{index + 1}</td>
          <td>{spot.title}</td>
          <td>{spot.spotName}</td>
          <td>{spot.date}</td>
          <td className="text-xl">
            <Link to={`/updateVolunteer/${spot._id}`}>
              <button className="btn">
                <FaEdit className="text-xl"></FaEdit>
              </button>
            </Link>
          </td>
          <td>
            <button onClick={() => handleDelete(spot._id)} className="btn">
              <MdDeleteSweep className="text-xl text-red-400"></MdDeleteSweep>
            </button>
          </td>
       
   
    </div>
  );
};

export default Delete;
