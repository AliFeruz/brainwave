import { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

type Props = {
    children?: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    white?: string;
    px?: string
}

const Button = ({children, className, href, onClick, white, px}: Props) => {
    const classes = `button relative inline-flex items-center justify-center 
    h-11 transition-colors hover:text-color-1 ${px || 'px-7'} 
    ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
    const spanClasses = 'relative z-10'
    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white!)}
            </a>
        );
    }

 const renderBtn = () => (
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white!)}
    </button>
 )
 return renderBtn()
};

export default Button;
