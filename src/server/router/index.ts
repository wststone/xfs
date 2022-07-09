// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { studentRouter } from "./student";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("example.", exampleRouter)
	.merge("auth.", authRouter)
	.merge("student.", studentRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
