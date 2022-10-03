import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  return <div>Books</div>;
};

export default Books;
