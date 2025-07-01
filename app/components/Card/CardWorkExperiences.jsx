import Image from "next/image";

const CardWorkExperiences = ({ imageUrl, imageDescription, companyName, division, years, skills }) => {
  return (
    <div className="w-max bg-white p-5 text-black drop-shadow-md rounded-lg hover:bg-gray-200 duration-300">
      <div className="w-max p-2 shadow-md rounded-lg">
        <Image src={imageUrl} alt={imageDescription} width={50} height={50} className="rounded-lg" />
      </div>
      <div className="grid grid-rows-3 mt-4">
        <h2 className="font-bold">🏢 {companyName}</h2>
        <h3>💼 {division}</h3>
        <p className="text-sm font-light">📅 {years}</p>
      </div>
      <div className="mt-4">🧰 {skills}</div>
    </div>
  );
};

export default CardWorkExperiences;
