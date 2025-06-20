import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black border-b-2 border-b-gray-400 h-24 text-white flex justify-between items-center p-4 pr-12 font-bold absolute z-50 top-0 w-1/1">
      <div className="flex gap-6 text-3xl items-center">
        <NavLink>
          <svg
            width="69"
            height="50"
            viewBox="0 0 69 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.9063 75.2223C52.5942 72.7758 69 63.9863 69 41.2603C69 20.5822 53.2802 6.80984 41.9764 0.482518C39.4639 -0.924422 36.5294 0.924141 36.5294 3.71848V10.8626C36.5294 16.4982 34.0698 26.7845 27.2347 31.0639C23.7441 33.2486 19.9694 29.9774 19.5473 25.9911L19.1982 22.7161C18.7924 18.9095 14.766 16.5998 11.6082 18.9212C5.92994 23.0834 0 30.3917 0 41.2564C0 69.0474 21.4671 76 32.1986 76C32.8264 76 33.4812 75.9805 34.1631 75.9414C28.8623 75.5076 20.2941 72.342 20.2941 62.1026C20.2941 54.0908 26.3621 48.678 30.9729 46.04C32.2149 45.3365 33.6639 46.255 33.6639 47.6423V49.9482C33.6639 51.7068 34.3742 54.4621 36.0586 56.3458C37.9662 58.4797 40.7628 56.2442 40.986 53.4382C41.0591 52.5549 41.9845 51.9921 42.78 52.4377C45.3817 53.9032 48.7059 57.0298 48.7059 62.1026C48.7059 70.1065 44.1235 73.788 39.9063 75.2223Z"
              fill="url(#paint0_linear_20_380)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_20_380"
                x1="0"
                y1="38"
                x2="69"
                y2="38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#833AB4" stop-opacity="0.87" />
                <stop offset="0.5" stop-color="#FD1D1D" stop-opacity="0.9" />
                <stop offset="1" stop-color="#FCB045" />
              </linearGradient>
            </defs>
          </svg>
        </NavLink>
        <NavLink
          to="/jyots"
          className={({ isActive }) =>
            `${isActive ? "underline" : "no-underline"}`
          }
          end
        >
          All Jyot
        </NavLink>
        <NavLink
          to="/jyots/new"
          className={({ isActive }) =>
            `${isActive ? "underline" : "no-underline"}`
          }
        >
          New Jyot
        </NavLink>
      </div>
      <div className="text-3xl flex gap-4">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `${isActive ? "underline" : "no-underline"}`
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${isActive ? "underline" : "no-underline"}`
          }
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
}
