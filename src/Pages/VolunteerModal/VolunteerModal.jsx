import { useEffect, useState } from "react";
import PageTitle from "../../PageTitle/PageTitle";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

const VolunteerModal = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/volunteer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="mt-20">
      <PageTitle title="VolunteerModal"></PageTitle>
      <div className="container mx-auto">
        <div className="flex">
          <button className="btn btn-secondary">View Details:</button>
          <Marquee pauseOnHover={true} speed={40}>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {product.title}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {product.title}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {product.title}
            </Link>
            <Link
              className="mr-12 lg:mr-24 text-orange-500 text-2xl font-extrabold"
              to="/"
            >
              {product.title}
            </Link>
          </Marquee>
        </div>
        <section className="bg-gray-400  space-y-3 lg:h-[px] w-full rounded-xl mt-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between space-y-8">
          <div className="flex items-center justify-center lg:pl-16  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={product.thumbnail}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[720px] xl:h-112 2xl:h-128 rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-5 lg:pr-24 lg:pl-16  rounded-sm  lg:text-left text-black">
            <div className=" flex gap-8">
              <h4 className="font-bold">
              category:
                <span className="text-purple-900">{product.category}</span>
              </h4>
              <h4 className="font-bold">
              volunteersNeeded:<span className="text-purple-900">{product.volunteersNeeded}</span>
              </h4>
            </div>
            <div className=" flex gap-8">
              <h4 className="font-bold">
                Dateline:<span className="text-purple-900">{product.data}</span>
              </h4>
              <h4 className="font-bold">
              location:<span className="text-purple-900">{product.location}</span>
              </h4>
            </div>

            <p className="leading-relaxed">
              {" "}
              <span className="text-xl  font-bold">Details :</span>{" "}
              {product.description}
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default VolunteerModal;
