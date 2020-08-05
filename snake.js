import { GetInputDirections } from "./input.js"
export const SNAKE_SPEED=5
const snakeBody = [{x:11,y:11}]
let newSegments=0


export function update()
{
    addSegments()
    const inputDirection=GetInputDirections()
    for(let i= snakeBody.length-2;i>=0;i--)
    {
        snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x +=inputDirection.x;
     snakeBody[0].y +=inputDirection.y;


}

export function draw(gameBoard)
{
        snakeBody.forEach(segment => {
            const SnakeElement =document.createElement('div')
            SnakeElement.style.gridRowStart =segment.y
            SnakeElement.style.gridColumnStart =segment.x
            SnakeElement.classList.add('snake')
            gameBoard.appendChild(SnakeElement)
        })
}

export function expandSnake(amount)
{
    newSegments += amount;
}
export function OnSnake(position)
{
    return snakeBody.some(segment => {
        return equalPositions(segment,position)
    })
}

function equalPositions (pos1,pos2)
{
    return pos1.x==pos2.x && pos1.y==pos2.y
}

function addSegments(){
    for(let i=0;i<newSegments;i++)
    {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments=0
}