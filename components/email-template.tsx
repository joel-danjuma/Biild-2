import * as React from "react";
// import {Html, } from "@react-email/components"

interface EmailTemplateProps {
  message: string;
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  firstName,
}) => (
  <div>
    <h1>Welcome,{firstName}!</h1>
    <p>{message}</p>
  </div>
);
