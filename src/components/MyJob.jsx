"use client"
import React from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JobTable from "./JobTable";
export default function MyJobs() {
  const { email } = useParams();

//   const { data, isFetching } = useGetJobByEmployeeQuery(email);
const data ={}  // fetch data for email
//   if (isFetching) return <Loading />;

  return (
    <div className="pt-14 p-10">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">My Jobs</h1>
      </div>

      {data?.data?.length ? (
        <JobTable/>
        
      ) : (
        <div className="flex items-center justify-center flex-col h-[70vh] gap-4">
          <h3 className="text-base font-medium">You didn't post any Job</h3>
          <Link to="/dashboard/add-job">
            <button className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6">Add Now</button>
          </Link>
        </div>
      )}
      <br />
        <JobTable/>

    </div>
  );
}
