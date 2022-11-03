import MainPhoto from "../sub-components/MainPhoto";
import AboutMe from "./AboutMe";
import Name from '../sub-components/Name'

function Info() {
    return ( 
        <div>
            
            <MainPhoto/>
            <Name/>
            <AboutMe/>
        </div>
     );
}

export default Info;