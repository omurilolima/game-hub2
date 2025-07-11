import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import theme from "./theme";

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
				<RouterProvider router={router} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
