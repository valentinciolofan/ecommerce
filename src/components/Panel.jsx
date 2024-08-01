import React, { useState, useEffect } from "react";
import Stats from './PanelStats'
import OrdersManagement from './OrdersManagement';



const Panel = () => {
    return (
        <div className='panel'>
            <div className='panel-wrapper'>
                <Stats />
                <OrdersManagement />
            </div>
        </div>
    );
}

export default Panel;