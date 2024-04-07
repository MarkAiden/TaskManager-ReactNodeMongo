import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

    return context;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task)
            console.log(res);
            // Actualizar las tareas después de crear una nueva tarea
            getTasks();
        } catch (error) {
            console.error(error);
            // Mostrar un mensaje de error al usuario
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            if (res.status === 204) {
                // Actualizar las tareas después de eliminar una tarea
                setTasks(tasks.filter((task) => task._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task);
            getTasks(); // Cargar las tareas después de actualizar la tarea
        } catch (error) {
            console.error(error);
        }
    };    

    return (
        <TaskContext.Provider 
            value={{
                tasks, 
                createTask, 
                getTasks,
                deleteTask,
                getTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}