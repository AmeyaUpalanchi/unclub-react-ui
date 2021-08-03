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
    button: {
        base: 'align-bottom inline-flex  text-sm items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
        block: 'w-full',
        rounded: 'rounded-full',
        size: {
            larger: 'px-10 py-4 rounded-lg',
            large: 'px-6 py-3 rounded-lg',
            regular: 'px-4 py-2 rounded-lg text-sm',
            small: 'px-3 py-1 rounded-md text-sm',
            icon: {
                larger: 'p-4 rounded-lg',
                large: 'p-3 rounded-lg',
                regular: 'p-2 rounded-lg',
                small: 'p-2 rounded-md',
            },
        },
        icon: {
            larger: 'h-5 w-5',
            large: 'h-5 w-5',
            regular: 'h-5 w-5',
            small: 'h-4 w-4',
            left: 'mr-2 -ml-1',
            right: 'ml-2 -mr-1',
        },
        primary: {
            base: 'text-white bg-primary border border-transparent',
            active: 'active:bg-primary hover:bg-secondary focus:ring focus:ring-purple-300',
            disabled: 'opacity-50 cursor-not-allowed',
        },
        outline: {
            base: 'text-gray-600 bg-white border-primary border-2',
            active: 'active:bg-gray-100 hover:bg-gray-50 focus:ring focus:ring-purple-300',
            disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
        },
        link: {
            base: 'text-gray-600 focus:outline-none border border-transparent',
            active: 'active:bg-transparent hover:bg-gray-100',
            disabled: 'opacity-50 cursor-not-allowed',
        },
    },
    
};
