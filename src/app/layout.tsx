import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Footer from "./components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Aishi Dua | UX Portfolio",
  description: "UX • Product • Design",
};

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={spaceGrotesk.className}>
//       <body className={spaceGrotesk.className}>{children}</body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className={spaceGrotesk.className}>
        {/* Wrap content so footer goes to bottom */}
        <div className="flex min-h-screen flex-col">
          {/* PAGE CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
});





