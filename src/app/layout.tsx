import type { Metadata, Viewport } from "next";
import GlobalStyle from "./global-style";
import { Space_Grotesk } from "next/font/google";
import { personJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
        default: siteConfig.title,
        template: "%s | Portfolio Christopher Nafrere",
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
        canonical: "/",
    },
    authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.siteUrl,
        siteName: siteConfig.siteName,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: "/images/cockpit.webp",
                width: 1200,
                height: 630,
                alt: "Cockpit Gundam - Portfolio de Christopher Nafrere",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: ["/images/cockpit.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#101022",
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
    const jsonLd = JSON.stringify(personJsonLd);

    return (
        <html lang="fr">
            <body className={`${spaceGrotesk.className}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: jsonLd }}
                />
                <GlobalStyle />
                {children}
            </body>
        </html>
    );
}
