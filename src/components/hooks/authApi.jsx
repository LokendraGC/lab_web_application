import { useEffect, useState } from "react";
import axios from "axios";
const authApi = (route, method, data = null) => {
  const [res, setRes] = useState();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3NDMzMzA2LCJpYXQiOjE2ODY1NjkzMDYsImp0aSI6ImI0YWQwNmQzYjJiZjQ4MmM4ZDMyNzFjODM5NDY1NjI5IiwidXNlcl9pZCI6MX0.Ahntz3zXZ038d4PHj5FwX_3kxIidSEftVk3VRXLIAJc";
  async function fetchData() {
    if (method === "get") {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(route, headers);
      setRes(data);
    } else if (method === "post") {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,

          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(route, data, headers);
      setRes(data);
    } else if (method === "put") {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,

          "content-type": "application/json",
        },
      };
      const { data } = await axios.put(route, data, headers);
      setRes(data);
    } else if (method === "delete") {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(route, headers);
      setRes(data);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return res;
};

export default authApi;
