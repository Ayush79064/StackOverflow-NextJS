import Navbar from "@/components/shared/Nabvar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-900 relative">
      <Navbar />
      <div className="flex">
        leftside
        <section className="min-h-screen flex flex-col flex-1 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        rightside
      </div>
      Toast
    </main>
  );
};

export default layout;
