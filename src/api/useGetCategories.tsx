import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/api";

const useGetCategories = () => {
  const { data: categories, isLoading: loadingCategories, error: errorCategories, refetch: getCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axiosInstance.get('/categories');
      return response.data;
    }
  });

  return { getCategories, categories, loadingCategories, errorCategories };
};

export default useGetCategories;