/* 
    This component is no longer necessary in this Next version,
    the issue with the client side rendering in the layout seems to be fixed.
*/

/* Pointing out Next that this is client code, 
    do not process it with ssr bc it was over layout component */
    
"use client";
import dynamic from "next/dynamic";

export const Toaster = dynamic(
    async () => {
        const { Toaster } = await import("react-hot-toast");
        return Toaster;
    },
    {
      ssr: false,  
    }
)
