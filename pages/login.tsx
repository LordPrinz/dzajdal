import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }: any) => {
	Object.values(providers).map((provider: any) => {
		console.log(provider);
	});
	return (
		<div>
			{Object.values(providers).map((provider: any) => {
				return (
					<button
						key={provider.name}
						onClick={() => signIn(provider.id, { callbackUrl: "/" })}
					>
						Login with {provider.name}
					</button>
				);
			})}
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
