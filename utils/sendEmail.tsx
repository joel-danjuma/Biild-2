import { EmailTemplateProps } from "@/types";

export const sendEmail = async (formData: FormData) => {
  const name = (formData.get("name") as string) || "";
  const senderEmail = formData.get("email")?.toString();
  const message = (formData.get("message") as string) || "";

  const email: EmailTemplateProps = {
    name,
    email: senderEmail,
    message,
  };

  await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
