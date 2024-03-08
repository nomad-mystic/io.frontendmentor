export const toggleSwitch = {
    '.switch': {
        position: 'relative',
        display: 'inline-block',
        width: '40px',
        height: '20px',
    },
    '.switch input': {
        opacity: '0',
        width: '0',
        height: '0',
    },
    '.slider': {
        position: 'absolute',
        cursor: 'pointer',
        inset: '0',
        'background-color': '#757575',
        '-webkit-transition': '.4s',
        transition: '.4s',
    },
    '.slider:before': {
        position: 'absolute',
        content: '\'\'',
        height: '14px',
        width: '14px',
        left: '4px',
        bottom: '4px',
        top: '50%',
        transform: 'translateY(-50%)',
        'background-color': 'white',
        transition: '.4s',
    },
    'input:checked + .slider': {
        'background-color': '#A445ED',
    },
    'input:focus + .slider': {
        'box-shadow': '0 0 1px #2196F3',
    },
    'input:checked + .slider:before': {
        transform: 'translate(18px, -50%)',
    },
    '.slider.round': {
        'border-radius': '10px',
    },
    '.slider.round:before': {
        'border-radius': '50%',
    },
}