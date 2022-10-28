

export default {

    header: {
        width: '100%', height: '5rem',

        background: 'rgba(15 15 15)', display: 'flex',

        alignItems: 'center', justifyContent: 'space-around',

        boxShadow: ' 0 1rem 1rem -1rem  red'
    },

    h1: {
        fontSize: '30pt'
    },


    menu: {

        background: {
            display: 'flex', position: 'fixed',

            top: 0, left: 0,

            width: '100%', height: '100vh',

            background: 'rgba(0, 0, 0, 0.4)', alignItems: 'center',

            justifyContent: 'center'
        },

        box: {
            width: '80%', height: '80vh',

            background: 'rgba(20 20 20)', display: 'flex',

            alignItems: 'center', justifyContent: 'center',
        
        },

        nav: {

            height: '100%', width: '40%',
            
            background: 'rgba(25 25 25)', display: 'flex',

            flexDirection: 'column', alignItems: 'center',

            justifyContent: 'space-around'
        },

        empty: {
            height: '100%', width: '60%',
        }
    }
}