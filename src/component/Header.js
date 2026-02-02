import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ff5200]">
      <div className="flex justify-between mr-20 ml-20 py-8 font-['Poppins']">
        <img
          className="w-40 h-12"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="swiggy"
        />

        <div className="font-bold text-white text-base flex gap-10 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Cooperate
          </a>

          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white py-3 px-4 rounded-xl inline-flex items-center gap-2"
          >
            Get the App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </a>

          <a
            href=""
            className="border border-black py-3 px-6 text-white bg-black rounded-2xl"
          >
            Sign in
          </a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <img
          className="h-110 w-60 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        <div className="text-5xl text-white font-bold max-w-[50%] container mx-auto text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div className="relative max-w-[50%] container mx-auto flex gap-5 mt-10">
          
          <div className="relative w-[40%]">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 23"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF5200]"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
              />
            </svg>

            
            <svg
              viewBox="0 0 20 21"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900/90"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117"
              />
            </svg>

            
            <input
              className="w-full bg-white py-4 pl-12 pr-12 rounded-2xl text-gray-600 font-semibold focus:outline-none"
              placeholder="Enter your delivery location"
            />
          </div>

          
          <input
            className="bg-white w-[60%] text-l px-6 py-4 rounded-2xl font-semibold "
            placeholder="Search for restaurant, item or more"
          />
        </div>

        <div className="max-w-[80%] container mx-auto flex">
          <Link to="/restaurant">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
          </Link>

          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
          </a>

          <a href="https://www.swiggy.com/dineout">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
          </a>
        </div>
      </div>
    </header>
  );
}
