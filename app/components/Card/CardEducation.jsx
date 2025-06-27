import Link from "next/link";
import React from "react";

const CardEducation = ({ educationUrl, educationName, major, batch }) => {
  let descriptionList = [
    <>
      <span className="text-blue-500">Developed a mobile application Smart Fire Evacuation</span> System using <span className="text-blue-500">React Native</span> and <span className="text-blue-500">IoT sensors</span> to provide real-time
      evacuation guidance in emergency situations.
    </>,
    <>
      <span className="text-blue-500">Built a web-based Warehouse Management System</span> using the <span className="text-blue-500">MERN stack</span> as part of the <span className="text-blue-500">Project Management course</span>.
    </>,
    <>
      Applied <span className="text-blue-500">ERP concepts using Odoo</span> to simulate real-world enterprise operations and workflows.
    </>,
    <>
      Designed <span className="text-blue-500">user interfaces and prototypes using Figma in the Design Thinking course</span>, focusing on usability and user research.
    </>,
    <>
      <span className="text-blue-500">Modeled business processes with flowcharts and swimlane diagrams to support system design and documentation.</span>
    </>,
  ];

  return (
    <div className="bg-white max-w-full w-max p-5 drop-shadow-lg">
      <div className="grid grid-cols-1 gap-2">
        <Link href={educationUrl} target="_blank">
          <div className="w-max border-b px-4 py-2 shadow-sm hover:bg-gray-200 rounded-lg duration-300">
            <p className="text-color-main">🎓 {educationName}</p>
          </div>
        </Link>
        <div className="w-max border-b px-4 py-2 shadow-sm rounded-lg">
          <p className="text-color-main text-sm md:text-base">
            📚 {major} <span className="text-sm">{batch}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEducation;
