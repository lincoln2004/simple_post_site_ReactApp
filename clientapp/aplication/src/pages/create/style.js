

export default {

    sec: {
        display: 'flex', alignItems: 'center',

        justifyContent: 'center', background: 'rgb(20 20 20)',

        width: '100%', height: '100vh',

        padding: '1rem 0'

    },

    form: {

        width: '90%', height: '100%',

        borderRadius: '8px', background: 'rgba(40 40 40 )',

        display: 'flex',

        alignItems: 'center', justifyContent: 'space-around'
    },

    inputs: {

        text: {

            height: '2.5rem', width: '90%',

            background: 'rgb(100 100 100)', borderRadius: '4px',

             textAlign: 'center',

            lineHeight: '1rem', fontSize: '14pt',

            cursor: 'default'
        },

        submit: {

            button: {
                height: '3rem', width: '50%',

                background: 'rgb(2, 189, 71)', borderRadius: '4px',

                textAlign: 'center', lineHeight: '1rem',

                fontSize: '13pt', transition: '0.3s'
            },

            hover: {
                background: 'rgb(2, 224, 84)'
            }
        }

    },

    textarea: {

        resize: 'none', width: '90%',

        height: '90%', lineHeight: '1.5rem',

        textAlign: 'start', borderRadius: '4px',

        background: 'rgb(110 110 110)', fontSize: '13pt',

        padding: '1rem', cursor: 'default'

    },

    fieldset: {

        Text: {

            width: '90%', height: '90%',

            display: 'flex', flexDirection: 'column',

            alignItems: 'center'
        },

        normal: {

            width: '80%', height: '90%',

            display: 'flex', flexDirection: 'column',

            alignItems: 'center'
        }

    },

    label: {

        width: '70%', height: '30%',

        display: 'flex', alignItems: 'center',

        justifyContent: 'center', flexDirection: 'column'
    },

    p: {
        fontSize: '16pt'
    },

    msg: {

        show: {

            width: '30vw', height: '10rem',

            display: 'inline-flex', justifyContent: 'center',

            position: 'fixed', top: '37vh', left: '37vw',

            padding: '0.5rem', background: 'rgb(250 250 250)',

            borderRadius: '8px', flexDirection: 'column',

            cursor: 'default'

        },

        hide: {
            display: 'none', position: 'static'
        },

        childs: {
            p: {
                width: '80%', height: '4rem',

                color: 'rgb(40 40 40)', fontSize: '14pt',

                textAlign: 'center'
            },

            h1: {
                width: '80%', height: '4rem',

                color: 'rgb(10, 200, 15)', fontSize: '14pt',

                textAlign: 'center'
            }
        }
    }
}