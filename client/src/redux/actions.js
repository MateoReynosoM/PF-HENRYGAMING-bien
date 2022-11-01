import { createAction } from "@reduxjs/toolkit";
import { singInWithGoogle } from "../firebase/firebaseLogin";
import axios from "axios";
//Local Cart
export const addItemLocalCart = createAction("addItemLocalCart");
export const decrementItemLocalCart = createAction("decrementItemLocalCart");
export const incrementItemLocalCart = createAction("incrementItemLocalCart");
export const removeItemLocalCart = createAction("removeItemLocalCart");
export const deleteLocalCart = createAction("deleteLocalCart");
export const reloadStorage = createAction("reloadStorage");
export const isAdmin = createAction("isAdmin");
export const displayFilters = createAction("displayFilters");
export const saveFilteredData = createAction("saveFilteredData");
export const notFound = createAction("notFound");
export const hasFiltered = createAction("hasFiltered");
export const sorting = createAction("sorting");
export const saveSearchedData = createAction("saveSearchedData");
export const reset = createAction("reset");
export const setToken = createAction("setToken");
export const deleteToken = createAction("deleteToken");
export const googleSignIn = async () => {
    const res = await singInWithGoogle();
    if (!res.success) {
        sessionStorage.removeItem("token");
        alert(res.errorMessage);
    }
    const { email, firstName, lastName, password, userName, photoURL } = res;
    console.log(res);
    let loginError = null;
    try {
        const loginAttempt = await axios.get(
            `/verifyLogin?email=${email}&password=${password}`
        );
        console.log(loginAttempt);
        const token = loginAttempt.data.token;
        return token;
    } catch (error) {
        loginError = true;
        console.log(error.response.data);
    }
    if (loginError) {
        const registerRequirements = {
            email: email,
            password: email.toLowerCase(),
            firstName: firstName,
            lastName: lastName,
            userName: userName,
        };
        try {
            console.log("first");
            const registerAttempt = await axios.post(
                `/postUser`,
                registerRequirements
            );
            const token = registerAttempt.data.token;
            return token;
        } catch (error) {
            return { error: error, isError: true };
        }
    }
};
