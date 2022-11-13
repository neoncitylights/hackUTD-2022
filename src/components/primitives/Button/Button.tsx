import { ReactElement } from "react";
import { ButtonProps as HtmlButtonProps } from "react-html-props";

export type ButtonProps = HtmlButtonProps & {
	text?: string;
	icon?: ReactElement,
}
export const Button = ({text, icon, ...props}: ButtonProps) => {
	return (<button>
		{icon ?? <span>{icon}</span>}
		{text ?? <span>{text}</span>}
	</button>);
}