module.exports = {
    purge: {
      enabled: true,
      content: ['./src/**/*.ts'],
      safelist: [
        'bg-red-300',
        'grid',
        'bg-red-200',
        'absolute',
        'mt-4',
        'mr-4',
        'grid-flow-col',
        'place-items-end ',
        'ml-4',
        'left-0',
        'top-0',
        'right-0',
        'place-items-end',
        'justify-end',
        ' mt-2',
        'mb-2',
        ' ml-2',
        ' mb-4',
        ' text-xl',
        'mr-2.5',
        'mt-6',
        ' m-1',
    ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#5F2EEA',
          secondary: '#2A00A2',
      },
      },
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
  };