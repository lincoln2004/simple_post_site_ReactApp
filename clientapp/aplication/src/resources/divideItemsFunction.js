


const divide = (arr, initId, chunk) => {

    if (!arr && arr.length < 2) {
        return arr
    }

    let tmp = []

    let chunkTotal = arr.length % chunk ?

        Math.round(arr.length / chunk) + 1 : Math.round(arr.length / chunk)

    while (tmp.length < chunkTotal && tmp.flat().length < arr.length) {

        tmp.push(arr.slice(initId, initId + chunk))

        initId += chunk

    }

    return tmp

}

export default divide