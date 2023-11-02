import { experimental_useFormStatus as useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      {pending ? "Submitting Message ..." : "Lets Talk"}
    </button>
  );
};

export default FormButton;
