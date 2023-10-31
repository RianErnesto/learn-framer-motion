import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Nome do Site",
  description: "Descrição do Site",
  openGraph: {
    type: "website",
    siteName: "Nome do Site",
    url: "http://localhost:3000",
  }
};

export default config;