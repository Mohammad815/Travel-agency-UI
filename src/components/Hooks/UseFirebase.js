import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
            
            }).catch((error) => {
                
            });
        }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
              
            }
          });
        },[])

        const logout = () => {
            signOut(auth)
            .then(() => {
              setUser({});
            })
            .catch((err) => {
              console.log(err);
            });
        }

  return (
    signWithGoogle,logout
  )
}

export default UseFirebase
