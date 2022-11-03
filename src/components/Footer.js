import Facebook from '../sub-components/Facebook'
import Twitter from '../sub-components/Twitter'
import InstaGram from '../sub-components/Instagram';
import GitHub from '../sub-components/GitHub';

function Footer() {
    return (  
        <div  className='flex flex-row mt-[20px]'>
            <Twitter/>
            <Facebook/>
            <InstaGram/>
            <GitHub/>
        </div>
    );
}

export default Footer;
