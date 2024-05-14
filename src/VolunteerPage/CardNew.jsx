/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardNew = ({data}) => {
  return (
    <div className="mt-20">
      <div className="card w-96 bg-base-100 shadow-xl max-h-screen">
        <figure className="px-10 pt-10">
          <img
            src={data.thumbnail}
            alt="Thumbnail"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">Post Title : {data.title}</h2>
          <div className="flex gap-8">
            <p>Category:{data.category}</p>
            <p>Deadline:{data.date}</p>
          </div>
          <div className="card-actions">
            <Link to="/needVolunteer">
              <button className="btn btn-primary">View Details Button</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNew;
