const Container = ({ children, bgColor }) => {
  return <section className={`bg-${bgColor} px-10 py-14`}>{children}</section>;
};

export default Container;
