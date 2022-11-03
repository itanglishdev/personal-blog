import Facebook from '../sub-components/Facebook'
import Twitter from '../sub-components/Twitter'
import InstaGram from '../sub-components/Instagram';
import GitHub from '../sub-components/GitHub';

function Footer() {
    return (  
        <div  className='flex flex-row mb-[20px] p-[20px] gap-5'>
            <Twitter/>
            <Facebook/>
            <InstaGram/>
            <GitHub/>
        </div>
    );
}

export default Footer;
