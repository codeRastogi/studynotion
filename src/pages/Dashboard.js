import React, { useEffect, useState } from "react";
import PageNotFound from "./dashcomponents/PageNotFound";
import Navbar from "./dashcomponents/Navbar";
import Filter from "./dashcomponents/Filter";
import { filterData, apiUrl } from "./dashcomponents/data";
import Spinner from "./dashcomponents/Spinner";
import Cards from "./dashcomponents/Cards";
import { toast } from "react-hot-toast";

function Dashboard() {


  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);
  const fetchData = async() => {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect( () => {
    fetchData();
  }, []);

  if(courses === null){
    return (
      <PageNotFound/>
    )
  }
  return (
    <div className="min-h-screen flex flex-col bg-zinc-800">
      <div className="bg-zinc-800">
      <div>
      <Filter
        filterData = {filterData}
        category = {category}
        setCategory = {setCategory}
      />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {loading ?(<Spinner/>) : (<Cards courses={courses} category = {category}/>)}
      </div>.
      </div>
    </div>
  );
}

export default Dashboard;
