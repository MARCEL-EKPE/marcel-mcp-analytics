'use client'

import { CopilotChat } from '@copilotkit/react-ui'
import McpServerManager from './components/McpServerManager'
import { ToolRenderer } from './components/ToolRenderer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold mb-4">Marcel's AI Expliots</h1>

      {/* Connects to MCP */}
      <McpServerManager />

      {/* Chat UI */}
      <div className="w-full max-w-2xl border rounded-lg shadow-md bg-white">
        <CopilotChat
          instructions="You are connected to my Gmail via MCP. You can read and send emails."
          className="flex-grow rounded-lg w-full"
        />
          <ToolRenderer />
      </div>
    </main>
  )
}