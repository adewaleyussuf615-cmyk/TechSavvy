import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from './site-shell';
export const metadata: Metadata = { title: {default:'Techsavvy Ideas — Ideas. Technology. Solutions.',template:'%s | Techsavvy Ideas'}, icons:{icon:'/favicon.svg'}, description:'We conceive, develop and commercialize technology-driven solutions to real human, business and societal challenges.' };
export default function RootLayout({ children }: {children:React.ReactNode}) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><SiteHeader/>{children}<SiteFooter/></body></html>; }

