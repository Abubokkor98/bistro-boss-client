import React from "react";
import useAuth from "../../../CustomHooks/useAuth";
import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaTruck, FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

export default function AdminHome() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats={} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl mb-4">
        <span>Hi, welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <SiCodechef className="text-4xl"></SiCodechef>
          </div>
          <div className="stat-title">Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <FaTruck className="text-4xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.totalOrder}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}
