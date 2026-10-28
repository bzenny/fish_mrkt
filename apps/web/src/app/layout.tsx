import type { ReactNode } from "react";
export const metadata = { title: "fishmrkt", description: "Fake Internet Cash Market — simulation only" };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body style={{margin:0,background:"#0d171c",color:"#f0f7f5",fontFamily:"system-ui,sans-serif"}}>{children}</body></html>; }
