import React from "react";

const IndexPage = (props) => {
  React.useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);
    if (!token) {
      props.history.push("/register");
    } else {
      props.history.push("/home");
    }
    // eslint-disable-next-line
  }, [0]);
  return <div></div>;
};

export default IndexPage;