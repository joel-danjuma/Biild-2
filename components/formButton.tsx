import { experimental_useFormStatus as useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="flex mx-auto text-black bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
      {pending ? "Submitting Message ..." : "Send a Message"}
      
    </button>
  );
};

export default FormButton;
