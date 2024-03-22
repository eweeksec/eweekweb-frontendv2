import '../app/globals.css'
import '../app/components.css'

const BasicContentWrapper = ({ title, type, children }) => {
  return (
    <div className='basicContentWrapper'>
      <div className={type}>
        <h2 className='basicContentTitle'>{title}</h2>
        <div className="basicContentWrapperBody">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasicContentWrapper;
