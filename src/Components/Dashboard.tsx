import React, { useState, useEffect } from 'react';
import axiosInstance from "../services/api";
import NavBar from './NavBar';
import { ThemeProviderContext, useTheme } from '../contexts/ThemeContext';
import Header from "../pages/dashboard/components/Header.tsx";

interface Word {
  id: number;
  arabe: string;
  english: string;
  arabic_darija_v1: string;
  arabic_darija_v2: string;
  arabic_darija_v3: string;
  arabic_darija_v4: string;
  arabic_darija_v5: string;
  latin_darija_v1: string;
  latin_darija_v2: string;
  latin_darija_v3: string;
  latin_darija_v4: string;
  latin_darija_v5: string;
  category: {
    id: number;
    name: string;
  };
  createdBy: {
    id: number;
    username: string;
  };
  created_at: string;
  updated_at: string;
  to_do: boolean;
}

const DashboardContent: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;
  const { theme } = useTheme();

  useEffect(() => {
    fetchWords();
  }, [currentPage]);

  const fetchWords = async () => {
    try {
      const response = await axiosInstance.get(`/employee/words`, {
        params: {
          'page[number]': currentPage,
          'page[size]': pageSize,
        },
      });
      setWords(response.data.data);
      setTotalPages(response.data.meta.totalPages);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100'} min-h-screen flex flex-col`}>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-grow">
        <NavBar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold mb-6">Word Dashboard</h1>
          <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-50'}`}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arabic</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arabic Darija V1</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latin Darija V1</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Do</th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} divide-y divide-gray-200`}>
                  {words.map((word) => (
                    <tr key={word.id} className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{word.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.arabe}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.english}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.arabic_darija_v1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.latin_darija_v1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.category.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{word.createdBy.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(word.created_at).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${word.to_do ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {word.to_do ? 'Yes' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {words.length === 0 && (
                    <tr>
                      <td colSpan={9} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-500'} text-sm font-medium hover:bg-gray-50`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === page
                      ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                      : `${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-500'} hover:bg-gray-50`
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-500'} text-sm font-medium hover:bg-gray-50`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <ThemeProviderContext>
      <DashboardContent />
    </ThemeProviderContext>
  );
};

export default Dashboard;