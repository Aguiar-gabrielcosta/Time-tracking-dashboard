export function hoveringButton(element){
    element.currentTarget.parentElement.parentElement.classList.add('button-hovered')
}

export function exitButton(element){
    element.currentTarget.parentElement.parentElement.classList.remove('button-hovered')
}