import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Союз преимуществ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={'scroll-smooth'}>
        <link rel="icon" href="/assets/images/favicon-icon.svg"/>
        <body
            className={`${raleway.variable} antialiased `}
        >
        <SmoothScrolling>
            {children}
        </SmoothScrolling>
        </body>
        </html>
    );
}
