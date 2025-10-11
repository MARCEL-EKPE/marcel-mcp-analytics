'use client'

import {
  useCopilotAction,
  CatchAllActionRenderProps,
} from '@copilotkit/react-core'

export function ToolRenderer() {
  useCopilotAction({
    name: '*', // Catch all MCP tool calls
    render: ({ name, status, args, result }: CatchAllActionRenderProps<[]>) => (
      <div className="p-2 border-b text-sm">
        <p><strong>{name}</strong> – {status}</p>
        <pre className="text-xs">{JSON.stringify(args, null, 2)}</pre>
        {result && <pre className="text-xs text-green-600">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    ),
  })
  return null
}