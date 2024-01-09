const Card = ({ bg, title, description }) => {
  return (
    <div
      className={`order w-full lg:w-1/2 h-[500px] md:h-[725px] px-10 py-14 ${bg} bg-cover`}
    >
      <h3 className="text-4xl lg:text-6xl font-bold text-neutralPrimary timeless">
        {title}
      </h3>
      <p className="text-3xl text-neutralPrimary mt-32 quicksand">
        {description}
      </p>
    </div>
  );
};

export default Card;
