import temp from './home.hbs'

export default (props) => {
    
    let page = ''

    props.forEach((item) => {
        page += temp({
            link: item[1],
            text: item[0]
        })
    })

    return page
}