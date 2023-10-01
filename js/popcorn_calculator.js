
function calculation() {
    const no_of_people = parseInt(document.getElementById("no_of_people").value);

    if (isNaN(no_of_people) || no_of_people <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    const small = Math.ceil(no_of_people * 1);
    const medium = Math.ceil(no_of_people * 1/3);
    const large = Math.ceil(no_of_people * 2/9);

    document.getElementById("small").innerText = small;
    document.getElementById("medium").innerText = medium;
    document.getElementById("large").innerText = large;

    document.getElementById("results").style.display = "block";
}

function resetResults() {
    document.getElementById("results").style.display = "none";
}