import React, { useEffect, useState } from "react";
import useGetCategories from "../../../api/useGetCategories";
import axiosInstance from "../../../services/api";
import { ClipLoader } from "react-spinners";
import { useTheme } from "../../../contexts/ThemeContext";
interface AddWordData {
  arabe: string;
  english: string;
  latin_darija_v1: string;
  latin_darija_v2: string;
  latin_darija_v3: string;
  latin_darija_v4: string;
  latin_darija_v5: string;
  arabic_darija_v1: string;
  arabic_darija_v2: string;
  arabic_darija_v3: string;
  arabic_darija_v4: string;
  arabic_darija_v5: string;
  category_id: number;
}
const initialState = {
  arabe: "",
  english: "",
  latin_darija_v1: "",
  latin_darija_v2: "",
  latin_darija_v3: "",
  latin_darija_v4: "",
  latin_darija_v5: "",
  arabic_darija_v1: "",
  arabic_darija_v2: "",
  arabic_darija_v3: "",
  arabic_darija_v4: "",
  arabic_darija_v5: "",
  category_id: 0,
};
const AddWord = ({
  setStep,
}: {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [wordData, setWordData] = useState<AddWordData>(initialState);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const { getCategories, categories, loadingCategories, errorCategories } =
    useGetCategories();
  const dataCategories = categories?.data;

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setWordData((prevState) => ({
      ...prevState,
      [name]: name === "category_id" ? Number(value) : value,
    }));
  };
  // const { addWord ,error,sucess,loading} = useAddWord();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setStep) {
      setStep((prev) => prev + 1);
    }
    setSuccess(false);
    setError(false);
    setLoading(true);
    try {
      // addWord(wordData);
      // const response = await axiosInstance.post("/employee/words", wordData);
      // setSuccess(true);
      // console.log("Word added successfully:", response.data);
      // setTimeout(() => {
      //   setSuccess(false);
      // }, 3000);
      // // Reset form fields only if successful
      // setWordData(initialState);
    } catch (error) {
      setSuccess(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.error("Failed to add word", error);
    } finally {
      setLoading(false);
    }
  };

  const { theme } = useTheme();
  const {
    arabe,
    english,
    latin_darija_v1,
    latin_darija_v2,
    latin_darija_v3,
    latin_darija_v4,
    latin_darija_v5,
    arabic_darija_v1,
    arabic_darija_v2,
    arabic_darija_v3,
    arabic_darija_v4,
    arabic_darija_v5,
    category_id,
  } = wordData;

  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div
          className={`w-full space-y-8 ${
            theme === "dark" ? "bg-gray-700" : "bg-white"
          } p-10`}
        >
          <div>
            <h2
              className={` text-center text-3xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ajouter Word
            </h2>
          </div>
          {error && (
            <div className="text-red-500 text-center p-2 bg-red-100 rounded">
              error adding words
            </div>
          )}
          {success && (
            <div className="text-green-500 text-center p-2 bg-green-100 rounded">
              Word added successfully!
            </div>
          )}
          {errorCategories && (
            <div className="text-red-500 text-center p-2 bg-red-100 rounded">
              {errorCategories.toString()}
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="english"
                  name="english"
                  placeholder="English word"
                  value={english}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 rounded-tl-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  required
                  spellCheck={true}
                />
                <input
                  type="text"
                  id="arabe"
                  name="arabe"
                  placeholder="Arabic word"
                  value={arabe}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 rounded-tr-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  required
                  spellCheck={true}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="latin_darija_v1"
                  placeholder="Latin Darija v1"
                  value={latin_darija_v1}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  required
                  spellCheck={true}
                />
                <input
                  type="text"
                  name="latin_darija_v2"
                  placeholder="Latin Darija v2"
                  value={latin_darija_v2}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="latin_darija_v3"
                  placeholder="Latin Darija v3"
                  value={latin_darija_v3}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
                <input
                  type="text"
                  name="latin_darija_v4"
                  placeholder="Latin Darija v4"
                  value={latin_darija_v4}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="latin_darija_v5"
                  placeholder="Latin Darija v5"
                  value={latin_darija_v5}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
                <input
                  type="text"
                  name="arabic_darija_v1"
                  placeholder="Arabic Darija v1"
                  value={arabic_darija_v1}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="arabic_darija_v2"
                  placeholder="Arabic Darija v2"
                  value={arabic_darija_v2}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
                <input
                  type="text"
                  name="arabic_darija_v3"
                  placeholder="Arabic Darija v3"
                  value={arabic_darija_v3}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="arabic_darija_v4"
                  placeholder="Arabic Darija v4"
                  value={arabic_darija_v4}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
                <input
                  type="text"
                  name="arabic_darija_v5"
                  placeholder="Arabic Darija v5"
                  value={arabic_darija_v5}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-1/2 px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  spellCheck={true}
                />
              </div>
              {loadingCategories ? (
                <div className="flex justify-center items-center py-2">
                  <ClipLoader size={20} color={"#4F46E5"} />
                </div>
              ) : (
                <select
                  name="category_id"
                  value={category_id}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    theme === "dark"
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  } placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  required
                >
                  <option value="">Select a category</option>
                  {dataCategories && Array.isArray(dataCategories)
                    ? dataCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    : null}
                </select>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-info hover:bg-info focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                disabled={loading || loadingCategories}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {loading ? (
                    <ClipLoader size={20} color={"#ffffff"} />
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </span>
                {loading ? "Adding..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWord;
