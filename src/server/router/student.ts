import { createRouter } from "./context";
import { z } from "zod";

export const studentRouter = createRouter()
	.query("hello", {
		input: z
			.object({
				text: z.string().nullish(),
			})
			.nullish(),
		resolve({ input }) {
			return {
				greeting: `Hello ${input?.text ?? "world"}`,
			};
		},
	})
	.query("getAll", {
		async resolve({ ctx }) {
			return await ctx.prisma.student.findMany();
		},
	})
	.mutation("create", {
		input: z.string(),
		async resolve({ ctx, input }) {
			// await ctx.prisma.student.create()
			return [];
		},
	});
