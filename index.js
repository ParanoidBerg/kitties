import catMe from 'cat-me'
function getSomeKitties () {
    let result
    for (let i = 0; i < 4; i++) {
        result = `${catMe()} ${catMe()} ${catMe()}`
    }
    console.log(result)


}

getSomeKitties()