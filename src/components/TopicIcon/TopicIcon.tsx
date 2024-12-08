import HTMLIcon from "./HTMLIcon";
import CSSIcon from "./CSSIcon";
import JavascriptIcon from "./JavascriptIcon";
import AccessibilityIcon from "./AccessibilityIcon";

type TopicIconProps = {
  iconKey: "HTML" | "CSS" | "Javascript" | "Accessibility";
};

function TopicIcon({ iconKey }: TopicIconProps) {
  switch (iconKey.toUpperCase()) {
    case "HTML":
      return <HTMLIcon />;
    case "CSS":
      return <CSSIcon />;
    case "JAVASCRIPT":
      return <JavascriptIcon />;
    case "ACCESSIBILITY":
      return <AccessibilityIcon />;
    default:
      return null;
  }
}

export default TopicIcon;
