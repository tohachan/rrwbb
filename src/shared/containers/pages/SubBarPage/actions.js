import { DEFAULT } from './constants';

export function defaultAction(data) {
    return {
        type: DEFAULT,
        data
    };
}
