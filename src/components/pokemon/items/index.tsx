import { forwardRef } from "react";
import { Item, ItemsProps } from "./items.types";
import { Image } from "../../image";
import Placeholder from "../../../assets/item_placeholder.png";
import css from "./items.module.css";

const Items = forwardRef<HTMLDivElement, ItemsProps>(
    (
        { items, ...props },
        ref
    ) => {

        if(items.length > 0) {
            return (
                <div {...props} ref={ref} role="container">
                    <h2 className={css.title}>Items</h2>
                    <div className={css.items__container}>
                        {items.map((item: Item) => {
    
                            const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`
                            
                            return (
                                <div className={css.item__container} key={item.item.name}>
                                    <Image className={css.item_img} src={IMG_URL} alt={item.item.name} placeholder={Placeholder} />
                                    <p className={css.name}>{item.item.name.replace("-", " ")}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

        return <></>;
    }
)

export { Items }