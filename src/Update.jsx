import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const{id}=useParams()
    console.log(id)
    const loddedData=useLoaderData();
    console.log(loddedData)
    const [ data, setData]=useState([])
    useEffect(()=>{
        const findData=loddedData.find(f=>f._id==id)
    setData(findData)
   

    },[])

    const handleUpdate=(e)=>{
        e.preventDefault()

        const form=e.target 
        const  name=form.name.value;
        const password=form.password.value;

        const updateUser={name, password}

        fetch(`https://crud-operation-server-side-cyxjhdfo3-biplob-kumar-roys-projects.vercel.app/user/${id} ` , {
            method:"PUT", 
            headers:{ "content-type":"application/json"},
            body:JSON.stringify(updateUser)

        }
        
        )
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })
        








    }



    
    return (
        <div>

            <h1> this is update page </h1>

            <b> Update</b>

            <form onSubmit={handleUpdate} >

           <input type="text" name="name" id="" defaultValue={data?.name} /> <br />
           <input type="text" name="password" id="" defaultValue={data?.password} />
           <input type="submit" value="Update" />


            </form>
        

            
        </div>
    );
};

export default Update;