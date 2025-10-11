'use client'

import { useEffect } from 'react'
import { useCopilotChat } from '@copilotkit/react-core'

function McpServerManager() {
const { setMcpServers } = useCopilotChat()

useEffect(() => {
const url = process.env.NEXT_PUBLIC_COMPOSIO_MCP_URL || ''
if (!url) return


setMcpServers([
{
     endpoint: url
 }
])
}, [setMcpServers])


return null;
}

export default McpServerManager;