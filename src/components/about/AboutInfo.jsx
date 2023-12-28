const AboutInfo = ({ text, icon, className }) => {
  return (
    <div className="about-info">
      <img src={icon} className={className} />
      <p>
        {text}
      </p>
    </div>
  );
};

export default AboutInfo;
