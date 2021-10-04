import React from "react";
import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
  const description =
    "YourSkill is Bangladesh’s leading educational platform for superior online courses, professional training and corporate eLearning services that help you develop useful skills and accomplish more in life. Our online courses and career-track programs are designed in collaboration with the best of industry experts and organizations in Bangladesh.";
  const title = "YourSkill";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Courses",
          link: "/courses",
        },
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Login",
          link: "/login",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/",
        },
        {
          name: "Terms",
          link: "/",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/",
        },
        {
          name: "Map",
          link: "/",
        },
      ],
    },
  ];
  return (
    <div className="sticky-top">
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin=""
        facebook=""
        twitter=""
        instagram=""
        youtube=""
        pinterest=""
        copyright="YourSkill"
        iconColor="White"
        backgroundColor="#34495E"
        fontColor="White"
        copyrightColor="White"
      />
    </div>
  );
};

export default Footer;
