import { MenuUI, TMenuLink } from "../../components/ui/menuUI/MenuUI";

type TMenuProjectProps = {linksList: TMenuLink[]};

export const MenuProjects = (props: TMenuProjectProps) => MenuUI(props.linksList);
