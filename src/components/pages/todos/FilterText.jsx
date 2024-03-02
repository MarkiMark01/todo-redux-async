import styles from "./todos.module.scss";

const FilterText = ({ filterText, handleFilterText }) => {
  return (
    <section className={styles.filterBox}>
      <input
        placeholder="Filter your tasks"
        value={filterText}
        onChange={handleFilterText}
        className={styles.filterBox__filter}
      />
    </section>
  );
};
export default FilterText;
