import React from "react";
import ToastContext from "./toastContainer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContext>{children}</ToastContext>
      </body>
    </html>
  );
}
