import React, {useContext} from 'react';
import classNames from 'classnames';
import {ThemeContext} from '../../context/ThemeContext';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * types of badges
     */
    type?: 'primary' | 'neutral' | 'success' | 'warning' | 'danger';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
    const {className, children, type = 'primary', ...other} = props;

    const {
        component: {badge},
    } = useContext(ThemeContext);

    const baseStyle = badge.base;

    const typeStyle = {
        success: badge.success,
        danger: badge.danger,
        warning: badge.warning,
        neutral: badge.neutral,
        primary: badge.primary,
    };

    const cls = classNames(baseStyle, typeStyle[type], className);

    return (
        <span className={cls} ref={ref} {...other}>
            {children}
        </span>
    );
});

export default Badge;
