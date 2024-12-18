import { philosopher } from "./fonts";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-screen h-screen p-10">
      <main className=" flex flex-col gap-8 row-start-2 items-center justify-center  text-3xl">
        <h1 className={`${philosopher.className} mb-7`}>TODOLIST</h1>
        <div className="flex ">
          <input
            className="mr-2 text-lg text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            placeholder="Add a new task"
          />
          <button
            className=""
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
      </main>
      <footer className="">
        Go to nextjs.org →

      </footer>
    </div>
  );
}
