// eslint-disable-next-line react/prop-types
function FilterGroupBackground({ children }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-8 max-w-4xl mx-auto bg-[rgba(0,0,0,.75)] mt-4 p-8 rounded-lg">
      {children}
    </div>
  );
}

export default FilterGroupBackground;
