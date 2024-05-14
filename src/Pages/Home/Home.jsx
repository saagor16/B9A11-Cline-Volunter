import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";

// import Slider from '../Home/Slider'
const Home = () => {
    const short = useLoaderData();
    const shortSlice = short.slice(0, 6);
  return (
    <div className="mt-16">
      <div>
        <Banner></Banner>
      </div>
    
      <div>
        <h2> Volunteer Needs Now Section</h2>
        
      </div>
      <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
        {shortSlice.map((art) => (
          <VolunteerOpportunityCard key={art._id} artData={art} />
        ))}
      </div>
      </div>
      <div className="items-center mt-5 text-center">
        <Link to='/needVolunteer'>
        <button className="btn btn-primary w-32 hover:btn-accent">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
