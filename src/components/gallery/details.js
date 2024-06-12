const Details = ({ isOpen, onClose, children }) => {

  return (
    <div
      className={`pt-16 fixed inset-0 bg-black bg-opacity-50 grid place-items-center ${
        isOpen ? "" : "hidden"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white p-5 shadow-md flex flex-col gap-5 w-4/5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Details;
