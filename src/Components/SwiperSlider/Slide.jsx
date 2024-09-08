import { Link } from "react-router-dom";

const Slide = ({ image, text, p }) => {
  return (
    <div
      className="hero lg:h-[600px] h-[200px]"
      style={{
        backgroundImage: `url(${image})`
      }}>
      <div className="hero-overlay bg-opacity-45"></div>
      <div className=" text-center">
        <div className="lg:max-w-4xl lg:relative bottom-9 text-white">
          <h1 className="lg:text-6xl font-bold lg:my-8  rel">{text}</h1>
          <p className="lg:text-xl lg:font-semibold">{p}</p>
          <Link to='/allFoods'>
            <button className="btn btn-ghost text-xl border-2 hover:border-purple-500 rounded-none hover:bg-purple-300 hover:text-purple-500 mt-6 text-orange-500 border-orange-500">Explore All Dish</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;