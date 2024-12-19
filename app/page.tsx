
'use client'
import { philosopher } from "./fonts";
import Image from "next/image";
import { useState, useEffect } from "react";

type Task = {
  id: number
  text: string
  completed: boolean
}

export default function Home() {


  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState<string>("")

  useEffect(() => {
    const taskJson = localStorage.getItem("tasks")
    if (taskJson) {
      setTasks(JSON.parse(taskJson));
    }
  }, []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    if (text.trim() === "") return;
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };
  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(taskInput);
    }
  };
  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center">
      <main className="flex flex-col gap-8 row-start-2 w-3/5 items-center justify-center  text-3xl">
        <h1 className={`${philosopher.className} mb-7 text-4xl`}>TODOLIST</h1>
        <div className="flex ">
          <input
            className="mr-2 text-lg text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task"
          />
          <button
            onClick={() => addTask(taskInput)}
          >
            <Image
              className="dark:invert"
              src="/add-svgrepo-com.svg"
              alt="Add task"
              width={50}
              height={50}
            />
          </button>
        </div>
        <ul className="mt-10 w-full bg-red flex flex-col gap-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between  border-2 border-black-100 shadow py-2 px-5">
              <span className="text-xl mr-2">{task.text} </span>
              <div className="flex gap-4 ">
                <button onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? (
                    <Image
                      className="dark:invert"
                      src="/check-box-svgrepo-com.svg"
                      alt="Task completed"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      className="dark:invert"
                      src="/check-box-unchecked-svgrepo-com.svg"
                      alt="Task completed"
                      width={20}
                      height={20}
                    />
                  )}
                </button>
                <button onClick={() => deleteTask(task.id)}> <Image
                  className="dark:invert"
                  src="/delete-1487-svgrepo-com.svg"
                  alt="Task completed"
                  width={20}
                  height={20}
                /></button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="mt-6 mb-5">
        <a href="https://github.com/IdrissCisse/TodoList-">
          <Image
            src="/github-icon.svg"
            alt="Github link"
            width={35}
            height={35}
          />
        </a>
      </footer>
    </div>
  );
}
