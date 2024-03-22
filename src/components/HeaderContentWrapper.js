import '../app/components.css'

const HeaderContentWrapper = ({ title, subheader, headerType, content }) => {
  return (
    <div className='headerContentWrapper'>
      <h3 className="headerSubheader">{subheader}</h3>
      <h1 className={headerType}>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default HeaderContentWrapper;
