import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';

const ManageTasks = () => {
    const [allTasks, setAllTasks] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const navigate = useNavigate();

  const getAllTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: {
          status: filterStatus === "All" ? "" : filterStatus,
        },
      });

      setAllTasks(response.data?.tasks?.length > 0 ? response.data.tasks : []);

      // Map statusSummary data with fixed labels and order
      const statusSummary = response.data?.statusSummary || {};

      const statusArray = [
        { label: "All", count: statusSummary.all || 0 },
        { label: "To Do", count: statusSummary.todo || 0 },
        { label: "In Progress", count: statusSummary.inprogress || 0 },
        { label: "Completed", count: statusSummary.completed || 0 },
      ];
        setTabs(statusArray);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    };
  }

  const handleClick = (taskData) => {
    navigate('/admin/create-task', { state: { taskId: taskData._id } });
  };


  const handleDownloadReport = async () => {
  };

  useEffect(()=>{
    getAllTasks(filterStatus);
    return () => {};
  },[filterStatus]);


  return (
      <DashboardLayout activeMenu="Manage Tasks">
        <div className="my-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl md:text-xl font-medium">My Tasks</h2>
              

              <button
                className="flex lg:hidden download-btn"
                onClick={handleDownloadReport}
              >
                <LuFileSpreadsheet className="text-lg" />
                Download Report
              </button>
            </div>

            
          </div>
        </div>
      </DashboardLayout>
  )
}

export default ManageTasks
