import './HealthTool.css';

export default function HealthTool() {
    return (
        <div className='container'>
            <h1 className='health-tool-header'>Health Tool</h1>
            <a href="https://odphp.health.gov/myhealthfinder" title="MyHealthfinder">
                <img className='my-health-finder-logo' src="https://odphp.health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="MyHealthfinder"/>
            </a>
            <iframe className='my-health-finder'src="https://www.health.gov/myhealthfinder?widget=true" name="myhealthfinderframe" frameborder="0" id="myhealthfinderframe" scrolling="yes" height="485" width="100%" marginheight="0" title="myhealthfinder widget" marginwidth="0"><p>Your browser does not support iframes.</p></iframe>
        </div>
    )
}