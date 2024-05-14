import { useLoaderData } from "react-router-dom";
import Delete from "./Delete";

const ManageMy = () => {
  const mySpot = useLoaderData();

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
                <th>category</th>
                <th>location</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {mySpot.map((spot, index) => (
                  <Delete key={spot._id} spot={spot} index={index} />
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMy;
