import React, { useEffect, useState } from 'react'
import AddIcon from "../assets/images/add.svg"

function Overview() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: "Finish ticket update", category: "Urgent", status: "incomplete" },
      { id: 2, title: "Create new ticket example", category: "New", status: "incomplete" },
      { id: 3, title: "Update ticket report", category: "Default", status: "complete" }
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Default");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle Add Modal
  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
    setNewTaskTitle("");
    setNewTaskCategory("Default");
  };

  // Toggle Update Modal
  const openUpdateModal = (task) => {
    setSelectedTask(task);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  // Toggle Delete Modal
  const openDeleteModal = (task) => {
    setSelectedTask(task);
    setIsDeleteConfirmModalOpen(true);
  };

  const closeDeleteModal = () => setIsDeleteConfirmModalOpen(false);

  // Add a new task
  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTaskTitle, category: newTaskCategory, status: "incomplete" }
    ]);
    toggleAddModal();
  };

  // Mark task as complete/incomplete
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task, status: task.status === "complete" ? "incomplete" : "complete"
    } : task));
  };

  // Update task
  const updateTask = () => {
    setTasks(tasks.map(task => task.id === selectedTask.id ? {
      ...task, title: selectedTask.title, category: selectedTask.category
    } : task));
    closeUpdateModal();
  };

  // Delete task
  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id !== selectedTask.id));
    closeDeleteModal();
  };

  return (
    <>
    <div className="four-card">
        <div className="first-card">
          <h4 className="first-card-title">Unresolved</h4>
          <strong className="first-card-number">60</strong>
        </div> 
        <div className="first-card">
          <h4 className="first-card-title">Overdue</h4>
          <strong className="first-card-number">16</strong>
        </div> 
        <div className="first-card">
          <h4 className="first-card-title">Open</h4>
          <strong className="first-card-number">43</strong>
        </div> 
        <div className="first-card">
          <h4 className="first-card-title">On hold</h4>
          <strong className="first-card-number">64</strong>
        </div> 
    </div>

    <div className="trends">
            <div className="trends-date">
                <div className="trends-date-time">
                <h3 className="trends-date-title">Today's trends</h3>
                <p className="trends-date-text">as of 25 May 2019, 09:41 PM</p>
                </div> 
                <div className="trends-date-days">
                    <div className="trends-date-color-1"></div>
                    <strong className="trends-date-day">Today</strong>
                    <div className="trends-date-color-2"></div>
                    <strong className="trends-date-day">Yesterday</strong>
                </div>
            </div>

            <div className="trends-number">
                <div className="trends-number-1">
                    <h4 className="trends-number-1-title">Resolved</h4>
                    <strong className="trends-number-1-quantity">449</strong>
                </div>
                <div className="trends-line"></div>
                <div className="trends-number-1">
                    <h4 className="trends-number-1-title">Received</h4>
                    <strong className="trends-number-1-quantity">426</strong>
                </div>
                <div className="trends-line"></div>
                <div className="trends-number-1">
                    <h4 className="trends-number-1-title">Average first response time</h4>
                    <strong className="trends-number-1-quantity">33m</strong>
                </div>
                <div className="trends-line"></div>
                <div className="trends-number-1">
                    <h4 className="trends-number-1-title">Average response time</h4>
                    <strong className="trends-number-1-quantity">3h 8m</strong>
                </div>
                <div className="trends-line"></div>
                <div className="trends-number-1">
                    <h4 className="trends-number-1-title">Resolution within SLA</h4>
                    <strong className="trends-number-1-quantity">94%</strong>
                </div>
            </div>
    </div>
    
    <div className='.double-card flex justify-between mt-[30px]'>
    <div className="tickets">
        <h3 className="tickets-title">Unresolved tickets</h3>
        <strong className="tickets-subtitle">Group: <span className="color-tickets">Support</span></strong>
        <strong className="view">View details</strong>

        <div className="request">
            <p className="request-text">Waiting on Feature Request</p>
            <strong className="request-number">4238</strong>
        </div>
        <div className="request">
            <p className="request-text">Awaiting Customer Response</p>
            <strong className="request-number">1005</strong>
        </div>
        <div className="request">
                    <p className="request-text">Awaiting Developer Fix</p>
                    <strong className="request-number">914</strong>
        </div>
        <div className="pending">
            <p className="pending-text">Pending</p>
            <strong className="pending-number">281</strong>
        </div>
    </div>

    <div>
    <div className="w-[546px] p-9 border rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <span className="text-blue-500 cursor-pointer">View all</span>
        </div>

        {/* Add Task Button */}
        <div className="mb-4">
          <button
            className="flex items-center text-gray-400"
            onClick={toggleAddModal}
          >
            <span className="mr-2">Create new task </span>
            <img src={AddIcon} alt="Add" width={24} height={24}/>
          </button>
        </div>

        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  checked={task.status === "complete"}
                  onChange={() => toggleTaskStatus(task.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={`ml-3 ${task.status === "complete" ? 'line-through' : ''}`}>
                  {task.title}
                </span>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${task.category === "Urgent" ? "bg-yellow-400" : task.category === "New" ? "bg-green-400" : "bg-gray-300"}`}>
                  {task.category}
                </span>
                <button onClick={() => openUpdateModal(task)} className="ml-3 text-blue-500">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => openDeleteModal(task)} className="ml-3 text-red-500">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Task Modal */}
        {isAddModalOpen && (
          <div className="modal-bg fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="mb-4">Add New Task</h3>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Task title"
                className="border p-2 w-full mb-4"
              />
              <select
                value={newTaskCategory}
                onChange={(e) => setNewTaskCategory(e.target.value)}
                className="border p-2 w-full mb-4"
              >
                <option value="Urgent">Urgent</option>
                <option value="New">New</option>
                <option value="Default">Default</option>
              </select>
              <button onClick={addTask} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Add Task
              </button>
              <button onClick={toggleAddModal} className="ml-4 text-gray-500">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Update Task Modal */}
        {isUpdateModalOpen && (
          <div className="modal-bg fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="mb-4">Update Task</h3>
              <input
                type="text"
                value={selectedTask?.title}
                onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
                placeholder="Task title"
                className="border p-2 w-full mb-4"
              />
              <select
                value={selectedTask?.category}
                onChange={(e) => setSelectedTask({ ...selectedTask, category: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="Urgent">Urgent</option>
                <option value="New">New</option>
                <option value="Default">Default</option>
              </select>
              <button onClick={updateTask} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Update Task
              </button>
              <button onClick={closeUpdateModal} className="ml-4 text-gray-500">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteConfirmModalOpen && (
          <div className="modal-bg fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="mb-4">Are you sure you want to delete this task?</h3>
              <button onClick={deleteTask} className="bg-red-500 text-white py-2 px-4 rounded-lg">
                Yes, Delete
              </button>
              <button onClick={closeDeleteModal} className="ml-4 text-gray-500">
                Cancel
              </button>
            </div>
          </div>
        )}
    </div>
    </div>
    
    </div>
    
    
    </>
  );
}


export default Overview


   