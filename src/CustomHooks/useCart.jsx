import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export default function useCart() {
  const axiosSecure = useAxiosSecure();
  // tan stack query
  /**
   * ---------------------------
   * this note only for myself
   * ----------------------------
   * main name is data, i renamed data as cart and set cart inisital value is empty array (this is pure javaScript knowledge, not tanstackQuery)
   */
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
}
