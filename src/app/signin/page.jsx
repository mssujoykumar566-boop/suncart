"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGithub, GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log({name,image,email,password})

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    // console.log({data,error})
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Signin successfull");
    }
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <Card className="border mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4 sm:px-6 py-8 mt-5 shadow-lg rounded-2xl">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4">
        Sign Up
      </h1>

      <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type={isShowPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
          className="relative"
        >
          <Label>Password</Label>

          <Input placeholder="Enter your password" />

          <span
            className="absolute top-9 right-3 cursor-pointer text-gray-500"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
          </span>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="w-full sm:w-auto">
            <Check />
            Submit
          </Button>

          <Button type="reset" variant="secondary" className="w-full sm:w-auto">
            Reset
          </Button>
        </div>
      </Form>

      <div className="text-center my-4 text-gray-400">Or</div>

      <Button
        onClick={handleGoogleSignin}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <GrGoogle /> Sign In With Google
      </Button>

      <div className="text-center my-4 text-gray-400">Or</div>

      <Button
        onClick={handleGithubSignin}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <GrGithub /> Sign In With Github
      </Button>
    </Card>
  );
}
