const Loader = ({color}) => {
	return (
		<div className="text-center">
			<div className={`spinner-border ${color}`} role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loader;