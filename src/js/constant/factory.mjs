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
export function createCards(elementName = "", className = "", elementId = "", title, created, body, post_image, image, author, updated) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    element.id = elementId;
    element.innerHTML = `
    <div class="card">
    <div class="card-header">
    <div class="container-fluid">
    <div class="row">
    <div class="col-2 m-0 p-0">
    <img src="${image}" class="img-fluid post-image" alt="user profile image" />
    </div>
    <div class="col-9 m-0 p-0">
    <div class="row">
    <h5 class="card-title">${title}</h5>    
    </div>
    <div class="row">
    <div class="col">
    <small class="text-muted"> - ${author}</small>
    <cite><small class="text-muted text-small">${created}</small></cite>
    </div>
    </div>
    </div>
    <div class="col-1">
    <div class="dropdown">
    <a class="btn" href="#" role="button" id="settings" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fa-solid fa-gear"></i></a>
    <ul class="dropdown-menu" aria-labelledby="settings">
     <li><button type="submit" class="dropdown-item"><i class="fa-solid fa-pencil"></i> Update</button></li>
     <li><button type="submit" class="dropdown-item"><i class="fa-solid fa-trash-can"></i> Delete</button></li>
    </ul>
   </div>
    </div>
    </div>
    </div>
     
    </div>
    <div class="card-body">
     <p class="card-text">${body}</p>
     <img src="${post_image}" class="img-fluid" alt="User uploaded image" id="post_image"/>
    </div>
    <div class="card-footer">
     <small class="text-muted">Last updated ${updated}</small>
    </div>
   </div>
    `
    return element;
   }