'use client';

import { useState } from "react";
import MultiStepStep1 from "./step1";
import MultiStepStep2 from "./step2";
import MultiStepStep3 from "./step3";
import { redirect } from "next/navigation";

export interface Step1Data {
	username: string;
}

export interface Step2Data {
	companyName: string;
}

export interface Step3Data {
	favoriteJohn: string;
	favoriteJane: string;
}

export default function MultiStepContainer() {
	const [step, setStep] = useState(1);
	const [step1Data, setStep1Data] = useState<Step1Data>({
		username: '',
	})
	const [step2Data, setStep2Data] = useState<Step2Data>({
		companyName: '',
	})
	const [step3Data, setStep3Data] = useState<Step3Data>({
		favoriteJohn: '',
		favoriteJane: '',
	})

	function step1Submit(data: Step1Data) {
		setStep1Data(data);
		setStep(2);
	}
	function step2Submit(data: Step2Data) {
		setStep2Data(data);
		setStep(3);
	}
	function step3Submit(data: Step3Data) {
		setStep3Data(data);
		console.log({step1Data, step2Data, step3Data: data})
	}

	return (
		<>
			{
				step === 1 && (
					<div>
						<h2>Step 1</h2>
						<MultiStepStep1 handleSubmit={step1Submit}/>
					</div>
				)
			}
			{
				step === 2 && (
					<div>
						<h2>Step 2</h2>
						<MultiStepStep2 handleSubmit={step2Submit} setStep={setStep} />
					</div>
				)
			}
			{
				step === 3 && (
					<div>
						<h2>Step 3</h2>
						<MultiStepStep3 handleSubmit={step3Submit} setStep={setStep} />
					</div>
				)
			}
		</>
	)
}
