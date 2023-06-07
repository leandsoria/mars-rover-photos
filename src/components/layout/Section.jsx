/* eslint-disable react/prop-types */
function Section({ children, className }) {
  return (
    <section
      className={`flex flex-col w-full justify-center items-center px-6 md:px-12 py-12 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
