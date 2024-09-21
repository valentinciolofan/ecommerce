import React, { useEffect, useState } from 'react'

const Stats = () => {
    const [status, setStatus] = useState({});

    useEffect(() => {
        const getStats = async () => {
            const apiUrl = import.meta.env.PUBLIC_API_URL;

            const getData = await fetch(`${apiUrl}/stats`);
            const data = await getData.json();
            setStatus(data);
            console.log(data)
        }
        getStats();
    }, [])
    return (
        <div className='cards'>
            <div className="card red">
                <h1>{status.total_customers}</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="black" d="M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m.6 11.998L5 15a2 2 0 0 1-2-2V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a5 5 0 0 1-.304-.975m9.496.975Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a5 5 0 0 1-.304.975M7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8zM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0z"></path></svg>
                    <p>Total customers</p>
                </div>
            </div>
            <div className="card green">
                <h1>{status.total_sales}</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><rect width={448} height={256} x={32} y={80} fill="none" stroke="#37ac20" strokeLinejoin="round" strokeWidth={32} rx={16} ry={16} transform="rotate(180 256 208)"></rect><path fill="none" stroke="#37ac20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M64 384h384M96 432h320"></path><circle cx={256} cy={208} r={80} fill="none" stroke="#37ac20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle><path fill="none" stroke="#37ac20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80m368 176a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80"></path></svg>
                    <p>Total sales</p>
                </div>
            </div>
            <div className="card blue">
                <h1>{status.total_users}</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="black" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></path></svg>
                    <p>Total users</p>
                </div>
            </div>
        </div>
    );

}

export default Stats;