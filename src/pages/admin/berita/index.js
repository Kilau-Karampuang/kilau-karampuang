import NavbarAdmin from "@/Components/NavbarAdmin";
import Hero from "@/Components/Hero";
import { useState } from "react";

const Article = ({ title, content, onEdit, onDelete, onSave, isEditing, editContent, setEditContent }) => {
  return (
    <div className="border-t border-gray-300 py-4">
      <h2 className="font-bold">{title}</h2>
      {isEditing ? (
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <p className="mt-2 text-sm text-gray-700">{content}</p>
      )}
      <div className="mt-2 text-xs text-gray-600 flex items-center">
        {isEditing ? (
          <button onClick={onSave} className="mr-2 text-blue-600">💾 Save</button>
        ) : (
          <button onClick={onEdit} className="mr-2 text-blue-600">✏️ Edit</button>
        )}
        <button onClick={onDelete} className="text-red-600">🗑️ Delete</button>
      </div>
    </div>
  );
};

export default function AdminBerita() {
  const [articles, setArticles] = useState([
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
    { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi nec est dignissim vestibulum a non velit. Etiam nisl lacus, congue vitae imperdiet sit amet, blandit ut eros. Sed nisi lectus, vulputate ac facilisis et, imperdiet sed ipsum. In pellentesque iaculis justo eget facilisis. Curabitur et lacus vel dolor fringilla scelerisque. Vestibulum dictum lacus magna, id rhoncus lorem blandit." },
  ]);
  const [newContent, setNewContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const handleNewContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleAddArticle = () => {
    if (newContent.trim()) {
      setArticles([{ title: "New Article", content: newContent }, ...articles]);
      setNewContent("");
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditContent(articles[index].content);
  };

  const handleSave = () => {
    const updatedArticles = [...articles];
    updatedArticles[editingIndex].content = editContent;
    setArticles(updatedArticles);
    setEditingIndex(null);
    setEditContent("");
  };

  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
  };

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <NavbarAdmin />
      <Hero heading="Berita Karampuang" subheading="Admin Dashboard"/>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:pr-4">
            {currentArticles.map((article, index) => (
              <Article
                key={index + indexOfFirstArticle} // Ensure unique key for each article
                title={article.title}
                content={article.content}
                isEditing={index + indexOfFirstArticle === editingIndex}
                editContent={editContent}
                setEditContent={setEditContent}
                onEdit={() => handleEdit(index + indexOfFirstArticle)}
                onSave={handleSave}
                onDelete={() => handleDelete(index + indexOfFirstArticle)}
              />
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Sebelum
              </button>
              <span className="text-sm">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Selanjutnya
              </button>
            </div>
          </div>
          <div className="md:w-1/4 mt-6 md:mt-0">
            <textarea
              value={newContent}
              onChange={handleNewContentChange}
              placeholder="Ketik berita baru disini..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleAddArticle}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Kirim!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
