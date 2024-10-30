// import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import NewsCard from "../Components/Component/NewsCard";
import { useGetBookmarksQuery } from "../services/bookmarksApi";
import { ImSpinner9 } from "react-icons/im";

const Bookmarks = () => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useGetBookmarksQuery(user?.email);
  const bookmarks = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <ImSpinner9 className="animate-spin text-red-900 text-6xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-xl text-red-600">Failed to load Latest News. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center text-2xl font-semibold my-5 text-neutral-700">BOOKMARKS</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-8">
        {bookmarks.length > 0 ? bookmarks.map((bookmark) => <NewsCard key={bookmark._id} article={bookmark} />) : <p className="text-xl text-red-600">No Bookmarks Found Yet!</p>}
      </div>
    </div>
  );
};

export default Bookmarks;
