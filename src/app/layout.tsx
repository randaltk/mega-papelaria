import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/Topbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GlobalProvider } from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planeta das Canetas",
  description:
    "Explore o Planeta das Canetas, a melhor papelaria do Brasil! Descubra uma variedade incrível de canetas, papelaria premium e acessórios de escrita. Encontre produtos de alta qualidade para tornar cada momento de escrita único. Venha descobrir a arte de expressar suas ideias com estilo e elegância no Planeta das Canetas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta
        name="description"
        content="Explore o Planeta das Canetas, a melhor papelaria do Brasil! Descubra uma variedade incrível de canetas, papelaria premium e acessórios de escrita. Encontre produtos de alta qualidade para tornar cada momento de escrita único. Venha descobrir a arte de expressar suas ideias com estilo e elegância no Planeta das Canetas."
      ></meta>
      <body className={inter.className}>
        <GlobalProvider>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
