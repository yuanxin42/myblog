import { get } from '@/api';

/**
 * 留言版
 *
 * @param {Object}
 * @return {Promise} promise
 */
export function sendLeaveWord(params = {}) {
    return get(
        '/smsguide/querySmsGuidePage',
        params
    );
}