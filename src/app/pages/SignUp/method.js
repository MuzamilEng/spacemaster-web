import { useState } from "react";
import { postRequest } from "../../utils/request";

const method = () => {
  const [profile, setProfile] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(profile);
    setProfile((profile) => ({
      ...profile,
      [name]: value,
    }));
  };

  const isFieldsValidated = (object) => {
		for (const key in object) {
			if (!profile[key]) {
				return false;
			}
		}
		return true;
	};

  const signUp = async (e) => {
    e.preventDefault();
    if (isFieldsValidated(profile)) {
      const response = await postRequest(`auth/signUp`, profile);
      console.log(response);
    } else {
      console.log('Error');
    } 
  }

  // const signUp = async (e, callback) => {
	// 	e?.preventDefault();
	// 	const response = await postRequest(`auth/signUp`, profile);
	// 	if (response.status === 200) {
	// 		dispatch("user", { email: profile.email });
	// 		if (callback) {
	// 			callback("confirmation");
	// 		} else navigate("/confirmation");
	// 	} else {
	// 		setError("Error during sign up");
	// 	}
	// };


  return {
    profile,
    handleInputChange,
    signUp
  };
};

export default method;
