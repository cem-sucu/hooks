const Search = ({ SearchStr, searchHandle }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Chercher"
                value={SearchStr}
                onChange={searchHandle}
            />
        </>
    );
};

export default Search;
