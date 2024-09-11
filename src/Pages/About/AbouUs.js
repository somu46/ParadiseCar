import CEO from '../../Assets/Dark_ParadiseCar.png'

const AboutUs = () => {
    return (
      <>
      <div className=" mt-[10rem] min-h-screen flex justify-center font-semibold text-3xl ">
        <div>
          <img src={CEO} alt="CEO" className="CEO"/>
          <p>Sudipta Karmakar</p>
        </div>
        <div className='about'>
          <p>At Paradise Car Rental, we pride ourselves on offering top-notch car rental services tailored to meet the diverse needs of our clients. Founded by Sudipto Karmakar, our company is committed to providing reliability, comfort, and convenience, ensuring a seamless travel experience for those looking to journey between cities. Our extensive fleet of well-maintained vehicles ensures that you can choose the perfect ride for your trip, whether you’re traveling for business or leisure. Our professional drivers are not only skilled behind the wheel but also courteous and knowledgeable, guaranteeing a safe and pleasant journey. At Paradise Car Rental, our mission is to deliver exceptional service that exceeds your expectations, making every journey a memorable one.</p>
        </div> 
        <div>
          <img src='https://cdn.me-qr.com/qr/125603385.png?v=1726078054' alt='Review QR' className='ReviewQR'/>
       
        </div>

      </div>
    </>
    );
  };
  
  export default AboutUs;
  