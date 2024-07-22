import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#EDF1FA] dark:bg-[#1D2333] shadow-sm  w-full z-20  border-t ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 font-bold sm:text-center dark:text-gray-400">
          © 2024 Stefan Traciu . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
