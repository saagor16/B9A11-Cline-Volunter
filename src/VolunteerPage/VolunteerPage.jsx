import { useLoaderData } from "react-router-dom";
import CardNew from "./CardNew";
import axios from "axios";
import { useState } from "react";

const VolunteerPage = () => {
  const allData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/volunteer/search?q=${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for volunteers:", error);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-center">Volunteer Search</h1>

      <div className="flex justify-center mt-5">
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Post Title"
            className="mr-2 border rounded-xl text-center border-gray-800"
          />
          <button
            onClick={handleSearch}
            className="px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {searchResults.length > 0
          ? searchResults.map((result) => (
              <CardNew key={result._id} data={result} />
            ))
          : allData.map((data) => <CardNew key={data._id} data={data} />)}
      </div>
    </div>
  );
};
export default VolunteerPage;