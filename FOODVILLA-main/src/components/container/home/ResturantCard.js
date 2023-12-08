import { IMG_URL } from "../../../utils/Config";
const ResturantCard = ({ name, locality, areaName, cloudinaryImageId }) => {
  return (
    <div className="flex w-80 h-96 flex-col rounded-xl bg-[#eaf1ec] bg-clip-border text-black shadow-md">
      <div className="overflow-hidden shadow-lg rounded-xl">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={`${name} image not found`}
        />
      </div>

      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {`Area: ${areaName}, Locality: ${locality}`}
        </p>
      </div>
      <div className="p-6 pt-0 ">
        <button
          data-ripple-light="true"
          type="button"
          className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]"
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default ResturantCard;
