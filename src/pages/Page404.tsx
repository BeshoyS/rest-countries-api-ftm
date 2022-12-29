import { FC } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Page404: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="h-screen flex justify-center items-center text-center dark:bg-veryDarkBlue-300 dark:text-white">
        <section className="p-6">
          <h2 className="text-4xl mb-6 font-extraBold">Page Not Found</h2>
          <p className="text-sm text-darkGray dark:text-veryLightGray">
            this page is not available, please go back to the home page
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-veryDarkBlue-300 rounded-md text-white shadow-md p-2 dark:bg-darkBlue"
          >
            Home Page
          </button>
        </section>
      </main>
    </>
  );
};

export default Page404;
