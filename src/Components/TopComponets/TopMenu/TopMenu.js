import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
const TopMenu = () => {
  const data = [
    {
      id: 1,
      heading: "All Departments",
      titles: [
        { title: "Pages" },
        { title: "Value of the Day" ,"border":""},
        { title: "Laptops & Computers","border":"" },
        { title: "Cameras & Photography","border":"" },
        { title: "Smart Phones & Tablets","border":"" },
        { title: "Video Games & Consoles","border":"" },
        { title: "TV & Audio" ,"border":""},
        { title: "Gadgets" ,"border":""},
        { title: "Car Electronic & GPS","border":""},
        { title: "Accessories","border":"12px" },
      ],
    },
  ];
  return (
    <div>
      {data?.map((item) => (
        <>
          <div className=" card-bordered rounded-xl " key={item?.id}>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-t-xl pl-5 py-3 flex gap-2 justify-center items-center ">

            <BsMenuButtonWideFill className="lg:ml-[-55px] ml-[-146px] text-xl"></BsMenuButtonWideFill>
            <p className="text-2xl font-semibold ">{item?.heading}</p>
            </div>
           <div className="rounded-b-xl"> 
            {
                item?.titles?.map((tiny,i)=><>
                   {
                       i%2===0?
                <>
                <div className="pl-5 py-2 text-lg" key={tiny?.title} style={{borderBottomLeftRadius:`${tiny?.border}`,borderBottomRightRadius:`${tiny?.border}`}}>
                    <p>{tiny?.title}</p>
                </div></>:<>
                <div className="pl-5 py-2 text-lg bg-gray-100 " key={tiny?.title} style={{borderBottomLeftRadius:`${tiny?.border}`,borderBottomRightRadius:`${tiny?.border}`}}>
                    <p>{tiny?.title}</p>
                </div>
                </>
                   }
                </>)
            }
           </div>

          </div>
        </>
      ))}
    </div>
  );
};

export default TopMenu;
