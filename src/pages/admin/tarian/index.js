import NavbarAdmin from "@/Components/NavbarAdmin";
import Hero from "@/Components/Hero";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { LoadingContext } from "@/Context/LoadingContext";

const Tarian = ({
  title,
  videoId,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  isEditing,
  editTitle,
  setEditTitle,
  editVideoId,
  setEditVideoId,
}) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

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
        <input
          value={editVideoId}
          onChange={(e) => setEditVideoId(e.target.value)}
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="YouTube Video ID"
        />
      ) : (
        <iframe
          width="560"
          height="315"
          src={youtubeEmbedUrl}
          className="mt-2 w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
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

export default function AdminTarian() {
  const router = useRouter();
  const [tarians, setTarians] = useState([]);
  const [newJudul, setNewJudul] = useState("");
  const [newVideoId, setNewVideoId] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editJudul, setEditJudul] = useState("");
  const [editVideoId, setEditVideoId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const tariansPerPage = 10;

  const fetchTarians = () => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/tarian")
      .then((res) => {
        console.log(res.data);
        setTarians(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tarians", err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      alert("Anda harus login sebagai admin terlebih dahulu");
      router.push("/admin");
    }

    fetchTarians();
  }, []);

  const handleNewTitleChange = (e) => {
    setNewJudul(e.target.value);
  };

  const handleNewVideoIdChange = (e) => {
    setNewVideoId(e.target.value);
  };

  const handleAddTarian = () => {
    setIsLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/tarian", {
        title: newJudul,
        videoId: newVideoId,
        secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
      })
      .then((res) => {
        console.log(res.data);
        setNewJudul("");
        setNewVideoId("");
        setIsLoading(false);
        fetchTarians();
      })
      .catch((err) => {
        console.error("Failed to add tarian", err);
        setIsLoading(false);
      });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditJudul(tarians[index].title);
    setEditVideoId(tarians[index].videoId);
  };

  const handleSave = () => {
    const updatedTarians = [...tarians];
    updatedTarians[editingIndex] = {
      ...updatedTarians[editingIndex],
      title: editJudul,
      videoId: editVideoId,
    };
    setIsLoading(true);
    axios
      .put(
        process.env.NEXT_PUBLIC_API_URL + "/api/tarian/" + updatedTarians[editingIndex]._id,
        {
          title: editJudul,
          videoId: editVideoId,
          secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
        }
      )
      .then((res) => {
        console.log(res.data);
        setTarians(updatedTarians);
        setEditingIndex(null);
        setEditJudul("");
        setEditVideoId("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to update tarian", err);
        setIsLoading(false);
      });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditJudul("");
    setEditVideoId("");
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(process.env.NEXT_PUBLIC_API_URL + "/api/tarian/" + id, {
        data: { secretKey: process.env.NEXT_PUBLIC_SECRET_KEY },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        fetchTarians();
      })
      .catch((err) => {
        console.error("Failed to delete tarian", err);
        setIsLoading(false);
      });
  };

  const totalPages = Math.ceil(tarians.length / tariansPerPage);
  const indexOfLastTarian = currentPage * tariansPerPage;
  const indexOfFirstTarian = indexOfLastTarian - tariansPerPage;
  const currentTarians = tarians.slice(indexOfFirstTarian, indexOfLastTarian);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <NavbarAdmin />
      <Hero heading="Tarian Karampuang" subheading="Admin Dashboard" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:pr-4">
            {currentTarians.map((tarian, index) => (
              <Tarian
                key={index + indexOfFirstTarian}
                title={tarian.title}
                videoId={tarian.videoId}
                isEditing={index + indexOfFirstTarian === editingIndex}
                editTitle={editJudul}
                setEditTitle={setEditJudul}
                editVideoId={editVideoId}
                setEditVideoId={setEditVideoId}
                onEdit={() => handleEdit(index + indexOfFirstTarian)}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                onDelete={() => handleDelete(tarian._id)}
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
              placeholder="Judul tarian baru..."
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              value={newVideoId}
              onChange={handleNewVideoIdChange}
              placeholder="YouTube Video ID..."
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleAddTarian}
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
