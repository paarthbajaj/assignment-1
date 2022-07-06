import { useProduct } from "../../context/ProductContext";
import "./Sidebar.css";

export const Sidebar = () => {
  const { productState, productDispatch } = useProduct();
  const { productsList } = productState;
  const sizesArray = productsList.map((product) => product.size);
  const companiesArray = productsList.map((product) => product.company);
  const gendersArray = productsList.map((product) => product.gender);
  return (
    <div className="sidebar">
      <h2>FILTER</h2>
      <div className="filters flex-row">
        <div className="price-sort flex-column">
          <div>Sort by price</div>
          <label for="low_to_high">
            <input
              type="radio"
              id="low_to_high"
              name="sort-by-price"
              onInput={() => productDispatch({ type: "LOW_TO_HIGH" })}
            />
            Low to High
          </label>
          <label for="high_to_low">
            <input
              type="radio"
              id="high_to_low"
              name="sort-by-price"
              onInput={() => productDispatch({ type: "HIGH_TO_LOW" })}
            />
            High to Low
          </label>
        </div>
        <div className="size-sort flex-column">
          <div>Size</div>
          {sizesArray
            .filter((p, index) => sizesArray.indexOf(p) === index)
            .map((size) => (
              <label for={`${size}-size`}>
                <input
                  type="radio"
                  id={`${size}-size`}
                  name="sort-by-size"
                  value={size}
                  onInput={(e) =>
                    productDispatch({
                      type: "SORT_BY_SIZE",
                      payload: e.target.value,
                    })
                  }
                />
                {size}
              </label>
            ))}
        </div>
        <div className="brand-sort flex-column">
          <div>Brand</div>
          {companiesArray
            .filter((p, index) => companiesArray.indexOf(p) === index)
            .map((company) => (
              <label for={`${company}-company`}>
                <input
                  type="radio"
                  id={`${company}-company`}
                  name="sort-by-company"
                  value={company}
                  onInput={(e) =>
                    productDispatch({
                      type: "SORT_BY_COMPANY",
                      payload: e.target.value,
                    })
                  }
                />
                {company}
              </label>
            ))}
        </div>
        <div className="gender-sort flex-column">
          <div>Ideal for</div>
          {gendersArray
            .filter((p, index) => gendersArray.indexOf(p) === index)
            .map((gender) => (
              <label for={`${gender}-gender`}>
                <input
                  type="radio"
                  id={`${gender}-gender`}
                  name="sort-by-gender"
                  value={gender}
                  onInput={(e) =>
                    productDispatch({
                      type: "SORT_BY_GENDER",
                      payload: e.target.value,
                    })
                  }
                />
                {gender}
              </label>
            ))}
        </div>
        <button
          className="clear-filter-btn cursor-pointer"
          onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};
