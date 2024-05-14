/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const VolunteerOpportunityCard = ({artData}) => {
  const {
    _id,
    thumbnail,
    title,
    category,
    date
  
  } = artData;
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
        <figure className="px-10 pt-10">
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">Post Title: <span>{title}</span></h2>
          <div className="flex gap-8">
            <p>Category: <span>{category}</span></p>
            <p>Deadline <span>{date}</span></p>
          </div>
          <div className="card-actions"><Link to={`/single/${_id}`}><button  className="btn btn-primary">View Details Button</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunityCard;
