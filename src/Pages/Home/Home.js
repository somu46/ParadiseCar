import Banner from '../../Assets/Paradise bannerWO.jpg'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className=" mt-[5rem] min-h-screen flex justify-center font-semibold text-3xl ">
        <img src={Banner} alt='banner' className='Banner'/> 
      </div>
    </>
  );
};

export default Home;
