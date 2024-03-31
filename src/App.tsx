import Login from "@/components/Login"
import axios from 'axios'
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);
  interface User {
    id: Number,
    username: String,
  }
  const fetchApi = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const responseData = response.data;
      setData(responseData)
      console.log("Data fetched successfully:", responseData);
    } catch (error) {
      console.log("Error fetching in API", error)
    }

  }
  useEffect(() => {
    fetchApi()
  }, []);
  return (
    <>

      <Login />
    

    </>
  )
}

export default App
