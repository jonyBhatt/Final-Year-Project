const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("currentuser"));
};

export default getCurrentUser;
