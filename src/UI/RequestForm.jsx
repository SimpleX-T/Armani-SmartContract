import { useReducer } from "react";

import Input from "./Input";
import { useApp } from "../Hooks/AppProvider";

const initialState = {
	requestName: "",
	description: "",
	recipientName: "",
	recipientAddress: "",
	requiredBalance: "",
	fileAttachment: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "update_requestName":
			return { ...state, requestName: action.payload };
		case "update_description":
			return { ...state, description: action.payload };
		case "update_recipientName":
			return { ...state, recipientName: action.payload };
		case "update_recipientAddress":
			return { ...state, recipientAddress: action.payload };
		case "update_requiredBalance":
			return { ...state, requiredBalance: action.payload };
		case "update_fileAttachment":
			return { ...state, fileAttachment: action.payload };
		default:
			return state;
	}
}

function RequestForm({ onSubmit }) {
	const { walletAddress } = useApp();
	const [state, dispatch] = useReducer(reducer, initialState);

	const {
		requestName,
		description,
		recipientName,
		recipientAddress,
		requiredBalance,
	} = state;

	const handleInputChange = (field, value) => {
		dispatch({ type: `update_${field}`, payload: value });
	};

	return (
		<div className='border border-white/60 w-full md:w-1/2 rounded-lg px-4 py-8'>
			<div className='mb-4'>
				<h2 className='text-white text-lg font-medium mb-4'>
					Create new proof of balance request
				</h2>
				<p className='text-white/70 text-sm'>
					Create a new balance verification request. This item will
					become publicly available for other users to discover.
				</p>
			</div>

			<form
				className='bg-white p-4 rounded-lg'
				onSubmit={onSubmit}>
				<Input
					title='Enter fund request name'
					label='Name of the request:'
					placeholder='.1 ETH balance request verification'
					value={requestName}
					onChange={(value) =>
						handleInputChange("requestName", value)
					}
				/>
				<Input
					title='Enter Description'
					label='Additional description for the request:'
					placeholder='Value'
					value={description}
					onChange={(value) =>
						handleInputChange("description", value)
					}
				/>
				<Input
					title='Recipient Name'
					label='Name of the receiver'
					placeholder='Recipient Name'
					value={recipientName}
					onChange={(value) =>
						handleInputChange("recipientName", value)
					}
				/>
				<Input
					title='Recipient Address'
					label='Known address used for authentication and ownership. You should collect the desired address from the recipient before making this request'
					placeholder='Value'
					value={recipientAddress}
					onChange={(value) =>
						handleInputChange("recipientAddress", value)
					}
				/>
				<Input
					title='Required Balance (ETH)'
					label='Required balance. Uses native Lisk Sepolia currency'
					placeholder='Value'
					value={requiredBalance}
					onChange={(value) =>
						handleInputChange("requiredBalance", value)
					}
				/>
				<Input
					title='Add attachment'
					label='Optional attachment for the recipient to download/access from the verification page.'
					placeholder='Value'
					type='file'
					onChange={(value) =>
						handleInputChange("fileAttachment", value)
					}
				/>
				<button
					type='submit'
					className='mt-4 text-white px-4 py-2 rounded'
					style={{
						cursor: walletAddress ? "pointer" : "no-drop",
						background: walletAddress ? "#070e35" : "#070e3580",
					}}
					disabled={walletAddress ? false : true}>
					{walletAddress
						? "Create Request"
						: "Connect Wallet to proceed"}
				</button>
			</form>
		</div>
	);
}
export default RequestForm;
