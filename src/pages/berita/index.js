import React, { useState, useEffect } from "react";
import { LoadingContext } from "@/Context/LoadingContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import axios from "axios";

export default function Berita() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/berita")
      .then((res) => {
        toast.success("Data berita berhasil dimuat!", {
          zIndex: 9999,
        });
        const sortedData = res.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Data berita gagal dimuat!", {
          zIndex: 9999,
        });
        setIsLoading(false);
      });
  }, []);

  const Article = ({ title, content, date }) => {
    const readableDate = new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    });
  
    return (
      <div className="border-t border-gray-300 py-4">
        <h2 className="font-bold">{title}</h2>
        <p className="mt-2 text-sm text-gray-700">{content}</p>
        <p className="mt-2 text-xs text-gray-600">{readableDate}</p>
      </div>
    );
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(data.length / articlesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Navbar />
      <Hero heading="Berita Karampuang" subheading="Terus Pantau" />
      <div className="container mx-auto py-8 px-12">
        {data.length === 0 ? (
          <p className="text-center text-gray-500 px-24 py-24">
            Tidak ada berita
          </p>
        ) : (
          <>
            {currentArticles.map((article, index) => (
              <Article
                key={index}
                title={article.judul}
                content={article.deskripsi}
                date={article.createdAt}
              />
            ))}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
              >
                Sebelumnya
              </button>
              <span className="text-sm">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
              >
                Selanjutnya
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
