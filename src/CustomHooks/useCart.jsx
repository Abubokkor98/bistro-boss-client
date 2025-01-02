import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

export default function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // tan stack query
  /**
   * ---------------------------
   * this note only for myself
   * ----------------------------
   * main name is data, i renamed data as cart and set cart inisital value is empty array (this is pure javaScript knowledge, not tanstackQuery)
   */
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
}
