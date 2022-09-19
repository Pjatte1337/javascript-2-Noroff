// Creating elements in a neat small reusable function
export function createElement(elementName = "", className = "", elementId = "") {
 const element = document.createElement(elementName);
 element.classList.add(className);
 element.id = elementId;
 return element;
}

// Creating parent function
export function createParentElement(elementName = "", className = "", elementId = "", children = []) {
 const element = document.createElement(elementName);
 element.classList.add(className);
 element.id = elementId;
 element.append(children);
 return element;
}

// Creating children content for createParentElement
export function createChildren(elementName = "", className = "", elementId = "") {
 const element = document.createElement(elementName);
 element.classList.add(className);
 element.id = elementId;
 return element;
}

// Card factory
export function createCards(elementName = "", className = "", elementId = "", title, body, author, created) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    element.id = elementId;
    element.innerHTML = `
    <div class="card">
    <div class="card-header d-flex justify-content-between">
     <h5 class="card-title">${title}</h5>
     <div class="dropdown">
      <button class="btn" type="button" id="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i class="fa-solid fa-gear"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="settings">
       <button type="submit" class="dropdown-item">Update</button>   
       <button type="submit" class="dropdown-item">Delete</button>
      </div>
     </div>
    </div>
    <div class="card-body">
     <p class="card-text">${body}.</p>
    </div>
    <div class="card-footer">
     <small class="text-muted"> - ${author}</small>
     <small class="text-muted">Last updated ${created}</small>
    </div>
   </div>
    `
    return element;
   }