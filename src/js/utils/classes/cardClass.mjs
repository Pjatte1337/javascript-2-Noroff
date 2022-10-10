export class Card {
 constructor(elementName = "", className = "", elementId = "", title, created, body, post_image, author, updated) {
  this.element = document.createElement(elementName);
  element.classList.add(className);
  element.id = elementId;
  element.innerHTML = ``;
 }
}


export class LoopingCard {
/**
 * 
 * @param {*} elementName 
 * @example
 * @param {*} attributes 
 * @example
 * 
 * @param {*} template 
 * @example
 * 
 * @returns 
 */
    constructor(elementName, attributes = {}, template = "") {
  this.element = document.createElement(elementName);
  this.addAttributes(attributes);
  this.addTemplate(template);
  return this.element;
 }

 addAttributes(attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
   this.element.setAttribute(key, value);
  });
 }

 addTemplate(template) {
  this.element.innerHTML = `${template}`;
 }
}
