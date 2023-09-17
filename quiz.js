//Select  All Input Radio
let inputs = document.querySelectorAll("input")
    //Select All Labels

let Labels = document.querySelectorAll("label")


//  Timing quiz
let time = document.getElementById("time")

setInterval(() => {
    Today();
}, 1000)


function Today() {
    let today = new Date()
    console.log(today);
    currentTime = `${today.getHours()}: ${today.getMinutes()}:${today.getSeconds()}`
    console.log(currentTime);
    time.innerHTML = currentTime



}


// x = [Labels[7], Labels[4]]
// console.log(x);
// x.forEach(label => {
//     label.style = "color:blue"

// })




// control_Lebel colosr

const Label_colors = (colors_black) => {

    colors_black.forEach(black => {
        black.style = "color:black"

    })

}


//showError  function
const showError = (input) => {
        input.classList.add("Error")

    }
    // function showSucces

const Showsucces = (input) => {

    input.classList = "success"


}


const chechAnswers = (input_Click) => {
    let parentElement = input_Click.parentElement;
    if (parentElement.classList.contains("correct") || parentElement.classList.contains("success")) {
        Showsucces(parentElement)
            // Label_colors([Labels[0], Labels[2], Labels[3]]) //queion 1labels
            // Label_colors([Labels[5], Labels[6], Labels[7]]) //queion 1labels 222
            // Label_colors([Labels[9], Labels[10], Labels[11]]) //queion 1labels 33
            // Label_colors([Labels[12], Labels[13], Labels[14]]) //queion 1labels4444
            // Label_colors([Labels[17], Labels[16], Labels[19]]) //queion 1labels 55

    } else {
        showError(parentElement)

    }

}

inputs.forEach((input_radio) => {
    input_radio.addEventListener("click", () => {
        // input.parentElement.classList = "success"
        chechAnswers(input_radio)

    })

})








// Labels.forEach((Label, index) => {

//     if (Label.parentElement.classList.contains("correct")) {
//         Label.style = "color:green"
//         console.log("hi log");

//     }



// })