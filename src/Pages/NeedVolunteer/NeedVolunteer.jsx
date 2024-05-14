import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NeedVolunteer = () => {
  const { user } = useContext(AuthContext);
  const dbData = useLoaderData();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (user && dbData) {
      setLoading(false);
    }
  }, [user, dbData]);
  if (loading) {
    return <div></div>;
  }
  const myVolunteer = dbData.filter((art) => art.userEmail === user.email);

  return (
    
    <div>
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-2xl font-bold text-center mb-6">
          <span className="text-green-700"></span> Volunteer Need Post Detail
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  shadow-md rounded-lg">
            <thead className="bg-gray-400 rounded-xl hover:text-orange-200">
              <tr>
                <th className="px-4 py-2 text-left">No.</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">volunteers needed</th>

                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Deadline</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody className="bg-gray-400 text-black">
            {myVolunteer.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-6 py-2">{item.title}</td>
                <td className="px-12 py-2">{item.category}</td>
                <td className="lg:px-20 px-10 py-2">{item.volunteersNeeded}</td>
                <td className="px-12 py-2 ">{item.location}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2 text-center">
                  <Link
                    to={`/single/${item._id}`}
                    
                    
                    className="text-blue-800 hover:text-blue-700 transition duration-300"
                  >
                    Be a Volunteer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteer;
