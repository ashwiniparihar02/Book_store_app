import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";
import axios from "axios";

import { Link } from "react-router-dom";

function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{

    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-purple-500">HERE! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            voluptas reprehenderit temporibus repellendus, ducimus vero error
            accusantium praesentium sit sapiente corporis labore dolorem id quo
            repudiandae, ratione placeat, quidem ipsa quibusdam aliquid atque.
            Repellendus debitis ab doloremque, quasi adipisci, aperiam tempora
            reprehenderit fugit atque accusantium iure recusandae, impedit nemo
            ipsam.
          </p>
          <Link to="/">
          <button className="bg-purple-500 text-white px-7 py-4 rounded-xl mt-5 hover:bg-pink-400">
            Back
          </button
          ></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
