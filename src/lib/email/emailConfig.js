import nodemailer from "nodemailer";
import { contactMailTemplate } from "./template/contact.email";
// import { ApiError } from "next/dist/server/api-utils";
import { ApiError } from "../utils/ApiError";

export async function sendEmail({ email, subject, message, name}){
  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
try{
const mailOption = await transporter.sendMail({
    from:process.env.EMAIL_USER,
    to:email,
    subject:`${subject}`,
    html: contactMailTemplate({ name, subject, message}),
});
return { messageId: mailOption.messageId};
}
catch(error){
  throw new ApiError(500,"Message not sent");
}
}
