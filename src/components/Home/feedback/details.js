const Details = ({isOpen, onClose, children}) => {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}
            onClick={onClose}
        >
            <div
                className="bg-white p-5 shadow-md flex flex-row content-center items-center justify-center gap-2 md:gap-5 w-[80%] h-[50%] "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Details;