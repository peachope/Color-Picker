$(document).ready(function() {
    const colors = [{
            id: 1,
            color:"red",

        },
        {
            id: 2,
            color:"blue",
        },

    ]

    let selectedColor = null;

    renderColors(colors);
    
    $("#addColor").click(function(e) {
        e.preventDefault();
        console.log("alo");
        let inputValue = $("#inputColor").val();
        console.log(inputValue);
        $("app").css("background-color", `${inputValue}`);
        
        if (inputValue) {
            if (selectedColor) {
                selectedColor.color = inputValue;
                let index = colors.findIndex((val) => val.id === selectedColor.id);
                colors.splice(index, 1, selectedColor);
                selectedColor = null;
            } else {
                colors.unshift({
                    id: +Math.random().toFixed(2),
                    color: inputValue,
                   
                });

            }
            renderColors(colors);
        } else {
            alert("Input is empty");
        }
        $("#inputValue").val("");

    });

    $(".Color-list").on("click", "#delete", function(e) {
        e.preventDefault();
        alert("delete nó hả?")
        const id = $(this).data("id");
        console.log(id);
        let index = colors.findIndex((val) => val.id === id);
        colors.splice(index, 1);
        renderColors(colors);
    });

    $(".Color-list").on("click","li", function(e) {
        e.preventDefault();
        alert("doi mau")
        const color = $(this).data("color");
        console.log(e.target.value);
        console.log(color);
        $("app").css("background-color",color);
    });
});



function renderColors(list) {
    $(".Color-list").empty();
    list.map(val => {
        $(`<li>${val.color}<span data-id=${val.id} id="delete" ><i  class="fas fa-trash"></i></span></li>`).appendTo(".Color-list");
    })
    var count = list.length;
    $("#countTask").empty();
    $("#countTask").append(`You have ${count} task`);
}