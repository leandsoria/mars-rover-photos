/* eslint-disable react/prop-types */
function MainSection({ children, className }) {
  return (
    <section
      className={`min-h-screen flex flex-col w-full items-center px-6 md:px-12 py-12 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default MainSection;
