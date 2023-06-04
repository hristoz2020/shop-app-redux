const Modal = ({ setIsModalOpen }) => {
	return (
		<div className="text-center">
            <h1>Modal</h1>
			<button onClick={() => setIsModalOpen(false)}>Close</button>
		</div>
	);
};

export default Modal;
