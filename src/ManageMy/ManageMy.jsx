import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";

const ManageMy = () => {
  const mySpot = useLoaderData();

  const handleDelete = (spot) => {
    const _id = spot._id;
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
        fetch(`http://localhost:9000/volunteer/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok.");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your added spot has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting volunteer post:", error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the volunteer spot.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="mt-28">
      <div className="container mx-auto my-10">
        <h1 className="text-5xl my-10 text-center">My Need Volunteer Posts</h1>
        <div className="overflow-x-auto">
          <table className="table border">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Spot Name</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {mySpot.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No volunteer posts found.
                  </td>
                </tr>
              ) : (
                mySpot.map((spot, index) => (
                  <tr key={spot._id}>
                    <td>{index + 1}</td>
                    <td>{spot.name}</td>
                    <td>{spot.spotName}</td>
                    <td>{spot.cost}</td>
                    <td className="text-xl">
                      <Link to={`/volunteer/${spot._id}`}>
                        <button className="btn">
                          <FaEdit className="text-xl"></FaEdit>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(spot)}
                        className="btn"
                      >
                        <MdDeleteSweep className="text-xl text-red-400"></MdDeleteSweep>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMy;
