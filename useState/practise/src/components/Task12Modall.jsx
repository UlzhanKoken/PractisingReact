import { useState } from "react";

function Modall(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(prev => !prev)
    }
    return(
        <>
            <button onClick={toggleModal}>
                {isOpen ? "CLOSE" : "OPEN"}
            </button>
            {
                isOpen && (
                    <div style={{
                        backgroundColor: 'yellow',
                        width: '200px',
                        height: '200px',
                        marginTop: '10px'
                    }}> This is modal</div>
                )
            }

        </>
    )
}
export default Modall;