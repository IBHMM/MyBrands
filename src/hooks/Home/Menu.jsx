import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function useNavbar() {
    const [search, setSearch] = useState(false);
    const menu = useSelector(state => state.home.menu)
    const dispatch = useDispatch()

    return {
        search, menu, setSearch, dispatch
    }
}