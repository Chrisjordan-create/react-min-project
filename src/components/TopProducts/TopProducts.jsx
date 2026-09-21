import { FaStar } from "react-icons/fa6";
import { TopProductsList } from "../../data";
import PropTypes from "prop-types";

const TopProducts = ({ handlePopup }) => {
  return (
    <div className="py-10 bg-gray-950 text-black">
      <div className="mb-20 mx-auto md:mb-20 pb-10 px-14 lg:px-28 leading-8 lg:leading-0">
        <p className="font-semibold text-yellow-400 text-xl lg:font-bold lg:text-3xl">
          Rate Products For You
        </p>
        <h1 className="font-bold text-white text-xl lg:text-2xl">
          Best Products
        </h1>
        <p className="font-semibold lg:text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis provident iusto dolore nulla accusamus quasi. Possimus consequuntur reiciendis,
          iusto fugit minima quisquam nisi, veritatis modi adipisci qui nemo pariatur unde!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 lg:gap-10 place-items-center px-10">
        {TopProductsList.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl bg-primary hover:bg-gray-800 hover:text-white relative shadow-xl duration-200 group max-w-[300px] lg:w-[350px] mb-10"
          >
            <div className="h-[100px] md:h-[180px]">
              <img
                src={data.img}
                alt="ShirtImages"
                className="w-[120px] lg:w-[200px] block mx-auto transform- transilation-y-20 group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 font-bold group hover:text-white duration-300 text-sm p-2">
                {data.description}
              </p>
              <button onClick={handlePopup}
                className="mt-2 bg-gray-950 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full font-bold cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        ))
    }
      </div>
    </div>
  )
}
TopProducts.propTypes = {
  handlePopup: PropTypes.func
}
export default TopProducts;