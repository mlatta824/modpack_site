

export default function PackList() {

    const drugpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Critical.Mass-.Project.MDMA.Mk.II.zip';
    const nukepack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Scorched.Horizons.zip';
    const cobblemonpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/CobblemonColonies.zip';
    const rpgpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Cisco.s.Fantasy.Medieval.RPG.Tweaked.zip'

    const serverpack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/CARPG.Dragonfyre.V2F.Beta.Serv.zip';

    return (

        <div className="pack-list-container">
            
            <h1>Modpack List</h1>
            <h2>Server IP: Join The Discord.</h2>
            <h2>To gain access, display your username in our Discord!</h2>
            <a href = {'https://discord.gg/cqjUuW6NQr'} download className = "discord-link">
                <button>Discord Server</button>     
            </a>
            <div className = "card">
                <h2>Cisco's Tweaked</h2>
                <p>CURRENT SERVER PACK</p>

                <a href = {rpgpack} download className = "download-link">
                    <button>Download Modpack</button>
                </a>
                <a href = {serverpack} download className = "download-link">
                    <button>Download Server Pack</button>
                </a>
            </div>

            <div className = "card">
                <h2>Cobblemon Colonies</h2>

                <a href = {cobblemonpack} download className = "download-link">
                    <button>Download Modpack</button>
                </a>
            </div>

            <div className = "card">
                <h2>Critical Mass: Project MDMA MK II</h2>
                
                <a href = {drugpack} download className = "download-link">
                    <button>Download Modpack</button>
                </a>
                <p></p>
                
                
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