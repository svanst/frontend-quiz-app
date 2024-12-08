import HTMLIcon from "./HTMLIcon";
import CSSIcon from "./CSSIcon";
import JavascriptIcon from "./JavascriptIcon";
import AccessibilityIcon from "./AccessibilityIcon";

export type IconKey = "HTML" | "CSS" | "Javascript" | "Accessibility";

type TopicIconProps = {
  iconKey: IconKey;
};

function TopicIcon({ iconKey }: TopicIconProps) {
  if (!iconKey) return null;
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
