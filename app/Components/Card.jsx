const Card = ({ bg }) => {
  return (
    <div className={`order w-full md:w-1/2 h-[725px] px-10 py-14 ${bg}`}>
      <h3 className="text-4xl md:text-6xl font-bold text-neutralPrimary timeless">
        Psychotherapy Services
      </h3>
      <p className="text-3xl text-neutralPrimary mt-32 quicksand">
        Online psychotherapy for adults, inclusive of diverse identities, with
        sliding scale fees. Out-of-network provider.
      </p>
    </div>
  );
};

export default Card;
