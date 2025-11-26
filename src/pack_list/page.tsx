import { useState } from 'react'


export default function PackList() {

    const pack = '';

    return (

        <div className="pack-list-container">
            
            <h1>Modpack List</h1>

            <div className = "card">
                <h2>ILD MKII</h2>
                <p>Latest Version of Modpack</p>


                <a href = {pack} download className = "download-link">
                    <button>Download File</button>
                </a>
            </div>

        </div>

    );
}