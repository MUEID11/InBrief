import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import Button from "../../components/ui/Button";
// import { getStoredReadBooks, getStoredWishedBooks, storeReadBooks, storeWishedBooks } from "../../utils/localstorage";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === Number(bookId));
  // const [books, setBooks] = useState([]);
  // const [book, setBook] = useState([]);
  console.log("first", book);
  // useEffect(() => {
  //   axios
  //     .get("books2.json")
  //     .then((response) => console.log("first", response.data))
  //     .catch((error) => console.error(error));
  // }, []);
  // console.log(books);
  // useEffect(() => {
  //   setBook(books?.find((book) => book.bookId === Number(bookId)));
  // }, [books]);

  // const readBtnHandler = () => {
  //   const storedReadBooks = getStoredReadBooks();
  //   if (storedReadBooks.includes(Number(bookId))) {
  //     toast.error("You have already read this book");
  //   } else {
  //     storeReadBooks(Number(bookId));
  //     toast.success("Book added to read list");
  //   }
  // };

  // const wishBtnHandler = () => {
  //   const storedReadBooks = getStoredReadBooks();
  //   const storedWishedBooks = getStoredWishedBooks();
  //   if (storedWishedBooks.includes(Number(bookId))) {
  //     toast.error('Book is already in the wishlist');
  //   } else if (storedReadBooks.includes(Number(bookId))) {
  //     toast.error('You have already read this book');
  //   } else {
  //     storeWishedBooks(Number(bookId));
  //     toast.success('Book added to wishlist');
  //   }
  // };

  return (
    <div className="flex items-start gap-6 px-3 container mx-auto pt-5">
      <div className="bg-neutral-900 bg-opacity-5 rounded-2xl flex items-center justify-center w-1/2">
        <img src={book?.image} className="object-contain h-full w-full" />
      </div>
      <div className="w-1/2 font-workSans">
        <h1 className="text-neutral-900 text-2xl font-bold mb-3">{book?.bookName}</h1>
        <h2 className="text-neutral-900 text-opacity-80 text-lg font-medium mb-5">By : {book?.author}</h2>
        <h3 className="text-neutral-900 text-opacity-80 font-medium mb-6">Category: {book?.category} </h3>
        <p className="text-neutral-900 text-opacity-70 text-base font-normal leading-relaxed mb-7 whitespace-pre-wrap">
          <strong className="text-neutral-900 text-base font-bold ">Overview : </strong> {book?.review}
        </p>
        {/* <div className="flex items-center gap-3 mb-6">
          <span className="text-neutral-900 text-base font-bold mr-2 ">Tags</span>
          {book?.tags.map((tag, id) => (
            <span key={id} className="text-primary bg-[#23BE0A0D] px-4 py-2 mr-3 rounded-full text-base font-medium">
              #{tag}
            </span>
          ))}
        </div> */}
        <div className="border-t border-neutral-900 border-opacity-20 pt-6 space-y-3 mb-8">
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Number of Pages:</span> <span>{book?.totalPages}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Publisher:</span> <span>{book?.publisher}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Year of Publishing:</span> <span>{book?.yearOfPublishing}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Rating:</span> <span>{book?.rating}</span>
          </p>
        </div>
        <div>
          <a href={book?.url} target="_blank">
            <button className="bg-slate-800 hover:bg-slate-900 transition-all text-white px-5 py-3 rounded-sm">Get The Book</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
