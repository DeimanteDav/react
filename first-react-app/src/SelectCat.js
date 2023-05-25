import intulis from './intulis.jpeg'
import intulis2 from './intulis2.JPEG'
import majyte from './majyte.jpg'
import majyte2 from './majyte2.JPEG'


function option(event) {
    let intis = [intulis, intulis2]
    let maja = [majyte, majyte2]

    if (document.querySelector('.image')) {
        document.querySelector('.image').remove()
    }
    let div = document.querySelector('#div');
    let img = document.createElement('img');
    img.src = event.target.value
    img.classList.add('image')
    div.after(img)

    let optionIntis = document.querySelector('#intis');
    optionIntis.value = intis[Math.floor(Math.random()*intis.length)]
    let optionMaja = document.querySelector('#maja');
    optionMaja.value = maja[Math.floor(Math.random()*maja.length)]

    return img
}

function SelectCat() {
    return (
        <div id='div'>
        <select onChange={option}>
            <option id='intis'>Intis</option>
            <option id='maja'>Maja</option>
        </select>
        </div>
    )
}
export default SelectCat