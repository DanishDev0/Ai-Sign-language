import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "@/store/Providers";


export const metadata = {
  title: "SignLab AS",
  description: "Sign AI language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
       <Providers>{children}</Providers>
      </body>
    </html>
  );
}
