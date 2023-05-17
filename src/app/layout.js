import { TaskProvider } from "@/context/TasksContext";
// import { Toaster } from "./Toaster";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  );
}
