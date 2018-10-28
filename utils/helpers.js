import moment from 'moment'

export const timeFrom = (timestamp) => {
    return moment().calendar(timestamp, {
        sameDay: '[Today at] h:mm a',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday at] h:mm a',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
    })
}