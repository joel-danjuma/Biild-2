import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_3BxLwjp7_9pUHZwhKTvKfEQU81k4wCqXj");

export const sendEmail = async (formData: FormData) => {
  const name = (formData.get("name") as string) || "";
  const senderEmail = formData.get("email");
  const message = (formData.get("message") as string) || "";

  resend.emails.send({
    from: "Contact Form<onboarding@resend.dev>",
    to: "Leojjad@gmail.com",
    subject: "Message From Contact Form",
    // text: "" as string,
    reply_to: senderEmail as string,
    react: <EmailTemplate message={message} firstName={name} />,
  });
};
