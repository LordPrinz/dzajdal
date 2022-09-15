import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }: any) => {
	return (
		<div className="bg-main-primary min-h-[100vh] flex items-center justify-center flex-col">
			<Image src={"/favicon.svg"} height={150} width={150} alt="Dzajlopment logo" />
			<div className="mt-11 mr-3">
				{Object.values(providers).map((provider: any) => {
					return (
						<button
							className="bg-main-green p-6 text-[1.6rem] rounded-full px-8 text-main-font"
							key={provider.name}
							onClick={() => signIn(provider.id, { callbackUrl: "/" })}
						>
							Login with {provider.name}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
