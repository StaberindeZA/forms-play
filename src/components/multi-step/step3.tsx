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
import { Step3Data } from "./container"

const formSchema = z.object({
	favoriteJohn: z.string().min(2).max(50),
	favoriteJane: z.string().min(2).max(50),
})

interface MultiStepStep3Props {
	handleSubmit: (data: Step3Data) => void;
	setStep: (step: number) => void;
}

export default function MultiStepStep3(props: MultiStepStep3Props) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			favoriteJohn: "",
			favoriteJane: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		props.handleSubmit({
			favoriteJohn: values.favoriteJohn,
			favoriteJane: values.favoriteJane,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="favoriteJohn"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Favorite John</FormLabel>
							<FormControl>
								<Input placeholder="Bogil" {...field} />
							</FormControl>
							<FormDescription>
								Who's the bestest John of them all?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="favoriteJane"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Favorite Jane</FormLabel>
							<FormControl>
								<Input placeholder="Doe" {...field} />
							</FormControl>
							<FormDescription>
								Like...from Tarzan?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button onClick={() => { props.setStep(2) }}>Back</Button>
					<Button type="submit">Finish</Button>
				</div>
			</form>
		</Form>
	)
}
