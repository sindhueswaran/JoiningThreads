import Link from "next/link";
import MenuData from "@/data/menu.json"

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-500 py-5 border-t-4 border-jt-primary">
        <nav className="text-center md:flex justify-center py-5">
          {MenuData.map((data, index) => {
            return (
              <li key={{ index }} className="list-none mx-2">
                <Link
                  href={data.url}
                  className="text-gray-100 hover:text-gray-300" 
                >
                  {data.name}
                </Link>
              </li>
            );
          })}
        </nav>
        <p className="text-center text-gray-100 font-thin text-xs">
          Property of Joining Threads © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
