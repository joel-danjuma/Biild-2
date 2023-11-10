import { title } from "@/components/primitives";

// export const generateMetadata = async () => {
//   return {
//     title: "Expert Web Development Services | Biild",
//     description:
//       "Biild offers UI/UX design, API development, WEB3 apps, e-commerce, and more. Boost your online presence with our top-notch web development services.",
//   };
// };

export default function BlogPage() {
  return (
    <div className="w-full h-full top-0">
      <h1 className={title()}>Blog</h1>
    </div>
  );
}
