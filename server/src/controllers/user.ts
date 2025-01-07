import TryCatch from '../middlewares/TryCatch'
import { User } from '../models/User'
import bcrypt from "bcrypt"
import { Request, Response, NextFunction } from 'express'
import sendMail, { sendForgotMail } from "../middlewares/sendMail";

interface DecodedToken {
    user: {
        name: string,
        email: string,
        password: string,
    };
    otp: number;
}

export const register = TryCatch(async (req: Request, res: Response) => {
    const { email, name, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({
            message: "User Already exists."
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = {
        name,
        email,
        password: hashPassword
    }

    const otp = Math.floor(Math.random() * 1000000);

  const activationToken = jwt.sign(
    { user, otp },
    process.env.Activation_Secret as string,
    { expiresIn: "5m" }
  );

  const data = { name, otp };

  await sendMail(email, "E learning", data);

  res.status(200).json({
    message: "Otp sent to your mail",
    activationToken,
  });
})