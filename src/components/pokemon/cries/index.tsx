import { forwardRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { CriesProps } from './cries.types';
import css from "./cries.module.css";

interface AudioPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    label: string;
}

const AudioPlayer = ({ src, label, ...props }: AudioPlayerProps) => {

    if(!src || src.length == 0) { return <></> }
    
    return (
        <div className={css.audio_player__wrapper} {...props}>
            <ReactAudioPlayer
                className={css.audio_player}
                src={src}
                controls
                volume={0.1}
            />
            <p className={css.label}>{label}</p>
        </div>
    )
};

const Cries = forwardRef<HTMLDivElement, CriesProps>(
    (
        { cries, ...props},
        ref
    ) => {
    
        return (
            <div ref={ref} {...props}>
                <h2 className={css.title}>Cries</h2>
                <div className={css.cries__container}>
                    <AudioPlayer src={cries.latest} label="Latest" role='audio' />
                    <AudioPlayer src={cries.legacy} label="Legacy" role='audio' />
                </div>
            </div>
        )
    }
)

export { Cries, AudioPlayer }