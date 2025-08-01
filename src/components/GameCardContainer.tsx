import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			_hover={{
				transform: "scale(1.03)",
				transition: "transform 0.15s ease-in-out",
			}}
			borderRadius={10}
			overflow="hidden"
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
