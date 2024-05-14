/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({
    deadline: new Date(),
    userEmail: user ? user.email : "",
    userName: user ? user.displayName : "",
  });
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://a11b9-volunteer.vercel.app/volunteer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleDeadlineChange = (date) => {
    setPost({ ...post, deadline: date });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const thumbnail = form.thumbnail.value;

    const volunteerInfo = {
      title,
      description,
      date,
      thumbnail,
    };

    fetch(`https://a11b9-volunteer.vercel.app/updateVolunteer/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Update successful",
          });
        }
      });
  };

  return (
    <div className="mx-auto max-w-lg p-6 border rounded-lg bg-gray-100 mt-20">
      <h2 className="text-xl font-semibold mb-4">Update Volunteer Post</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="thumbnail" className="block font-semibold mb-1">
            Thumbnail
          </label>
          <input
            type="text"
            defaultValue={product.thumbnail}
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
            defaultValue={product.title}
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
            defaultValue={product.description}
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
            defaultValue={product.category}
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
            defaultValue={product.location}
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
            defaultValue={product.volunteersNeeded}
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
            defaultValue={product.date}
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
        <div className="grid grid-cols-2"></div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
