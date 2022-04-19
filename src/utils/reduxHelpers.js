import { useSelector, useDispatch } from "react-redux";

const useStore = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const store = { state, dispatch };

  return store;
};

export { useStore };
