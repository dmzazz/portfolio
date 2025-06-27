import Image from "next/image";

const CardSocialMedia = ({ icon, description, link }) => {
  return (
    <div className="w-52 bg-white p-5 drop-shadow-md rounded-xl hover:bg-gray-200 duration-300">
      <div className="w-max p-2 shadow-md rounded-lg">
        <Image src={icon} alt={icon} width={27} height={27} />
      </div>
      <p className="text-color-main mt-2">{description}</p>
      <p className="text-color-second text-sm">{link}</p>
    </div>
  );
};

export default CardSocialMedia;
