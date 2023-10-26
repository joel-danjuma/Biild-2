import { DividerProps } from "@/types";

const Divider = ({ props }: DividerProps) => {
  return (
    <section className="relative lg:flex hidden">
      <div className="w-full h-full flex justify-between absolute -top-10 px-4 ">
        {props.map((img, index) => (
          <img.image key={index} size={img.size} />
        ))}
      </div>
    </section>
  );
};

export default Divider;
