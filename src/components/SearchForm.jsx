import { useGlobalContext } from "../context/context";

const SearchForm = () => {
	const { searchTerm, setSearchTerm } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		const inputValue = e.target.elements.search.value;
		if (!inputValue) return console.log("no value");
	};

	return (
		<section>
			<h1 className="title">unsplash images</h1>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					placeholder="beach"
					className="form-input search-input"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button className="btn">search</button>
			</form>
		</section>
	);
};
export default SearchForm;
