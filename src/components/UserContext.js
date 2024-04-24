import { atom } from 'nanostores';

export const userSession = atom(null);

export const favoriteProducts = atom(null);


export async function checkSession() {
    try {
       const response = await fetch('http://localhost:3000/check-session', {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        const {loggedIn, status, userInfo} = await response.json();
        
        if (loggedIn && status === 200 && userInfo !== undefined) {
            userSession.set(userInfo);
        } else {
            userSession.set(null);
        }
    } catch (error) {
        console.log('Fetch failed, check the reason:', error);
        userSession.set(null);
    }
}
