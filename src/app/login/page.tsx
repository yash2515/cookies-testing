'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const data = [
  {
    id: 1,
    label: "Email",
    type: "email",
    name: "Email"
  },
  {
    id: 2,
    label: "password",
    type: "text",
    name: "password"
  }

]
const login = () => {

  const [login, setLogin] = useState<any>({
    Email: "",
    password: ""
  })



  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    Email: "",
    MobileNumber: "",
  });


  const[dashboard,setDashboard] =useState(false)
  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  
  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const storedDatalogin = localStorage.getItem("yash");
    if (storedDatalogin) {
      setFormData(JSON.parse(storedDatalogin));
    }
  }, []);

  useEffect(() => {
    // Check login credentials and set dashboard state
    if (formData.Email === login.Email) {
      setDashboard(true);
    } else {
      setDashboard(false);
    }
  }, [login, formData]);

  const handleClick = () => {
    localStorage.setItem("yash", JSON.stringify(login));
  }; 

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

 
  
  return (
    <div className="bg-white flex items-center flex-col m-5">
      <h1 className="text-[20px] font-bold">LOG-IN PAGE </h1>
      <div className="p-10 flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          {data.map((item:any) => (
            <div key={item.id} className="flex gap-2">
              <label className="font-semibold">{item.label}</label>
              <input
                value={login[item.name] || ""}
                id={item.name}
                type={item.type}
                name={item.name}
                className="border border-black focus:outline-none rounded-[5px]"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <Link
          href={`${dashboard ? "/dashboard":"/"}`}
          className="bg-black text-white rounded-[5px] p-2 font-bold text-center"
          onClick={handleClick}
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default login