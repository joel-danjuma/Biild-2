import { EmailTemplateProps } from "@/types/typings";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>{message}</p>
  </div>
);
