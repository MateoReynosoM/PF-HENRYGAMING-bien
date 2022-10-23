import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.config";

const provider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        const { displayName, email, photoURL } = result.user;
        let answer = {
            success: true,
            userName: displayName,
            firstName: displayName,
            lastName: "Google",
            email: email,
            password: email.toLowerCase(),
        };
        return answer;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            errorMessage: `Error ${error.code}: ${error.message}`,
        };
    }
};
