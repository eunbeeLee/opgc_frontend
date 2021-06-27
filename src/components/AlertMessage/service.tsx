import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
    faExclamationTriangle,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export function getIcon(type: 'warning' | 'error' | 'normal') {
    switch (type) {
        case 'warning':
            return faExclamationTriangle;
        case 'error':
            return faTimesCircle;
        default:
            return faInfoCircle;
    }
}
