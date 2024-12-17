import { philosopher } from "./fonts";

export default function Home() {
  return (
    <div className="w-screen h-screen p-10">
      <main className=" flex flex-col gap-8 row-start-2 items-center justify-center  text-3xl">
        <h1 className={`${philosopher.className} `}>TODOLIST</h1>
        <div>

        </div>
      </main>
      <footer className="">
        Go to nextjs.org →

      </footer>
    </div>
  );
}
