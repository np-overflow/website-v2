import React, { useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { activeProject } from "../store/popupStore";
import * as showcaseImages from "../images/showcase";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconX,
} from "@tabler/icons-react";

const ShowcasePopup = () => {
  interface Project {
    proj_name: string;
    proj_desc: string;
    tags: string[];
    username: string;
    img_folder: string;
    github: string;
    linkedin: string;
    live_view: string;
  }

  let savedProject = activeProject.get();
  const [showPopup, setShowPopup] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageList, setImageList] = useState<string[] | null>(null);

  const popupRef = useRef(null);

  useEffect(() => {
    const handler = (e: any) => {
      console.log("hi");
      setProject(e.detail);
      setShowPopup(true);
      setImageList(processImages(e.detail.img_folder));
    };

    document.addEventListener("showPopup", handler);
    return () => document.removeEventListener("showPopup", handler);
  }, []);

  function processImages(images: any) {
    return Object.entries(showcaseImages)
      .filter(([key]) => key.startsWith(images))
      .sort(([a], [b]) => {
        const numA = parseInt(a.split("_")[1]) || 0;
        const numB = parseInt(b.split("_")[1]) || 0;
        return numA - numB;
      })
      .map(([, imageModule]) => (imageModule as any).src);
  }

  function handleClose() {
    setShowPopup(false);
  }

  function handleBackgroundClose(e: any) {
    if (popupRef.current != e.target.closest(".popup-content")) {
      setShowPopup(false);
    }
  }

  function handleImageIndicator(e: any) {
    setImageIndex(e.currentTarget.dataset.index);
  }

  if (!showPopup || !project || !imageList) return null;

  return (
    <div>
      <div
        onClick={handleBackgroundClose}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 items-center justify-center py-6 ${showPopup ? "flex" : "hidden"}`}
      >
        <div
          ref={popupRef}
          className="popup-content bg-white dark:bg-[#0B0E11] rounded-lg p-6 max-w-3xl w-full mx-4 relative text-gray-900 dark:text-white max-h-full overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 id="popup-title" className="text-xl font-cubano">
              {project ? project.proj_name : "Title"}
            </h3>
            <button
              onClick={handleClose}
              id="close-popup"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded transition-colors"
            >
              <IconX></IconX>
            </button>
          </div>

          <div id="img-container" className="mb-4 overflow-hidden aspect-[3/2]">
            <img
              id="popup-img"
              className="w-full h-full object-cover rounded-lg transition-opacity duration-200"
              alt={`Image from ${project.proj_name}`}
              src={imageList[imageIndex]}
            />
          </div>

          <div
            id="image-indicators"
            className="flex flex-wrap gap-2 mb-4 justify-center"
          >
            {imageList.map((imageSrc: string, index) => (
              <img
                onClick={handleImageIndicator}
                className={`w-12 h-8 object-cover rounded cursor-pointer transition-transform hover:scale-110 ${index == imageIndex ? "ring-2 ring-white" : "opacity-70"}`}
                src={imageSrc}
                data-index={index}
                alt={`Image tab switch from ${project.proj_name}`}
              ></img>
            ))}
          </div>
          <p className="mb-2 text-3xl font-cubano"> {project.proj_name}</p>
          <p className="text-base mb-2 text-s text-gray-700 dark:text-gray-300">
            by {" "}
            <span className="text-gray-700 dark:text-white font-semibold">{project.username}</span>
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag: string) => (
              <div className="text-center font-inter font-semibold uppercase rounded-full py-0.5 px-3 text-[0.75rem] mb-1 bg-[#cf98f6] text-[#f9f1ff] border-[#bf29f2] dark:bg-[#2b085a89] dark:text-[#bf8bff] dark:border-[#6b25c6] border-[1px]">
                {tag}
              </div>
            ))}
          </div>
          <hr className="border-1 border-gray-800 my-4"></hr>

          <h3
            id="popup-about"
            className="tracking-wider font-bold font-inter text-md mb-0 text-gray-700 dark:text-gray-500"
          >
            ABOUT
          </h3>

          <div
            id="popup-desc"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            {project.proj_desc}
          </div>

          <hr className="border-1 border-gray-800 my-4"></hr>

          <div className="flex gap-4 mb-4 ">
            {project.github ? (
              <a
                href={project.github}
                className="border-2 border-neutral-400 dark:border-gray-800 dark:bg-gray-800 bg-neutral-200 dark:border-[] rounded-lg mt-2 flex items-center gap-2 hover:bg-neutral-300 dark:hover:bg-gray-700 cursor-pointer px-6 py-2"
              >
                <IconBrandGithub size={24} />
                <p>GitHub</p>
              </a>
            ) : null}

            {project.linkedin ? (
              <a
                href={project.linkedin}
                className="border-2 border-neutral-400 dark:border-gray-800 dark:bg-[#5067ffd8] bg-neutral-200 dark:border-[] rounded-md mt-2 flex items-center gap-2 hover:bg-neutral-300 dark:hover:bg-[#435bf7d8] cursor-pointer px-6 py-2"
              >
                <IconBrandLinkedin />
                <p>LinkedIn</p>
              </a>
            ) : null}
            {project.live_view ? (
              <a
                href={project.live_view}
                className="border-2 border-neutral-400 dark:border-gray-800 dark:bg-[#9137ffd8] bg-neutral-200 dark:border-[] rounded-md mt-2 flex items-center gap-2 hover:bg-neutral-300 dark:hover:bg-[#7f0fe7] cursor-pointer px-6 py-2"
              >
                <IconExternalLink />
                <p>Live View</p>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcasePopup;
