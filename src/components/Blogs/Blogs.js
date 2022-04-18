import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-center my-5">
        Difference between Authentication and Authorization
      </h3>
      <p className="mx-5">
        Authentication is the process that verifies who someone is or what
        someone's identity is whereas Authorization is the process that
        determines what application, data or systems an user can access or have
        privilege to access
      </p>

      <h3 className="text-center my-5">
        Why to use Firebase and other options available
      </h3>
      <p className="mx-5">
        Using firebase mainly for Authentication and deploy a project. Through
        firebase authentication system an user can be created for an application
        where verification is required for application. There are also other
        authentication providers such as Okta, RSA, Entrust, Auth0 etc.
      </p>
      <h3 className="text-center my-5">
        Other services provided by Firebase than Authentication
      </h3>
      <p className="mx-5">
        <li>Hosting</li>
        <li>Google Analytics</li>
        <li>Cloud Storage</li>
        <li>Cloud Functions</li>
        <li>Cloud Messaging</li>
      </p>
    </div>
  );
};

export default Blogs;
