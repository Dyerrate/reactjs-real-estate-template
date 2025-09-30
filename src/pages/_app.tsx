import { AppProvider } from "@/components/RealEstateContext";
import { HeroUIProvider } from "@heroui/react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </HeroUIProvider>
  );
}
