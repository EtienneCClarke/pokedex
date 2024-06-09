import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { BackButtonProps } from "./backButton.types";
import css from "./backButton.module.css";

const BackButton = forwardRef<HTMLAnchorElement, BackButtonProps>(
    (
        { to, ...props },
        ref
    ) => {

        return (
            <Link to={to ? to : "/"} className={css.back_button} {...props} ref={ref}>
                <svg width="38" height="27" viewBox="0 0 38 27" className={css.arrow} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3 27L0 13.7L13.3 0.399994L15.96 3.05999L7.2675 11.8H38V15.6H7.2675L16.0075 24.34L13.3 27Z"/>
                </svg>
            </Link>
        )
})

export { BackButton }