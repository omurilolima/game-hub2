import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import theme from "./theme";
import "./index.css";

// install React Query: npm i @tanstack/react-query@4.28
// install React Query Devtools: npm i @tanstack/react-query-devtools@4.28
// import QueryClient, QueryClientProvider
// import ReactQueryDevtools (blue icon)

// create an instance of QueryClient
//wrap the App with  <QueryClientProvider client={queryClient}>
// add a <ReactQueryDevtools /> to our component tree

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
