import { useState } from "react";

const validateEmail = email => {
    if (!email) return "Email is required";
}

const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  
};


const LoginFormPage = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [touched, setTouched] = useState({
        email: false,
        password: false
    });

    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const handleOnChange = event => {
        event.preventDefault();
        const name = event.target.name;
        setValues({
            ...values,
            [name]: event.target.value
        });
    }

    const emailError = validateEmail(values.email);
    const passwordError = validatePassword(values.password);
    const formValid = !emailError && !passwordError;

    const handleOnSubmit = event => {
        event.preventDefault();
        console.log("Values = ", values);
    }

    const handleOnBlur = event => {
        setTouched({
            ...touched,
            [event.target.name]: true
        });
    };


    return (
      <div className="login-form">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            {touched.email && <span style={{ color: "red" }}>{emailError}</span>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            {touched.password && <span style={{color: "red"}}>{passwordError}</span>}
          </div>
          <button type="submit" disabled={!formValid}>Submit</button>
        </form>
      </div>
    );
};

export default LoginFormPage;