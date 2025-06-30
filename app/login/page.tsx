"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Your login logic here (API call, validation, etc.)
      console.log("Login clicked");

      // If login successful, redirect to home
      router.push("/home"); // or wherever you want to redirect
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Container className="mt-16 bg-white border border-gray-200 rounded-3xl shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-center mb-8">LOGIN</h1>
        <form action="">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full py-3 outline-none bg-transparent border border-gray-300 rounded-xl px-3"
          />
          <label htmlFor="" className="block  mt-4">
            Password:
          </label>
          <input
            type="password"
            placeholder="*****************"
            className="w-full py-3 outline-none bg-transparent border border-gray-300 rounded-xl px-3"
          />
          <Button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

//
