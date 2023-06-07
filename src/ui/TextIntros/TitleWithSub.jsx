/* eslint-disable react/prop-types */
function TitleWithSub({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h1 className="text-center">{title}</h1>
      <p className="text-2xl">{subtitle}</p>
    </div>
  );
}

export default TitleWithSub;
