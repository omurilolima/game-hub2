import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

// install MS for calculating time: npm i ms@2.1.3
// install the type declaration for MS: npm i -D @types/ms

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
	useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24"),
		initialData: genres,
	});

export default useGenres;
