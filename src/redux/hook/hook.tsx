import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootState, AppDispatch} from "../store/reduxStore.tsx";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;


// To Learn more, visit (https://redux.js.org/tutorials/typescript-quick-start).
