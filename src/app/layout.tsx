import type { Metadata } from "next";
import GlobalStyle from "./global-style";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
    title: "Portfolio Christopher Nafrere - theme gundam",
    description: "Portfolio Christopher Nafrere, sur le thème des gundam",
};

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${spaceGrotesk.className}`}>
                <GlobalStyle />
                {children}
            </body>
        </html>
    );
}
