
const Slide = () => {
  return (
    <div className="flex justify-center">
      <div
        className="hero h-[560px] w-[1200px]"
        style={{
          backgroundImage: `url(${})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-white relative bottom-20">
            <h1 className=" text-5xl text-center font-bold">{text}</h1>
            <p className='mt-10 text-center text-2xl max-w-5xl font-semibold '>Encourage curiosity and exploration with access to thousands of books and resources.You Borrow books from here for the whole year.Let us Expolre</p>
            <div className='flex justify-center relative top-24'>
            <div className='flex gap-10'>
                <button className='btn btn-ghost text-xl rounded-full text-secondary  border-2 border-secondary '>Explore</button>
                <button className='btn text-xl text-teal-400 btn-ghost rounded-full border-2 border-teal-400 btn-secondary'>Borrow Books</button>
            </div>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default Slide;
