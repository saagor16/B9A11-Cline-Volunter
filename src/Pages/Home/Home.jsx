import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import VolunteerOpportunityCard from "./VolunteerOpportunityCard";
import Gallery from "./Gallery";

import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import MyHome from "./MyHome";

// import Slider from '../Home/Slider'
const Home = () => {
  const short = useLoaderData();
  const shortSlice = short.slice(0, 6);
  return (
    <div className="mt-16">
      <div>
        <Banner></Banner>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold"> Volunteer Needs Now </h2>
        <p>
          {" "}
          It serves as a vital resource, swiftly mobilizing individuals to
          address pressing community <br /> needs. Through concise listings and clear
          directives, it facilitates quick engagement, maximizing volunteer
          impact.
        </p>
      </div>
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {shortSlice.map((art) => (
            <VolunteerOpportunityCard key={art._id} artData={art} />
          ))}
        </div>
      </div>
      <div className="items-center mt-5 text-center">
        <Link to="/needVolunteer">
          <button className="btn btn-primary w-32 hover:btn-accent">
            See All
          </button>
        </Link>
      </div>
      <div className="mt-10">
        <Gallery></Gallery>

      </div>
      <div className="mt-10">
          <MyHome></MyHome>

      </div>
      <div className="mt-10">
        <ExtraOne></ExtraOne>

      </div>
      <div className="mt-10">
        <ExtraTwo></ExtraTwo>

      </div>
    </div>
  );
};

export default Home;
