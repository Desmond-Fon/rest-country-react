import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <button
        name=""
        className="bg-white dark:bg-darkBlue dark:text-whiteLMDM text-sm w-[150px] py-3 px-2 border-none mb-8 text-veryDarkBlueLM rounded-[4px] shadow-md "
      >
        <Link to="/">
          <span className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-3 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Back
          </span>
        </Link>
      </button>
    </>
  );
};

export default Button;
