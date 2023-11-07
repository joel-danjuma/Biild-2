import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <section className="w-full h-full dark:bg-slate-700 bg-black text-white">
      <footer className="w-full flex items-center justify-center pt-5">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://biild.vercel.app"
          title="Biild homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Biild</p>
        </Link>
      </footer>
    </section>
  );
};

export default Footer;
