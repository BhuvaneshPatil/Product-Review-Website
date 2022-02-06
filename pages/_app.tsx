import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { Layout } from "../components";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
const breakpoints = createBreakpoints({
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
});
const theme = extendTheme({ breakpoints });
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ChakraProvider theme={theme}>
					<Layout>
						<Head>
							<title>Disecto - One place to get products</title>
						</Head>
						<Component {...pageProps} />
					</Layout>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
