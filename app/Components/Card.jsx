import Button from "./Button";

const Card = () => {
  return (
    <div className="border w-[500px] h-[700px]">
      <h3 className="text-6xl font-bold text-neutralPrimary">
        Psychotherapy Services
      </h3>
      <p className="text-3xl text-neutralPrimary">
        Online psychotherapy for adults, inclusive of diverse identities, with
        sliding scale fees. Out-of-network provider.
      </p>
      <Button />
    </div>
  );
};

export default Card;
