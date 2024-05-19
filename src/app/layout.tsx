import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Free URL Shortener | Shorten and Track Your Links Instantly",
  description:
    "Shorten your URLs quickly and effortlessly with our free URL shortener. Track clicks, manage your links, and enhance your online presence with ease.",
  keywords:
    "URL shortener, free URL shortener, shorten URL, link shortener, URL tracker, track clicks, manage links, short links, online URL shortener",
  openGraph: {
    title: "Best Free URL Shortener | Shorten and Track Your Links Instantly",
    description:
      "Shorten your URLs quickly and effortlessly with our free URL shortener. Track clicks, manage your links, and enhance your online presence with ease.",
    url: "https://linkhub.pankri.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://linkhub.pankri.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free URL Shortener",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free URL Shortener | Shorten and Track Your Links Instantly",
    description:
      "Shorten your URLs quickly and effortlessly with our free URL shortener. Track clicks, manage your links, and enhance your online presence with ease.",
    site: "@yourtwitterhandle",
    images: [
      {
        url: "https://linkhub.pankri.com/images/twitter-card.jpg",
        alt: "Free URL Shortener",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
        <meta
          name="twitter:image:alt"
          content={metadata.twitter.images[0].alt}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
