import { forwardRef, useEffect, useRef, useState } from "react";
import { ImageProps } from "./image.types";
import Placeholder from "../../assets/placeholder.png";
import css from "./image.module.css";

const Image = forwardRef<HTMLImageElement, ImageProps>(
    (
        { src, alt, placeholder, ...props },
        ref
    ) => {

        
        const [loading, isLoading] = useState(true)
        
        const imageRef = useRef<HTMLImageElement>()
        
        const onLoadImage = () => isLoading(false)
        
        useEffect(() => {
            if (imageRef.current?.complete) {
                isLoading(false)
            }
        }, [])

        if(src == "" || !src) {
            return <></>
        }

        return (
            <>
                {loading &&
                    <img
                        src={placeholder ? placeholder : Placeholder}
                        className={css.placeholder_image}
                        alt="loading..."
                        ref={ref}
                        {...props}
                    />
                }

                <img
                    className={loading ? css.hide : css.show}
                    src={src}
                    onLoad={onLoadImage}
                    alt={alt}
                    ref={ref}
                    {...props}
                />
            </>
        );
    
    }
)

export { Image }