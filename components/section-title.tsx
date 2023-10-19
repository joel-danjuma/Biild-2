import { ReactNode } from "react";

const SectionTitle = (props: { title: string; children: ReactNode }) => {
  return (
    <div
      className={`flex w-full flex-col lg:mt-20 lg:mb-20 mb-10 mt-10 z-10 items-center justify-center text-center
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight dark:text-white text-gray-800 lg:leading-tight lg:text-5xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal dark:text-white text-gray-500 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
