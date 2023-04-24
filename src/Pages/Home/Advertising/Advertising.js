import AdsCarousel from "../../../Components/Carousel/AdsCarousel/AdsCarousel";
import SellerAds from "../../../Components/Carousel/SellerAds/SellerAds";


const Advertising = ({ advertising }) => {
  return (
    <div>
    
        <SellerAds advertising={advertising}></SellerAds>
      <div>
      </div>
    <div className="h-[300px] card-bordered mt-5">
    <AdsCarousel></AdsCarousel>
    </div>
    </div>
  );
};

export default Advertising;
