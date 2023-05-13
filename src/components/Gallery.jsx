import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useGlobalContext } from "../context/context";

const apiKey = import.meta.env.VITE_API_KEY;

const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}`;

const Gallery = () => {
	const { searchTerm } = useGlobalContext();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["images", searchTerm],
		queryFn: async () => {
			const response = await axios.get(`${url}&query=${searchTerm}`);
			const images = response.data.results;

			return images;
		},
	});

	if (isLoading) {
		return (
			<section className="loading" style={{ marginTop: "3rem" }}></section>
		);
	}

	if (isError) {
		return (
			<section className="image-container" style={{ marginTop: "3rem" }}>
				<h4>There was an error...</h4>
			</section>
		);
	}

	if (data.length < 1) {
		return (
			<section className="image-container" style={{ marginTop: "3rem" }}>
				<h4>No results found...</h4>
			</section>
		);
	}

	return (
		<section className="image-container">
			{data.map((item) => {
				const { id, alt_description, urls } = item;
				return (
					<img
						key={id}
						src={urls.regular}
						alt={alt_description}
						className="img"
					/>
				);
			})}
		</section>
	);
};
export default Gallery;
