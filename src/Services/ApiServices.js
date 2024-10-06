import axios from "axios";


const BASE_URI="http://localhost:8080/api/v1/userData";


const ContactApiTest= async()=>{
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
    console.log("Error occures in get request test: ",error);
    
   }
}


const Contactservices= async({fullName,mobileNum,email,contactMessage})=>{

    try {
         
     const responce= await axios.post(`${BASE_URI}/contactFrom`,{
        fullName,
        mobileNum,
        email,
        contactMessage,
     });
    //  const data=await responce.json(); 
     return responce;
        
    } catch (error) {
        console.log("Error occures submissing Data through  Post request  ",error);
        
    }
}




export { ContactApiTest,Contactservices};