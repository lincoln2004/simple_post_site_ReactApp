

export default {

    div: {

        width: '100%', height: 'auto',

        minHeight: '100vh', display: 'flex',

        alignItems: 'center', justifyContent: 'center',

        padding: '2rem 0', backgroundColor: 'rgba(20 20 20)',
    },

    sec: {

        width: '90%', height: 'auto',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center', flexWrap: 'wrap',

        backgroundColor: 'rgb(30 30 30)', borderRadius: '8px',

        padding: '5rem 0'
    },

    itemsBox: {

        width: '90%', height: '120vh',

        display: 'inline-flex', flexWrap: 'wrap',

        justifyContent: 'start', padding: '1rem 0'
    },

    item: {

        clickEffect: {

            width: '30%', height: '50%',
            display: 'inline-flex', position: 'static',
            margin: '1rem',

        },

        notFound: {

            width: '30%', height: '50%',

            backgroundColor: 'gray', borderRadius: '8px',

            margin: '0.5rem', display: 'flex',

            alignItems: 'center', justifyContent: 'center'
        },

        title: {

            fontSize: '16pt', color: 'rgba(30, 30, 30)'
        },

        author: {

            fontSize: '14pt', color: 'rgba(80,80,80, 0.8)'

        },

        text: {

            width: '90%', height: '70%',

            fontSize: '13pt', padding: '1rem',

            textAlign: 'center', wordBreak: 'break-word',

            color: 'rgb(60 60 60)'

        },

        fieldset: {

            width: '90%', height: '5rem',

            display: 'flex', alignItems: 'flex-start',

            justifyContent: 'start', flexDirection: 'column',

            margin: '1rem 0'
        },

        body: {

            width: '80%', height: '80%',

            borderRadius: '6px', background: 'rgba(255 , 255 , 255)',

            display: 'flex', alignItems: 'center',

            flexDirection: 'column', padding: '0.5rem',

            margin: '0.5rem', overflow: 'hidden',

            textOverflow: 'ellipsis'
        }

    },

    h1: {
        height: '3rem', width: '50%',
        textAlign: 'center'
    },

    nav: {
        position: 'fixed', top: '33vh', right: '1rem',

        width: '6rem', height: '30vh',

        backgroundColor: 'rgb(40 40 40)', borderRadius: '8px',

        display: 'flex', flexDirection: 'column',

        alignItems: 'center', justifyContent: 'space-between',

        padding: '3rem 0 '
    },

    button: {

        button: {
            backgroundColor: 'rgb(45 45 45)', width: '90%',

            height: '4rem', transition: '0.3s', color: 'rgb(220 140 20)'
        },

        hover: {
            backgroundColor: 'rgb(50 50 50)'
        }

    }
}