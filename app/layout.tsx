// app/layout.tsx — Javari HR
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari HR | Javari by CR AudioViz AI',
  description: 'AI HR management',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari HR" appColor="#0891b2" appEmoji="👥" appDesc="AI HR management">{children}</AppShell></body></html>)
}
