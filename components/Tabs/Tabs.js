
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.element; 
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-link-selected[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabItem.addEventListener('click', (event) => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    //links is a NodeList of 'tabs-links' with only element being the class itself including all child nodes. The 'tabs-links' class is then instantiated as a new Tablink.
    const links = document.querySelectorAll('.tabs-links').forEach( link => new TabLink(link));

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => 
      {link.getElementsByClassName('.tabs-link-selected').removeAttribute('.tabs-links-selected');    
    })

    // Add a class named "tabs-link-selected" to this link
    this.element.setAttribute('class', 'tabs-link-selected');
    
    // Call the select method on the item associated with this link    
    this.element.select();
  } 
   
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element; 
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => {
      item.getElementsByClassName('.tabs-item-selected').removeAttribute('.tabs-item-selected')
    });
     
    // Add a class named "tabs-item-selected" to this element
    this.element = setAttribute('class', 'tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

//links = document.querySelectorAll();