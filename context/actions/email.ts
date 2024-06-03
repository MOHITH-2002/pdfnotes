"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail() {


    try {
      await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: "Hello world",
      html: `<p>Your 2FA code: ${"token"}</p>`
        });
      return ;
    } catch (error) {
console.log(error);
    }
}