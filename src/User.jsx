import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const userData=useLoaderData()
    const[data, setData]=useState(userData)

    const handleUser =(e)=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const password=form.password.value 
        const user={name,password}
      
        fetch('https://crud-operation-server-side-cyxjhdfo3-biplob-kumar-roys-projects.vercel.app/user', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.insertedId){
            alert('successfully')
            form.reset()
         }
         else{
            alert('not successfully')
         }
        })

    }
   
    const handaleDelet=(_id)=> {
        console.log(_id)
        fetch(`https://crud-operation-server-side-cyxjhdfo3-biplob-kumar-roys-projects.vercel.app/user/${_id}`,{
            method:'Delete'
        })
        .then(res=> res.json())
        .then(dat=>{
            const remeningdata=data.filter(da=> da._id!==_id) 
            setData(remeningdata)
           
        })


    }



    return (
        <div>
            <h1> this is User Page</h1>

           <form  onSubmit={handleUser}>

              <input type="text" name="name"  placeholder=" input Your Name"/> <br />
              <input type="password" name="password" placeholder="Input Your Password" id="" /> <br />
               <input type="submit"   value=" Submit" />


           </form>
  

         <h1> this is user name and password</h1>
         {data.map(da=><p key={da._id}> 
            <b> user name:</b> {da?.name}
            <b> user Password:</b> {da?.password}  ..... <Link to={`/update/${da?._id}`}> Update </Link>    <b onClick={()=>handaleDelet(da._id)}>X</b>
             </p>)}
            
        </div>
    );
};

export default User;