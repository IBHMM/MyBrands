import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPages } from "../../features/User/UserSlice";

export default function useNavbar() {
    const [search, setSearch] = useState(false);
    const menu = useSelector(state => state.home.menu)
    const wishlistL = useSelector(state => state.user.wishlist).length;
    const dispatch = useDispatch()

    return {
        search, menu, setSearch, dispatch, setPages, wishlistL
    }
}