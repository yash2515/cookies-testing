'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { document } from "postcss";
import Link from "next/link";

const data = [
  {
    id: 1,
    label: "firstname",
    type: "text",
    name: "firstName"
  },
  {
    id: 2,
    label: "lastname",
    type: "text",
    name: "lastName"
  },
  {
    id: 3,
    label: "Email",
    type: "email",
    name: "Email"
  },
  {
    id: 4,
    label: "mobile number",
    type: "text",
    name: "MobileNumber"
  }
]

export default function Home() {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    Email: "",
    MobileNumber: "",
  });

  
  useEffect(()=>{
    Cookies.set("data")
  })

  console.log(formData);
  
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    localStorage.setItem("userdata", JSON.stringify(formData));
  };

  return (
    <div className="bg-white flex items-center flex-col m-5">
      <h1 className="text-[20px] font-bold">SIGNUP PAGE </h1>
      <div className="p-10 flex flex-col gap-3">
        <div className="flex gap-2 flex-col">
          {data.map((item) => (
            <div key={item.id} className="flex gap-2">
              <label className="font-semibold">{item.label}</label>
              <input
                value={formData[item.name] || ""}
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
          href={"/login"}
          className="bg-black text-white rounded-[5px] p-2 font-bold"
          onClick={handleClick}
        >
          signup
        </Link>
      </div>
    </div>
  );
}