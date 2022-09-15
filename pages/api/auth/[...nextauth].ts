import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token: any) {
	try {
		spotifyApi.setAccessToken(token.access_token);
		spotifyApi.setRefreshToken(token.refresh_token);

		const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

		return {
			...token,
			accessToken: refreshedToken.access_token,
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
			refreshedToken: refreshedToken.refresh_token ?? token.refresh_token,
		};
	} catch (err) {
		console.error(err);

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

export default NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
			authorization: LOGIN_URL,
		}),
	],
	secret: process.env.JWT_SECRET,
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, account, user }) {
			if (account && user) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccountId,
					accessTokenExpires: account.expires_at! * 1000,
				};
			}

			if (Date.now() < (token as any).accessTokenExpires) {
				return token;
			}

			return await refreshAccessToken(token);
		},
		async session({ session, token }) {
			(session.user as any).accessToken = token.accessToken;
			(session.user as any).refreshToken = token.refreshToken;
			(session.user as any).username = token.username;

			return session;
		},
	},
});
