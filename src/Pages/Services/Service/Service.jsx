const Service = (service) => {
	const { title, img } = service;
	return (
		<div>
			<h3>{title}</h3>
			<img src={img} alt='' />
		</div>
	);
};

export default Service;
