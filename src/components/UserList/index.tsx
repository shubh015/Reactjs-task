import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}
const UserList: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response)
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-2 px-4">userId</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
