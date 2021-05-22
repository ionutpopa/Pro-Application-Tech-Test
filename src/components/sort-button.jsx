const SortButton = ({ sortData }) => {
    return (
        <button
            type="button"
            className="btn btn-secondary"
            onClick={sortData}
          >
            Sort Alphabetically
          </button>
    )
}

export default SortButton;