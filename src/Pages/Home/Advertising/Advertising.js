import AdvertiseBanner from "./AdvertiseBanner";

const Advertising = ({ advertising }) => {
  return (
    <div>
      <div className=" rounded-2xl ">
        {advertising.map((item) => (
          <AdvertiseBanner key={item._id} item={item}></AdvertiseBanner>
        ))}
      </div>
      <div className="carousel">
  <div id="item1" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZYFVsVkT2uJDfrTzXkHpjX8fxJL02sg1qHwXrPsRoenoHRtzQdsnISYVIdP0jKLyOz0&usqp=CAU" className="w-full h-[260px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://blog.daraz.lk/wp-content/uploads/2021/12/Banner-17.png" className="w-full h-[260px]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOEFcnckwKSz_IdFWCb6evyPiM3CI1giiVg2VasiGBT5gvW8f81IcZuItBlkk_2xy0i4&usqp=CAU" className="w-full h-[260px]" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </div>
  );
};

export default Advertising;
