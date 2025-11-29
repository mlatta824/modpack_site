

export default function PackList() {

    const pack = 'https://github.com/mlatta824/modpack_site/releases/download/Alpha/Critical.Mass-.Project.Overdose.Mk.II.zip';

    return (

        <div className="pack-list-container">
            
            <h1>Modpack List</h1>

            <div className = "card">
                <h2>Critical Mass: Project Overdose MK II</h2>
                <p>Latest Version of Modpack</p>


                <a href = {pack} download className = "download-link">
                    <button>Download File</button>
                </a>
            </div>

        </div>

    );
}