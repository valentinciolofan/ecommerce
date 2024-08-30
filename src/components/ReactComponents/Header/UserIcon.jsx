// src/components/UserIcon.jsx
import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { checkSession } from '../../UserContext';
import { UserIconDropDown, UserFavoriteListIconDropDown, UserCartIconDropDown } from './Modal';
import '../mystyle.css'

export default function UserIcon({session, handleLogOut}) {
    const [showDropdown, setShowDropdown] = useState(false);

    
    useEffect(() => {
         const fetchUserData = async () => {
            await checkSession();
         }
         fetchUserData();
    }, []);

    
    const onMouseOver = async (e) => {
         if (session) {
            setShowDropdown(true);
            console.log(session);
         }
    }
    
    const onMouseOut = () => {
        setShowDropdown(false);
    };

    const onClick = () => {
        if (session?.hasOwnProperty('name')) { 
            console.log(session.hasOwnProperty('name'));
            window.location.href = '/profile';
        } else {
            console.log(session?.hasOwnProperty('name')); 
            window.location.href = '/login';
        }
    }
    
    return (
         <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={{ position: 'relative', display: 'inline-block' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 32 32">
                <path
                    fill="black"
                    d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
                />
            </svg>
            {showDropdown && <UserIconDropDown session={session} handleLogOut={handleLogOut}/>}
        </div>
    );
}




// /*
// ways of making this work:
// fetching into astro and then pass the result as prop



// */



// export default function userIcon() {
//     // verific state-ul sesiunii
//     // daca e logat ii afisez nume, view my profile si logout
//     // daca nu e logat atunci il redirectioneaza catre /login page
//     // { id: 1, name: Valentin, email: valentin.ciolofan02@e-uvt.ro }

//     const [userSession, setUserSession] = useState(null);
    
//     const idk = () => {
//         useEffect(() => {
//             const fetchData = async () => {
//                 try {
//                     const reqSession = await fetch('http://localhost:3000/check-session');
//                     const data = await reqSession.json();
//                     console.log(data);
//                     if (data === true) {
//                         setUserSession(data); 
//                     } else {
//                         console.log(data);
//                     }
//                 } catch {
//                     console.error('Fetch failed check the reason bro');
//                     setUserSession(false);
//                 }
//             }
    
            
//             fetchData();
//         }, []);
//     }


//     const handleClick = (e) => {
//         e.preventDefault();  // Prevent the default anchor behavior
//         idk();
//         console.log('Current user session state:', userSession);
//     };


//     return (
//         <a onClick={handleClick} 
//         href="#">
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.5em"
//                 height="1.5em"
//                 viewBox="0 0 32 32">
//                 <path
//                     fill="black"
//                     d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
//                 />
//             </svg>
//         </a>
//     );
    
// }