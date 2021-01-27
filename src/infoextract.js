import react, { Component } from "react";
function Information(obj) {
  const Information = obj["members"];

  for (let i = 0; i < Information.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = Information[i].name;
    myPara1.textContent = "Age: " + Information[i].age;
    myPara2.textContent = "country: " + Information[i].country;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}
export default Information;
