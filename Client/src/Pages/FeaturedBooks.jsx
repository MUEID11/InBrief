import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../Components/Component/BookCard";
import { Link } from "react-router-dom";
import bannerImage from "../assets/bannerBook.png";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("books.json")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* BANNER */}
      <section className="container mx-auto bg-[#1313130D] px-4 md:px-[120px] py-12 md:py-20 flex flex-col md:flex-row items-center justify-between rounded-3xl mt-3 md:mt-6">
        <div className="max-w-[526px] ">
          <h1 className="text-neutral-900 text-5xl md:text-[56px] font-bold font-playFair mb-10 max-sm:leading-tight">Books to freshen up your bookshelf</h1>
          <Link>{/* <Button text="View The List" /> */}</Link>
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </section>

      <section className="mt-28 container mx-auto px-4">
        <h2 className="text-neutral-900 text-[40px] font-bold text-center font-playFair mb-9">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedBooks;
