import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useAdmin() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [email, "isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/admin/${email}`);
      return data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
}
