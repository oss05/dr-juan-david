const ReferenceCard = ({ title, link }) => {
  return (
    <div class="p-4 lg:w-1/3 bg-paleBlue rounded-lg">
      <div class="h-full px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center flex flex-col justify-between">
        <h2 class="tracking-widest font-bold text-5xl text-bold text-neutralPrimary mb-1 timeless">
          {title}
        </h2>
        <a href={link} target="_blank">
          <button
            type="submit"
            className="text-neutralPrimary border border-neutralPrimary border-3 py-5 px-6 focus:outline-none rounded-lg text-4xl mt-7 w-80 mx-auto timeless"
          >
            See more
          </button>
        </a>
      </div>
    </div>
  );
};

export default ReferenceCard;
