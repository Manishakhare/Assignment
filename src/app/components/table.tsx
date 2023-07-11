"use client";

import React, { useState } from "react";

type TableRow = {
  name: string;
  email: string;
  password: string;
  address: string;
  mobile: string;
  age: string;
  education: string;
};

const sampleData: TableRow[] = [
  {
    name: "Manisha Khare",
    email: "kharemani22gmail.com",
    password: "********",
    address: "delhi",
    mobile: "7894561235",
    age: "24",
    education: "Btech Cse",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    address: "123 Main St, City",
    mobile: "1234567890",
    age: "30",
    education: "Bachelor",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "********",
    address: "456 Elm St, City",
    mobile: "9876543210",
    age: "25",
    education: "Master",
  },
  // Add more sample data here if needed
];

const Table: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof TableRow | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (column: keyof TableRow) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = React.useMemo(() => {
    if (sortColumn) {
      return [...sampleData].sort((a, b) => {
        const columnA = a[sortColumn].toLowerCase();
        const columnB = b[sortColumn].toLowerCase();
        if (columnA < columnB) return sortDirection === "asc" ? -1 : 1;
        if (columnA > columnB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sampleData;
  }, [sortColumn, sortDirection]);

  const filteredData = searchTerm
    ? sortedData.filter((row) =>
        Object.values(row)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : sortedData;

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-2 py-1 rounded-sm"
        />
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="text-left">
              <tr>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("name")}
                >
                  Name
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("email")}
                >
                  Email
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("password")}
                >
                  Password
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("address")}
                >
                  Address
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("mobile")}
                >
                  Mobile
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("age")}
                >
                  Age
                </th>
                <th
                  className="py-2 px-4 cursor-pointer bg-blue-500 text-white"
                  onClick={() => handleSort("education")}
                >
                  Education
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{row.name}</td>
                  <td className="py-2 px-4">{row.email}</td>
                  <td className="py-2 px-4">{row.password}</td>
                  <td className="py-2 px-4">{row.address}</td>
                  <td className="py-2 px-4">{row.mobile}</td>
                  <td className="py-2 px-4">{row.age}</td>
                  <td className="py-2 px-4">{row.education}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
