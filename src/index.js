//https://www.youtube.com/watch?v=0ViiJ8qTCFM - 53:50

import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {

    const toHTML = templates[block.type]
    if (toHTML){
        $site.insertAdjacentHTML('beforeend', toHTML(block))  
    }   

})

