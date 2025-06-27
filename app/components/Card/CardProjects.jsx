import Image from "next/image";
import Link from "next/link";

const CardProjects = ({ projectName, projectRelated, githubUrl, projectUrl, projectDescription, projectImageUrl, projectImageDescription, skills }) => {
  const handleGithubClick = (e) => {
    if (!githubUrl) {
      e.preventDefault();
      alert(`GitHub URL untuk project "${projectName}" masih kosong.`);
    }
  };

  const handleProjectUrlClick = (e) => {
    if (!projectUrl) {
      e.preventDefault();
      alert(`Live URL untuk project "${projectName}" masih kosong.`);
    }
  };

  return (
    <div className="max-w-[500px] bg-white p-5 drop-shadow-md hover:drop-shadow-hover duration-300 rounded-xl">
      <div className="flex justify-between">
        <div>
          <h2 className="text-color-main font-bold text-lg mt-2">🚀 {projectName}</h2>
          <p className="text-color-second text-sm -mt-2">{projectRelated}</p>
        </div>
        <div className="flex gap-2">
          <Link href={githubUrl || "#"} target="_blank" onClick={handleGithubClick}>
            <div className="w-max p-2 shadow-md rounded-lg hover:bg-gray-200 duration-300">
              <Image src="https://img.icons8.com/ios-filled/100/000000/github.png" alt="GitHub" width={22} height={22} loading="lazy" />
            </div>
          </Link>
          <Link href={projectUrl || "#"} target="_blank" onClick={handleProjectUrlClick}>
            <div className="w-max p-2 shadow-md rounded-lg hover:bg-gray-200 duration-300">
              <Image src="https://img.icons8.com/ios-filled/100/000000/globe.png" alt="Live Site" width={22} height={22} loading="lazy" />
            </div>
          </Link>
        </div>
      </div>

      <p className="text-color-main text-justify my-5">{projectDescription}</p>
      <Image src={projectImageUrl} alt={projectImageDescription} width={500} height={200} loading="lazy" sizes="(max-height: 100px;)" className="border rounded-xl" />
      <p className="text-color-main mt-4">🧰 {skills}</p>
    </div>
  );
};

export default CardProjects;
