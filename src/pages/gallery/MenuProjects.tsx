import { MenuUI } from "../../components/ui/menuUI/MenuUI";
import { TMenuLink } from "../../utils/types";

type TMenuProjectProps = { linksList: TMenuLink[] };

export const MenuProjects = (props: TMenuProjectProps) =>
  MenuUI(props.linksList);
