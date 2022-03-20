

const Footer = ({length}) => {
    const today = new Date();
    return (
        <div className="footer">
            <p>{length} list {length=== 1 ? "item" : "items"}</p>
            
        </div>
    );
};

export default Footer;