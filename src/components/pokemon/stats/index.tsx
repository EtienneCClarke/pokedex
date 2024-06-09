import { forwardRef } from "react";
import { StatsProps, Stat } from "./stats.types";
import css from "./stats.module.css";

const Stats = forwardRef<HTMLDivElement, StatsProps>(
    (
        { stats, className, ...props },
        ref
    ) => {

        const MAX_HP = 255;
        const MAX_ATTACK = 190;
        const MAX_DEFENCE = 230;
        const MAX_SPECIAL_ATTACK = 194;
        const MAX_SPECIAL_DEFENCE = 230;
        const MAX_SPEED = 200;

        return (
            <div className={className ? className : css.stats_showcase__container} ref={ref} {...props}>
                <h2 className={css.title}>Stats <span className={css.label}>(base)</span></h2>
                <div className={css.stats__container}>
                    {stats.map((stat: Stat, index: number) => {

                        const MAX =
                            index == 0 ? MAX_HP :
                            index == 1 ? MAX_ATTACK :
                            index == 2 ? MAX_DEFENCE :
                            index == 3 ? MAX_SPECIAL_ATTACK :
                            index == 4 ? MAX_SPECIAL_DEFENCE :
                            MAX_SPEED;

                        const width = Math.floor((stat.base_stat / MAX)* 100);

                        return (
                            <div className={css.stat} key={index}>
                                <p className={css.stat_label}>{stat.stat.name.replace("-", " ")}</p>
                                <div className={css.stat_bar}>
                                    <div className={css.stat_amount} style={{ width: `${width}%` }}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
)

export { Stats }