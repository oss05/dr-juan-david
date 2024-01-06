const Container = ({ children, bgColor, bg, className }) => {
  return (
    <section className={`${bgColor} ${bg}`}>
      <div className={`container px-6 md:px-0 mx-auto py-14 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Container;
