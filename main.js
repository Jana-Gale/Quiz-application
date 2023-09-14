//select button div


let button = document.querySelector("button");
let input_radio_1 = document.querySelector("#ans1");
let input_radio_2 = document.querySelector("#ans2");
let input_radio_3 = document.querySelector("#ans3");
let input_radio_4 = document.querySelector("#ans4");


//input  part 2
let input_radio_5 = document.querySelector("#ans5");
let input_radio_6 = document.querySelector("#ans6");
let input_radio_7 = document.querySelector("#ans7");
let input_radio_8 = document.querySelector("#ans8");

// console.log(input_radio_4);

console.log(input_radio_4.value);


//labels select
let label_1 = document.querySelectorAll("label")[0]
let label_2 = document.querySelectorAll("label")[1]
let label_3 = document.querySelectorAll("label")[2]
let label_4 = document.querySelectorAll("label")[3]


// questios part2 label

let label_5 = document.querySelectorAll("label")[4]
let label_6 = document.querySelectorAll("label")[5]
let label_7 = document.querySelectorAll("label")[6]
let label_8 = document.querySelectorAll("label")[7]




// showSuccess function
const showSucces = (input, label_color) => {
    input.style = "accent-color:green ;"
    label_color.style = "color:green"

    // input_radio_2.checked = true



}

// showError function
const showError = (element, labels_color) => {
        element.style = "accent-color:red"
        labels_color.style = "color:red"



    }
    //labels ka black kadhig
const showErrorLabel = (labels_chech) => {
    labels_chech.forEach((element) => {
        element.style = "color:black"

    })


}



//Event all documents
document.addEventListener("click", (event) => {
    if (input_radio_2.contains(event.target)) {
        showSucces(input_radio_2, label_2)
        showErrorLabel([label_1, label_3, label_4])

        //wrong answer

    } else if (input_radio_1.contains(event.target)) {
        showError(input_radio_1, label_1)
        showErrorLabel([label_2, label_3])



    } else if (input_radio_3.contains(event.target)) {
        showError(input_radio_3, label_3)
        showErrorLabel([label_1, label_2, label_4])




    } else if (input_radio_4.contains(event.target)) {
        showError(input_radio_4, label_4)
        showErrorLabel([label_1, label_2, label_3])

    }

})






//questions part2

//Event all documents  
document.addEventListener("click", (event) => {
    if (input_radio_5.contains(event.target)) {
        showSucces(input_radio_5, label_5)
        showErrorLabel([label_6, label_7, label_8])

        //wrong answer

    } else if (input_radio_6.contains(event.target)) {
        showError(input_radio_6, label_6)
        showErrorLabel([label_5, label_7, label_8])



    } else if (input_radio_7.contains(event.target)) {
        showError(input_radio_7, label_7)
        showErrorLabel([label_5, label_6, label_8])




    } else if (input_radio_8.contains(event.target)) {
        showError(input_radio_8, label_8)
        showErrorLabel([label_5, label_6, label_7])

    }

})