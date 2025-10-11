'use client'

import './globals.css'
import '@copilotkit/react-ui/styles.css'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotSidebar } from '@copilotkit/react-ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const runtimeUrl = process.env.NEXT_PUBLIC_COPILOT_CLOUD_API_KEY

  return (
    <html lang="en">
      <body>
        <CopilotKit 
         publicApiKey="/api/copilotkit"
         runtimeUrl={runtimeUrl!}>
          <CopilotSidebar>
            {children}
          </CopilotSidebar>
        </CopilotKit>
      </body>
    </html>
  )
}