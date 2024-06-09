import { useContext } from "react";
import { PaginationContext } from "../../context/pagination";

const usePagination = () => useContext(PaginationContext);

export { usePagination }