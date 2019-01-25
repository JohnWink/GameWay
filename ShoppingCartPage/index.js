var total = 0; 
  var counter = 0; 
        function addItemFunction(value, name){

          if(counter < 9){
              // creates the div where we want to put the purchase info
              let itemDiv = document.createElement("div");

              // adds the text to a variable, in his situaton we add a counter that is increasing by 1 everytime a purchase is made.
              let itemDivID = "itemDiv" + counter;
              // this auto generated text is defined as the id of the Div, so that each created line has the following IDs (itemDiv0, itemDiv1, itemDiv2, etc)
              itemDiv.setAttribute("id", itemDivID);
              // We also define a class, so that every div that has the itemDiv class can be personalized the same way through CSS
              itemDiv.setAttribute("class", "itemDiv");  
             



              // creates the <p> element
             let item = document.createElement("p"); 

             // prepares the text 
             let gameName = document.createTextNode(name + ":           " + value + " euros");

             //enters the prepared text onto the <p> element
             item.appendChild(gameName);

             itemDiv.appendChild(item);
              
             let removeButton = document.createElement("BUTTON");

              //Here we create the proper text to add as an attribute to the button. In here, the value and counter are relative, since it depends on the info we have on the game, something we send to*
              // *this function through the "onclick" button of the itemBox div. An example of this formed text would be: "removeItemFunction(50, 'itemDiv0')"
            let removeButtonFunction = "removeItemFunction(" + value + ",'itemDiv" + counter + "')";
             removeButton.setAttribute("onclick", removeButtonFunction);

              // the button will have "x" tas text
             let removeButtonText = document.createTextNode("X");

             //adding a class to the button
             removeButton.setAttribute("class","removeButton");

              //the text is added to the button
             removeButton.appendChild(removeButtonText);

              // the button is added to the itemDiv
             itemDiv.appendChild(removeButton);

              //locates the place (in this case <div>) where we want to write the element
            let outputColumn = document.getElementById("outputBox2");

            // writes the element onto the located <div>
             outputColumn.appendChild(itemDiv);

              // adds the value of the selected product to the total variable previously created
             total = total + value;

              // selects the <h2> that wants to be replaced
              let totalText = document.getElementById("totalId");

              // creates the element of the replacement
              let totalValueItem = document.createElement("h2");

              // adds an id to locate the changed element in future updates
              totalValueItem.setAttribute("id" , "totalId");

              // adds text with the newly calculated total
              let totalValue = document.createTextNode("Total: " + total + " Euros");

              //adds this prepared text onto the element
              totalValueItem.appendChild(totalValue);

              // locates the division where the element that we want to replace is
              let totalDiv = document.getElementById("totalDiv");

              // replaces the element ( replaces totalText with totlValueItem)
              totalDiv.replaceChild(totalValueItem, totalText)

                // this counter will always increase if a new purchase is made, so that every item line we have is defined diferently through their IDs (itemDiv0, itemDiv1, itemDiv2, etc)
                counter++;
          }
          else{
            var modal = document.getElementById('myModal');



            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 

            modal.style.display = "block";


            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
           modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
          }
    
         }
         // we call this function when we want to remove an item that was added to the shopping cart. For this to happen, we must give this function, the item ID ( itemDiv) so that we can locate it and to remove it
         // * and its value to subtract the total by the value so that the total is always from the wanted items, not including the removed ones. 
         function removeItemFunction(subtractValue, itemDiv){

            // we locate the div we want to remove
           let removeItemDiv = document.getElementById(itemDiv);

           // we locate the Parent div that contains the div we want to remove
           let outputColumn = document.getElementById("outputBox2");

           // we remove the wanted div through its parent div
           outputColumn.removeChild(removeItemDiv);

            // we also take away the value that the item was worth from the total, since the logic is that we don't want this item anymore, so the total value of the purchase is lesser than before.
           total = total - subtractValue;

            // selects the <h2> that wants to be replaced
            let totalText = document.getElementById("totalId");

            // creates the element of the replacement
            let totalValueItem = document.createElement("h2");

            // adds an id to locate the changed element in future updates
            totalValueItem.setAttribute("id" , "totalId");

            // adds text with the newly calculated total. If the total is 0, the "euros" won't appear, for logic purposes
            let totalValue;
            
            if(total != 0){
             totalValue = document.createTextNode("Total: " + total + " Euros");
              }
            else if(total == 0){
             totalValue = document.createTextNode("Total: ");
              }

            

            //adds this prepared text onto the element
            totalValueItem.appendChild(totalValue);

            // locates the division where the element that we want to replace is
            let totalDiv = document.getElementById("totalDiv");

            // replaces the element ( replaces totalText with totlValueItem)
            totalDiv.replaceChild(totalValueItem, totalText);

            // since a div was removed, the counter gets subtracted by 1, so that if another item is entered, it can take the ID of the previously removed Item. 
           counter--;

   
         }
