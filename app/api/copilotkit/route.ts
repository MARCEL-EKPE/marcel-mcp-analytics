import {
    CopilotRuntime,
    OpenAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

import { NextRequest } from "next/server";

// 1. Initialize the adapter (CopilotKit will use your env vars)
const serviceAdapter = new OpenAIAdapter();

// 2. Create the runtime
const runtime = new CopilotRuntime();


// 3. Handle Copilot requests
export const POST = async (req: NextRequest) => {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime,
        serviceAdapter,
        endpoint: "/api/copilotkit",
    });

    return handleRequest(req);
};