import { IconSvgProps } from "@/types";

type DividerProps = {
  props: {
    image: React.FC<IconSvgProps>;
    size: number;
  }[];
};

const Divider = ({ props }: DividerProps) => {
  return (
    <section className="relative">
      <div className="w-full h-full flex justify-between absolute -top-10 ">
        {props.map((img, index) => (
          <img.image key={index} size={img.size} />
        ))}
      </div>
    </section>
  );
};

export default Divider;
