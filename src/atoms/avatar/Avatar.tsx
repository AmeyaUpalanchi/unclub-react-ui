import React, {useContext} from 'react';
import classNames from 'classnames';
import {ThemeContext} from '../../context/ThemeContext';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * sizes of avatars available
     */
    size?: 'large' | 'medium' | 'small';

    /**
     * optional alternative text for the avatar image
     */
    alt?: string;

    /**
     * source of avatar image
     */
    src: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
    const {size = 'medium', src, alt, className, ...other} = props;
    const {
        component: {avatar},
    } = useContext(ThemeContext);

    const baseStyle = avatar.base;
    const sizeStyles = {
        large: avatar.size.large,
        medium: avatar.size.medium,
        small: avatar.size.small,
    };

    const cls = classNames(baseStyle, sizeStyles[size], className);

    return (
        <div className={cls} ref={ref} {...other}>
            <img
                className="object-cover w-full h-full rounded-full"
                src={src}
                alt={alt}
                loading="lazy"
            />
            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        </div>
    );
});
export default Avatar;
