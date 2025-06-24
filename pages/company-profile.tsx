import Wrapper from "../layouts/Wrapper";


const CompanyProfile = () => {
  return (
    <div className="company-profile-wrapper">
      <div className="container">
        <h2 className="profile-title">Sole Digital Media - Company Profile</h2>
        <div className="pdf-viewer">
          <iframe
            src="/company-profile.pdf"
            width="100%"
            height="900px"
            style={{ border: "none" }}
            title="Sole Digital Media Company Profile PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
