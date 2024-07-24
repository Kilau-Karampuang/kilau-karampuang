import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";

const data = [
  {
    title: "Lorem Ipsum1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum7",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum8",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum9",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum10",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum11",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  },
  {
    title: "Lorem Ipsum12",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisi lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit."
  }
];

const Article = ({ title, content }) => {
  return (
    <div className="border-t border-gray-300 py-4">
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2 text-sm text-gray-700">{content}</p>
    </div>
  );
};

export default function Berita() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

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
          <p className="text-center text-gray-500 px-24 py-24">Tidak ada berita</p>
        ) : (
          <>
            {currentArticles.map((article, index) => (
              <Article
                key={index}
                title={article.title}
                content={article.content}
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
                Halaman {currentPage} dari {totalPages}
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
