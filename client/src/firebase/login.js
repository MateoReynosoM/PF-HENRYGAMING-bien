import {
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from './firebase config'

const provider = new GoogleAuthProvider()

export const singInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            const { displayName, email } = result.user
            let answer={
                userName:displayName,
                firstName:displayName,
                lastName:"",
                email:email,
                password:email.toLowerCase()
            }
            return answer          
            
        })
        .catch((error)=> {
        console.log(error)
        })
    }
