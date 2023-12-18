import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Nav />
          {children}

          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
};

export default RootLayout;
