import { LoadingContext } from "@/Context/LoadingContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";
import NavbarAdmin from "@/Components/NavbarAdmin";
import Hero from "@/Components/Hero";
import axios from "axios";

const Article = ({
  title,
  content,
  date,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  isEditing,
  editTitle,
  setEditTitle,
  editContent,
  setEditContent,
}) => {
  const readableDate = new Date(date).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });

  return (
    <div className="border-t border-gray-300 py-4">
      {isEditing ? (
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <h2 className="font-bold">{title}</h2>
      )}
      {isEditing ? (
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <p className="mt-2 text-sm text-gray-700">{content}</p>
      )}
      <p className="mt-2 text-xs text-gray-600">{readableDate}</p>
      <div className="mt-2 text-xs text-gray-600 flex items-center">
        {isEditing ? (
          <>
            <button onClick={onSave} className="mr-2 text-blue-600">
              💾 Save
            </button>
            <button onClick={onCancel} className="text-gray-600">
              ❌ Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={onEdit} className="mr-2 text-blue-600">
              ✏️ Edit
            </button>
            <button onClick={onDelete} className="text-red-600">
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function AdminBerita() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [newJudul, setNewJudul] = useState("");
  const [newDeskripsi, setNewDeskripsi] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editJudul, setEditJudul] = useState("");
  const [editDeskripsi, setEditDeskripsi] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const articlesPerPage = 10;

  const fetchArticles = () => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/berita")
      .then((res) => {
        toast.success("Data berita berhasil dimuat!", {
          zIndex: 9999,
        });
        const sortedData = res.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setArticles(sortedData);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Data berita gagal dimuat!", {
          zIndex: 9999,
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      toast.error("Anda harus login terlebih dahulu!", {
        zIndex: 9999,
      });
      router.push("/admin");
    }

    fetchArticles();
  }, []);

  const handleNewTitleChange = (e) => {
    setNewJudul(e.target.value);
  };

  const handleNewContentChange = (e) => {
    setNewDeskripsi(e.target.value);
  };

  const handleAddArticle = () => {
    setIsLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/berita", {
        judul: newJudul,
        deskripsi: newDeskripsi,
        secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
      })
      .then(() => {
        toast.success("Berita berhasil ditambahkan!", {
          zIndex: 9999,
        });
        setNewJudul("");
        setNewDeskripsi("");
        setIsLoading(false);
        fetchArticles();
      })
      .catch(() => {
        toast.error("Gagal menambahkan berita!", {
          zIndex: 9999,
        });
        setIsLoading(false);
      });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditJudul(articles[index].judul);
    setEditDeskripsi(articles[index].deskripsi);
  };

  const handleSave = () => {
    const updatedArticles = [...articles];
    updatedArticles[editingIndex] = {
      ...updatedArticles[editingIndex],
      judul: editJudul,
      deskripsi: editDeskripsi,
    };
    setIsLoading(true);
    axios
      .put(
        process.env.NEXT_PUBLIC_API_URL + "/api/berita/" + updatedArticles[editingIndex]._id,
        {
          judul: editJudul,
          deskripsi: editDeskripsi,
          secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
        }
      )
      .then(() => {
        toast.success("Berita berhasil diupdate!", {
          zIndex: 9999,
        });
        setArticles(updatedArticles);
        setEditingIndex(null);
        setEditJudul("");
        setEditDeskripsi("");
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Gagal mengupdate berita!", {
          zIndex: 9999,
        });
        setIsLoading(false);
      });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditJudul("");
    setEditDeskripsi("");
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(process.env.NEXT_PUBLIC_API_URL + "/api/berita/" + id, {
        data: { secretKey: process.env.NEXT_PUBLIC_SECRET_KEY },
      })
      .then(() => {
        toast.success("Berita berhasil dihapus!", {
          zIndex: 9999,
        });
        setIsLoading(false);
        fetchArticles();
      })
      .catch(() => {
        toast.error("Gagal menghapus berita!", {
          zIndex: 9999,
        });
        setIsLoading(false);
      });
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
      <Hero heading="Berita Karampuang" subheading="Admin Dashboard" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:pr-4">
            {currentArticles.map((article, index) => (
              <Article
                key={index + indexOfFirstArticle}
                title={article.judul}
                content={article.deskripsi}
                date={article.createdAt}
                isEditing={index + indexOfFirstArticle === editingIndex}
                editTitle={editJudul}
                setEditTitle={setEditJudul}
                editContent={editDeskripsi}
                setEditContent={setEditDeskripsi}
                onEdit={() => handleEdit(index + indexOfFirstArticle)}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                onDelete={() => handleDelete(article._id)}
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
            <input
              value={newJudul}
              onChange={handleNewTitleChange}
              placeholder="Judul berita baru..."
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <textarea
              value={newDeskripsi}
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
