import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const data = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Contact Gundam",
        text: `nom: ${name}\nemail: ${email} \n${message}`,
    });

    return Response.json(data);
}
