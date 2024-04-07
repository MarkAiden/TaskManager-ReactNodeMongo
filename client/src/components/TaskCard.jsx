import { useTasks } from "../context/TasksContext";
import {Link} from 'react-router-dom'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col justify-center items-center">
            <header className="flex justify-between">
                <h1 className="text-lg font-bold px-3 py-1">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-1 py-1 rounded-md text-sm"
                        onClick={() => {
                            deleteTask(task._id);
                        }}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/tasks/${task._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded-md text-sm"
                    >
                        Edit
                    </Link>
                </div>
            </header>
            <p className="text-sm text-slate-300 py-1">{task.description}</p>
            <p className="text-sm">{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
        </div>
    );
}

export default TaskCard;
