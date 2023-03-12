import React, { useState } from "react";

const Employee = () => {
  const [listOfEmployee, setListOfEmployee] = useState([
    { name: "Gagan Pandey", address: "Ktm", salary: 20000, ab_rate: 10 },
    { name: "Milan Ghaite", address: "Pkr", salary: 30000, ab_rate: 5 },
    { name: "Paras Ucciha", address: "Dhr", salary: 50000, ab_rate: 20 },
    { name: "Hinata Ujamaki", address: "UK", salary: 15000, ab_rate: 17 },
  ]);
  const [newSalary, setNewSalary] = useState(true);

  return (
    <div className="rounded-lg p-5 border-2 border-solid border-white bg-[#222222]">
      <div className="left-[940px] cursor-pointer bg-[red] absolute px-2 items-right rounded-full"
      onClick={() =>setListOfEmployee([])}
      > X </div>
      {listOfEmployee.map((employee, index) => (
        <>
          <h1 className="m-8">
            {" "}
            <span className=" text-white m-2 p-3 font-semibold">
              {index}
            </span>{" "}
              {employee.name}, From: {employee.address}, Salary:{" "}
            <span className="text-yellow-500">{employee.salary}</span>
          </h1>
        </>
      ))}
      <button
        className="mx-[50px] my-[20px] border-solid border-2 p-2 mx-3 rounded-lg"
        onClick={() =>
          setNewSalary(
            newSalary <= 5
              ? listOfEmployee.map((people, index) => (
                  <h1 className="m-8">
                    <span className=" text-white m-2 p-3 font-semibold ">{index}</span>{" "}
                    {people.name}'s new salary is :
            <span className="text-green-500"> {people.salary + 12000}</span>
                  </h1>
                ))
              : "No bonus this month"
          )
        }
      >
        Check for updates
      </button>
      <h1>{newSalary}</h1>
    </div>
  );
};

export default Employee;
