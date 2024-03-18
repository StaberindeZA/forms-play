"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Step2Data } from "./container"

const formSchema = z.object({
	companyName: z.string().min(2).max(50),
})

interface MultiStepStep2Props {
	handleSubmit: (data: Step2Data) => void;
	setStep: (step: number) => void;
}

export default function MultiStepStep2(props: MultiStepStep2Props) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			companyName: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		props.handleSubmit({companyName: values.companyName});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Company Name</FormLabel>
							<FormControl>
								<Input placeholder="Company Name" {...field} />
							</FormControl>
							<FormDescription>
								This is the company name!
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button onClick={() => {props.setStep(1)}}>Back</Button>
					<Button type="submit">Next</Button>
				</div>
			</form>
		</Form>
	)
}
