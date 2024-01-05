const Container = ({ children, bgColor, className }) => {
  return (
    <section className={`${bgColor} py-14`}>
      <div className={`container mx-auto ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
