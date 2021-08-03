export default {
    avatar: {
        base: 'relative rounded-full inline-block',
        size: {
            small: 'w-8 h-8',
            medium: 'w-10 h-10',
            large: 'w-12 h-12',
        },
    },

    badge: {
        base: 'inline-flex px-3 pt-1 pb-1 text-xs font-sm leading-4 rounded-md',
        success: 'text-green-700 bg-green-50',
        danger: 'text-red-700 bg-red-50',
        warning: 'text-yellow-700 bg-yellow-50',
        neutral: 'text-gray-700 bg-gray-50',
        primary: 'text-purple-700 bg-purple-50',
    },
    input: {
        base: 'border-gray-400 border block  w-full h-8 text-sm focus:outline-none px-2 leading-5 rounded-md',
        active: 'focus:border-purple-10 border-gray-300 focus:ring focus:ring-purple-10',
        disabled: 'cursor-not-allowed opacity-50 bg-gray-300',
        valid: 'border-green-600 focus:border-green-400 focus:ring focus:ring-green-200',
        invalid: 'border-red-600 focus:border-red-400 focus:ring focus:ring-red-200',
        radio: 'text-purple-600 form-radio focus:outline-none',
        checkbox: 'text-purple-600 form-checkbox',
    },
    textarea: {
        base: 'block border p-2 w-full text-sm rounded-md focus:outline-none',
        active: 'focus:border-purple-400 border-gray-300 focus:ring focus:ring-purple-300',
        disabled: 'cursor-not-allowed opacity-50 bg-gray-300',
        valid: 'border-green-600 focus:border-green-400 focus:ring focus:ring-green-200',
        invalid: 'border-red-600 focus:border-red-400 focus:ring focus:ring-red-200',
    },
};
