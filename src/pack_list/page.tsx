

export default function PackList() {

    const drugpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Critical.Mass-.Project.MDMA.Mk.II.zip';
    const nukepack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Scorched.Horizons.zip';

    const serverpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/critical-mass-server.zip';

    return (

        <div className="pack-list-container">
            
            <h1>Modpack List</h1>
            <h2>Server IP: 108.2.112.7:25565</h2>

            <div className = "card">
                <h2>Critical Mass: Project MDMA MK II</h2>
                <p>CURRENT SERVER PACK</p>
                
                <a href = {drugpack} download className = "download-link">
                    <button>Download Modpack</button>
                </a>
                <p></p>
                
                <a href = {serverpack} download className = "download-link">
                    <button>Download Server Pack</button>
                </a>
            </div>

            <div className = "card">
                <h2>Scorched Horizons</h2>

                <a href = {nukepack} download className = "download-link">
                    <button>Download Modpack</button>
                </a>
            </div>

        </div>

    );
}