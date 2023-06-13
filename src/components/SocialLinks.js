import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

function SocialLinks(props) {
  const { parentClass, itemClass } = props;

  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        return (
          <SocialLink
            key={socialLink.id}
            {...socialLink}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
}
export default SocialLinks;
