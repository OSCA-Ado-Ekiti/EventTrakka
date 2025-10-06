import Navbar from "@components/Navbar.tsx";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<>
			<Navbar />
			<div className="mt-28">
				<div className="flex lg:mx-10">
					<div className="lg:flex hidden relative justify-center items-center bg-green-950 text-white p-10 rounded-[69px] w-5/12">
						<div className="absolute bg-[#EDFCF433] h-10 w-48 rounded-full transform -rotate-45 top-4 -right-10"></div>
						<div className="absolute bg-[#EDFCF433] h-10 w-48 rounded-full transform -rotate-45 top-10 -right-20"></div>
						<div>
							<h1 className="text-3xl font-bold leading-tight">
								Welcome to EventTrakka, your ultimate event management solution.
							</h1>
							<p className="mt-4 text-lg">
								Streamline event organization and execution by getting proper
								information using our powerful web app.
							</p>
						</div>

						<div className="absolute bg-[#EDFCF433] h-10 w-48 rounded-full transform -rotate-45 bottom-4 -left-10"></div>
						<div className="absolute bg-[#EDFCF433] h-10 w-48 rounded-full transform -rotate-45 bottom-10 -left-20"></div>
					</div>
					<div className="flex flex-col justify-center p-10 lg:w-7/12 w-full bg-white">
						<h2 className="lg:text-2xl text-lg font-bold text-green-800 mb-6">
							Community Leads Sign Up
						</h2>
						<form className="space-y-4">
							<div className="lg:flex lg:space-x-4 ">
								<input
									type="text"
									placeholder="Leads Name"
									className="flex-grow w-full p-3 border mb-4 lg:mb-0 rounded"
								/>
								<input
									type="text"
									placeholder="Leads Mobile Number"
									className="flex-grow w-full p-3 border rounded"
								/>
							</div>
							<input
								type="email"
								placeholder="Leads Email Address"
								className="w-full p-3 border rounded"
							/>
							<input
								type="email"
								placeholder="Community Email Address"
								className="w-full p-3 border rounded"
							/>
							<input
								type="text"
								placeholder="Community"
								className="w-full p-3 border rounded"
							/>

							<input
								type="password"
								placeholder="Password"
								className="w-full p-3 border rounded"
							/>
							<input
								type="password"
								placeholder="Confirm Password"
								className="w-full p-3 border rounded"
							/>

							<p className="text-sm text-gray-600">
								By proceeding, I agree to EventTrakka's{" "}
								<Link to="#" className="text-green-800 font-semibold">Terms of Use</Link> and
								acknowledge that I have read the{" "}
								<Link to="#" className="text-green-800 font-semibold">Privacy Policy</Link>.
							</p>
							<div></div>
							<button className="w-full bg-green-700 text-white py-3 rounded">
								Sign up
							</button>
						</form>
						<p className="mt-4 text-center text-sm">
							Already have an account?
							{""}
							<Link to="/login" className="text-green-800 font-semibold">
								{" "}
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
