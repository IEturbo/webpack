import _ from 'lodash';
import './style.css';
import Icon from './beauty.jpg';
import data from './data.xml';
function component(){
    var el = document.createElement('div');
    el.innerHTML = _.join(['hello','webpack'],' ');
    el.classList.add('hello');
    var icon = new Image();
    icon.src=Icon;
    el.appendChild(icon);
    console.log(data);
    return el;
}
document.body.appendChild(component());