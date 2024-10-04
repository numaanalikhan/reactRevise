import React  from "react";
import {Header} from "../Components/Header"
import FoodList from "../Components/FoodList";
function Food (){
    return(
        <>
        <h1>Food Component</h1>
        <Header/>
        <FoodList/>
        <div >
        <div style={{width:"480px",height:"350px",border:"2px solid black",borderRadius:"20px", margin:"5px"}}>
                <img
                style={{width:"100%",height:"300px", objectFit:"cover",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
                src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" alt="biryani"/>
                <p style={{textAlign:"center"}}>Birayani</p>
            </div><div style={{width:"480px",height:"350px",border:"2px solid black",borderRadius:"20px", margin:"5px"}}>
                <img
                style={{width:"100%",height:"300px", objectFit:"cover",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
                src="https://th.bing.com/th/id/R.290b497379f4d5e542922078d7cced53?rik=teVj9cbCdjC9CA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f1c%2fBlondie%27s_pepperoni_pizza_slice.JPG&ehk=Iz%2bqW3O8eYlhNMh2PtSdaWIMBuqa3zFfjMgBGoL1Kvo%3d&risl=&pid=ImgRaw&r=0" alt="biryani"/>
                <p style={{textAlign:"center"}}>Pizza</p>
            </div><div style={{width:"480px",height:"350px",border:"2px solid black",borderRadius:"20px", margin:"5px"}}>
                <img
                style={{width:"100%",height:"300px", objectFit:"cover",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
                src="https://ribsandburgers.com/au/wp-content/uploads/2020/11/domcherry-5913.jpg" alt="biryani"/>
                <p style={{textAlign:"center"}}>Burger</p>
            </div><div style={{width:"480px",height:"350px",border:"2px solid black",borderRadius:"20px", margin:"5px"}}>
                <img
                style={{width:"100%",height:"300px", objectFit:"cover",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
                src="https://th.bing.com/th/id/OIP.-5hfs_R4_ARZ1ydzBUbgGQHaE7?pid=ImgDet&w=192&h=128&c=7&dpr=1.6" alt="biryani"/>
                <p style={{textAlign:"center"}}>Pasta</p>
            </div><div style={{width:"480px",height:"350px",border:"2px solid black",borderRadius:"20px", margin:"5px"}}>
                <img
                style={{width:"100%",height:"300px", objectFit:"cover",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}
                src="https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0879.jpg" alt="biryani"/>
                <p style={{textAlign:"center"}}>CoolCake</p>
            </div>
        </div>
        </>
    )
}
export default Food;