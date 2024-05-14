import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const UpdatePage = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({
    deadline: new Date(),
    userEmail: user ? user.email : "", 
    userName: user ? user.displayName : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleDeadlineChange = (date) => {
    setPost({ ...post, deadline: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const date = form.date.value;
    const userEmail = user.email;
    const userName = user.displayName;

    const addItems = {
     
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      date,
      userEmail,
      userName,
    };
    console.log(addItems);
    fetch(`http://localhost:9000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Card Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
    
  };

  return (
    <div className="mx-auto max-w-lg p-6 border rounded-lg bg-gray-100 mt-20">
      <h2 className="text-xl font-semibold mb-4">Update Volunteer Post</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="thumbnail" className="block font-semibold mb-1">
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label
            htmlFor="volunteersNeeded"
            className="block font-semibold mb-1"
          >
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            id="volunteersNeeded"
            name="volunteersNeeded"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="deadline" className="block font-semibold mb-1">
            Deadline
          </label>
          <DatePicker
          name="date"
          selected={post.deadline}
            onChange={handleDeadlineChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Organizer Name</label>
          <input
            type="text"
            value={post.userName}
            className="w-full px-3 py-2 border rounded-lg"
            readOnly
          />
        </div>
        <div>
        <label className="block font-semibold mb-1">Organizer Email</label>
          <input
            type="email"
            value={post.userEmail}
            className="w-full px-3 py-2 border rounded-lg mt-2"
            readOnly
          />
        </div>
        <div className="grid grid-cols-2">
         
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
          >
            UpdatePage
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
