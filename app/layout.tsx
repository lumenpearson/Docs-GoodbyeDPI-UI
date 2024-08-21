import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
    title: "GoodbyeDPI/UI",
    metadataBase: new URL("https://goodbyedpi-ui.vercel.app/"),
    description: "",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
            suppressHydrationWarning
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar/>
            <main className="sm:container mx-auto w-[85vw] h-auto">
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}

export default RootLayout;
