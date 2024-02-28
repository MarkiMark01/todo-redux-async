const FilterText = ({ filterText, handleFilterText }) => {
  return (
    <section>
      <input
        placeholder="Filter tasks"
        value={filterText}
        onChange={handleFilterText}
      />
    </section>
  );
};
export default FilterText;
