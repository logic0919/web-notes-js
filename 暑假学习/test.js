function sendajax() {
    return new Promise((resolve, reject) => {
        let pname = '陕西省'
        let cname = '渭南市'
        const paramsObj = new URLSearchParams({
            pname,
            cname
        })
        const queryString = paramsObj.toString()
        const xhr = new XMLHttpRequest()
        xhr.open('GET', `http://hmajax.itheima.net/api/city?${queryString}`)
        console.log(xhr);
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyStatus === 4) {
        //         console.log('ok');
        //         if (xhr.status >= 200 && xhr.status < 300) {
        //             resolve(xhr.response)
        //         } else {
        //             reject(xhr.status)
        //         }
        //     }
        // }
        xhr.send()
        resolve(xhr)
    })
}
async function main() {
    let res = await sendajax()
    console.log(res.response);
}
main()