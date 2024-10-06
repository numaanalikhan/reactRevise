import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import axios from "axios";
import {useState,useEffect} from "react";
      
function Slide (){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
      }
    var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/users")
        .then((res)=>{
            setUsers(res.data.users);
            // setUsers(res)
            // console.log(users)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <>
        <div className="w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...settings}>    
            {
                users.map((item,idx)=>{
                    return(
                        <>
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="flex flex-col items-center gap-4 p-4" >
                                <p className="text-xl font-semibold">{item.firstname}</p>
                                <p>{item.age}</p>
                                <p>{item.gender}</p>
                                <p>{item.username}</p>
                                <p>{item.address.address}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </Slider>

            </div>
        </div>
        </>
    )
}

export default Slide;