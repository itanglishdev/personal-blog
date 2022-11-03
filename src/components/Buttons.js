import Button from '@mui/material/Button'

function Buttons() {
    return (  
        <div className='mt-[20px] flex gap-10' >
            <Button size='medium' variant="contained">Linkedin</Button>
            <Button size='large' >E-mail</Button>
        </div>
    );
}

export default Buttons;