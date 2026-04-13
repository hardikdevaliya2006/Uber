import React from "react";
import { Link } from "react-router";

const Start = () => {
  return (
    <main className={"h-screen"}>
      <div
        className={
          "bg-[url(/public/hero-image.webp)] bg-cover bg-center flex flex-col h-full justify-between"
        }
      >
        <h2 className={"font-semibold text-3xl tracking-tighter p-4"}>Uber</h2>
        <div
          className={
            "w-full flex-col gap-4 flex items-center justify-center bg-white rounded-t-2xl px-6 py-6"
          }
        >
          <h4 className={"font-semibold text-2xl"}>
            Get Your First For Free Ride
          </h4>
          <button
            className={
              "bg-black py-2 w-full text-gray-50 text-xl font-semibold rounded-xl"
            }
          >
            <Link to="/login/user">Continue</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Start;
