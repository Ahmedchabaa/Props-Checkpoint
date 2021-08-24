import React from 'react'

const styleobject ={color:'green' , textalign : 'center'}

const Profile = (data) => {
    console.log (data)
    return (
        <div>
            {data.handleName(data.fullName)}
           <h1 style={styleobject}>{data.fullName}</h1>
           <p>{data.bio}</p>
           <p>Age : {data.age}</p>
           <div>
               <h3>Profession : </h3>
               <ul>
                   {data.profession.map((el,i)=>(
                       <li key={i}>
                           {el}
                       </li>
                   )
                   )}
               </ul>
           </div>
           {data.children}
        </div>
    )
}


export default Profile;