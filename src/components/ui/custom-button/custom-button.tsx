"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ postId }: { postId: number }) => {
  const router = useRouter();
  return (
    <button
      className="bg-blue-500 p-2 text-nowrap rounded-md text-white"
      onClick={() => router.push(`/post/${postId}`)}
    >
      View Details &rarr;
    </button>
  );
};

export default Button;
