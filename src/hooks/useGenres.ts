import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

// install MS for calculating time: npm i ms@2.1.3
// install the type declaration for MS: npm i -D @types/ms

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24"),
		initialData: genres,
	});

export default useGenres;
