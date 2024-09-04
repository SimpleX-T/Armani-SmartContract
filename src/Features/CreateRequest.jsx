import { useState } from "react";
import RequestForm from "../UI/RequestForm";
import ShareRequest from "../UI/ShareRequest";

const steps = [
	{
		id: 1,
		title: "create",
		desc: "Create a balance verification request. A shareable link is generated that you can send to the other party.",
	},
	{
		id: 2,
		title: "share",
		desc: "Recipient accesses the verification link and connects with a known address. The recipient proves ownership and verifies that the funds belong to them.",
	},
	{
		id: 3,
		title: "verify",
		desc: "Requester can review the completed verification event on the underlying smart contract.",
	},
];

function StepsCard({ step }) {
	return (
		<div className='text-white text-ld mb-8'>
			<p className='text-lg font-medium mb-2 block capitalize'>
				<span className='mr-2'>{step.id}.</span>
				{step.title}
			</p>
			<span className='text-lg text-white/90'>{step.desc}</span>
		</div>
	);
}

function StepsIndicator({ currentStep }) {
	return (
		<div className='md:hidden flex flex-col items-center'>
			<div className='flex items-center'>
				{steps.map((step, index) => (
					<div
						key={step.id}
						className='flex items-center'>
						<div
							className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
								currentStep >= step.id
									? "bg-[#070e53] text-white border-green-500"
									: "bg-white text-green-500 border-green-500"
							}`}>
							{step.id}
						</div>
						{index < steps.length - 1 && (
							<div
								className={`h-1 w-16 ${
									currentStep > step.id
										? "bg-green-500"
										: "bg-gray-300"
								}`}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

function CreateRequest() {
	const [currentStep, setCurrentStep] = useState(1);
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form submitted with values:");

		setCurrentStep((step) => (step === steps.length ? 0 : step + 1));
	};

	return (
		<section className='flex md:flex-row flex-col w-full mx-auto md:w-5/6 translate-y-[100px] gap-8 p-6'>
			<div className='w-full hidden md:block md:w-[25%] md:min-w-56 bg-gradient-to-t from-white/10 to-white/15 p-6 mx-auto backdrop-blur-md rounded-lg'>
				<h2 className='text-white text-xl mb-6'>Steps</h2>
				<div className='w-full flex-col'>
					{steps.map((step) => (
						<StepsCard
							step={step}
							key={step.id}
						/>
					))}
				</div>
			</div>
			<StepsIndicator currentStep={currentStep} />

			{currentStep === 1 && <RequestForm onSubmit={handleSubmit} />}
			{currentStep === 2 && <ShareRequest onSubmit={handleSubmit} />}
		</section>
	);
}

export default CreateRequest;
