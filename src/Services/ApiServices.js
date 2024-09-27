import axios from "axios";

const BASE_URI="http://localhost:8080/api/vi/userData";


const ContactServicesTest= async()=>{
   try {
       
    const optaion={
        method:'GET',
        headers:{
            accept:'application/json',
        }
    };

    const responce=await fetch(BASE_URI,optaion);
    const data=await responce.json();

    return data.message;

      } catch (error) {
    console.log("Error Contact from submission: ",error);
    
   }
}




export { ContactServicesTest};