document.addEventListener("click",(e)=>{
    //create span for snowflake

    let snowflake = document.createElement("span")
    snowflake.classList.add("snowflake")

    //set position of snowflake to mousepointer's position


    //offsetX , offsetY are properties of mouse, when mouse is clicked
    // offsetX will note the point of click relative to Div position horizontally
    // offsetY will note the point of click relative to Div position vertically

    snowflake.style.left = e.offsetX + "px"
    snowflake.style.top = e.offsetY + "px"

    // select random number b/w 20 and 100

    let size = Math.random()*(100 - 20 + 1) +20;

    //set Width and height

    snowflake.style.width = size + "px"
    snowflake.style.height = size + "px"

    document.body.appendChild(snowflake);

    setTimeout(()=>{
        snowflake.remove();
    },1000)

})