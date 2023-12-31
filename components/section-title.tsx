import { ReactNode } from "react";

const SectionTitle = (props: { title: string; children: ReactNode }) => {
  return (
    <div
      className={`flex w-full flex-col pt-20 pb-20 z-10 items-center justify-center text-center
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight dark:text-black text-gray-800 lg:leading-tight lg:text-5xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <h3 className="max-w-2xl py-4 text-lg leading-normal dark:text-black text-gray-800 lg:text-xl xl:text-xl">
          {props.children}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
