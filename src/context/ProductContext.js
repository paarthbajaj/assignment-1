import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const productReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {
          ...state,
          productsList: action.payload,
          filteredProducts: action.payload,
        };
      case "LOW_TO_HIGH":
        return {
          ...state,
          filteredProducts: state.productsList.sort((a, b) => a.cost - b.cost),
        };
      case "HIGH_TO_LOW":
        return {
          ...state,
          filteredProducts: state.productsList.sort((a, b) => b.cost - a.cost),
        };

      case "SORT_BY_SIZE":
        return {
          ...state,
          filteredProducts: state.productsList.filter(
            (product) => product.size === action.payload
          ),
        };
      case "SORT_BY_COMPANY":
        return {
          ...state,
          filteredProducts: state.productsList.filter(
            (product) => product.company === action.payload
          ),
        };
      case "SORT_BY_GENDER":
        return {
          ...state,
          filteredProducts: state.productsList.filter(
            (product) => product.gender === action.payload
          ),
        };
      case "CLEAR_FILTER":
        window.location.reload(false);
        return { ...state, filteredProducts: state.productsList };
    }
  };
  const initialState = {
    productsList: [],
    filteredProducts: [],
    filterType: {
      sortBy: "",
    },
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
