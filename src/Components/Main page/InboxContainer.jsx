import React, { useState, useEffect } from "react";
import axios from "axios";
import AllInbox from "./AllInbox"; // Adjust the import based on your file structure

const InboxContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Check content-type to handle different response types
        if (response.headers['content-type'].includes('application/json')) {
          setData(response.data); // Adjust based on the actual structure of the response
        } else {
          console.error("Unexpected response format:", response.headers['content-type']);
          setError("Unexpected response format.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        }
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMail = (threadId) => {
    // Handle loading a specific mail thread
    console.log("Load mail with threadId:", threadId);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  return <AllInbox data={data} loadMail={loadMail} />;
};

export default InboxContainer;
