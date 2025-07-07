import React from "react";
import CookiePolicy from "./cookie_policy/CookiePolicy";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";


const Legal: React.FC = () => {
    return (
        <div className="legal-page">
     <CookiePolicy/>
     <PrivacyPolicy/>
     <TermsAndConditions/>
     </div>
    );
  };
  
  export default Legal;
  