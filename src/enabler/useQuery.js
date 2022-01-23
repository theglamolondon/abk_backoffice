import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function useQuery() {
  return new URLSearchParams(useLocation().search);
}