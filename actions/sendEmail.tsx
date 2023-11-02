"use server";
import { EmailTemplateProps } from "@/types/typings";

export const sendEmail = async (formData: FormData) => {
  const name = (formData.get("name") as string) || "";
  const senderEmail = formData.get("email")?.toString();
  const message = (formData.get("message") as string) || "";

  const email: EmailTemplateProps = {
    name,
    email: senderEmail,
    message,
  };

  try {
    await fetch(`${process.env.URL}/api/send`, {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return { error };
  }
};
