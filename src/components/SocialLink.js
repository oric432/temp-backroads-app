const SocialLink = (props) => {
  const { itemClass, href, icon } = props;
  return (
    <li>
      <a href={href} className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
