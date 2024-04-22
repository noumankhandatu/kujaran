import { useState } from "react";
import { Appheading } from "../../../utils/theme/typo";
import { AppButton } from "../../../components/atoms/AppButton";
import Div from "../../../components/atoms/Div";
import RiderSignUp from "./rider-signup";
import HorseSignUp from "./horse-signup";
import StableSignUp from "./stable-signup";

const SignUpPage = () => {
  const [activeTab, setActiveTab] = useState("rider");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Div sx={{ p: 2, backgroundColor: "#ABA8A8" }}>
      <Appheading sx={{ color: "white" }}>Sign Up</Appheading>
      <Div sx={{ mb: 3, mt: 3 }}>
        <AppButton
          onClick={() => handleTabClick("rider")}
          style={{
            backgroundColor: activeTab === "rider" ? "#7a7878" : "#d5d5d5",
            color: activeTab === "rider" ? "#ffffff" : "#000000",
          }}
        >
          Rider
        </AppButton>
        <AppButton
          onClick={() => handleTabClick("horse")}
          style={{
            backgroundColor: activeTab === "horse" ? "#7a7878" : "#d5d5d5",
            color: activeTab === "horse" ? "#ffffff" : "#000000",
          }}
        >
          Horse
        </AppButton>
        <AppButton
          onClick={() => handleTabClick("stable")}
          style={{
            backgroundColor: activeTab === "stable" ? "#7a7878" : "#d5d5d5",
            color: activeTab === "stable" ? "#ffffff" : "#000000",
          }}
        >
          Stable
        </AppButton>
      </Div>
      {activeTab === "rider" && <RiderSignUp />}
      {activeTab === "horse" && <HorseSignUp />}
      {activeTab === "stable" && <StableSignUp />}
    </Div>
  );
};

export default SignUpPage;
