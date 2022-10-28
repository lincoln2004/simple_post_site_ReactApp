

export default {
    root: {

        width: '100%', height: '100%'
    },

    sec1: {

        width: '100%', height: '90vh',

        display: 'grid', gridTemplateAreas: "'title image' ' text1 image ''text1 empty'",

        gridTemplateColumns: '1fr 1.5fr', gridTemplateRows: '1fr 1fr 1fr',

        background: 'rgb( 20 20 20 )'

    },

    title: {

        width: '100%', height: '30%',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center', fontSize: '26pt',

        alignSelf: 'center', gridArea: 'title'
    },

    text1: {

        width: '100%', height: '50%',
        alignSelf: 'center', gridArea: 'text1',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center'
    },

    empty1: {

        width: '100%', height: '100%',
        alignSelf: 'center', gridArea: 'empty',
    },

    image: {

        width: '100%', height: '100%',
        alignSelf: 'center', gridArea: 'image',


    },

    sec2: {

        width: '100%', height: '100vh',
        background: 'rgba(250, 249, 247, 0.9)',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center'
    },

    boxItems: {

        width: '90%', height: '80%',

        borderRadius: '6px', background: '#f0efed',

        boxShadow: '0.5rem 0.5rem 5rem rgba(74, 74, 74, 0.3)',

        display: 'flex', alignItems: 'center',

        justifyContent: 'space-around', 

    },

    item: {

        clickEffect: { 
            width: '30%', height: '80%', 

            display: 'inline-flex', position: 'static', 

            margin: '1rem', alignItems: 'center',

            justifyContent: 'center'
        },

        body: {

            width: '80%', height: '80%',

            borderRadius: '6px', background: 'rgba(255 , 255 , 255 , 1)',

            display: 'flex', alignItems: 'center',

            flexDirection: 'column', overflow: 'hidden',

        },

        notFound: {

            width: '30%', height: '80%',

            borderRadius: '6px', background: 'rgba(190 , 190 , 190 , 0.6)',

            display: 'flex', alignItems: 'center',

            justifyContent: 'center', color: 'rgba(170, 170, 170)',

            fontSize: '18pt'
        },

        fieldset: {

            width: '90%', height: '5rem',

            display: 'flex', alignItems: 'baseline',

            justifyContent: 'start', flexDirection: 'column'
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

        }
    }
}

