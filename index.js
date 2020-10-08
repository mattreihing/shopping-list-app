function shoppingList(){

// 1. Add item to list
$("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    const addedItem = $("#shopping-list-entry").val()
    $(".shopping-list").append(
        `<li>
        <span class="shopping-item">${addedItem}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
        </li>`
        );
        $("#shopping-list-entry").val("");
    });
//enter something in the field
//click "add item" button to submit
//append html to DOM
//the returned string creates another li item with the text that was entered in the "add an item" field
//const item = html



//-------------------------------------------

// 2. check/uncheck item 
//toggling the .shopping-item__checked class


    //on click of "check" button
    $(".container").on("click", ".shopping-item-toggle",  function(event){
        //select the span element 
        $(this).closest("div").prev("span").toggleClass("shopping-item__checked");
        //toggle the class "shopping-item__checked"
        //$("span").toggleClass(".shopping-item__checked");
    });


//-------------------------------------------


// 3. remove from list
    //on click of "delete" button
   $(".container").on("click", ".shopping-item-delete",  function(event){
    //select the element and all related elements to li
    //remove all selected elements
    this.closest("li").remove();
   });
}

/*
$('ul').on('click', 'li', function(event) {
    this.remove();
    });
*/

$(shoppingList);