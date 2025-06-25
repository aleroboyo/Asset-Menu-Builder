"use strict";
const nameInput = document.getElementById("nameInput");
const categoryInput = document.getElementById("categoryInput");
const typeInput = document.getElementById("typeInput");
const assetDetails = [];
function addAsset() {
    const nameInputValue = nameInput.value;
    const categoryInputValue = categoryInput.value;
    if (!nameInputValue || !categoryInputValue) {
        throw new TypeError('Please fill required fields!');
    }
    else {
        const newAssetDetails = {
            name: nameInputValue,
            category: categoryInputValue,
            serialNo: Math.random()
        };
        assetDetails.push(newAssetDetails);
        const displaySec = document.querySelector("#assetDisplay");
        if (displaySec) {
            const lastAsset = assetDetails[assetDetails.length - 1];
            displaySec.textContent = `${0 + 1} Asset Name: ${lastAsset.name}   Category: ${lastAsset.category}   Serial No: ${lastAsset.serialNo}`;
        }
    }
}
function fetchHook() {
    const tableBody = document.getElementById("assetTableBody");
    tableBody.innerHTML = "";
    for (let i = 0; i < assetDetails.length; i++) {
        const row = document.createElement("tr");
        const assetName = document.createElement("td");
        assetName.textContent = assetDetails[i].name;
        const assetCategory = document.createElement("td");
        assetCategory.textContent = assetDetails[i].category;
        const assetType = document.createElement("td");
        assetType.textContent = typeInput.value;
        const assetSerialNo = document.createElement("td");
        assetSerialNo.textContent = assetDetails[i].serialNo.toString();
        row.appendChild(assetName);
        row.appendChild(assetCategory);
        row.appendChild(assetType);
        row.appendChild(assetSerialNo);
        tableBody.appendChild(row);
    }
}
const nameInput2 = document.getElementById("nameInput2");
const typeInput2 = document.getElementById("typeInput2");
const showNav = document.getElementById("showNav");
function createMenu() {
    const nameInputValue2 = nameInput2.value;
    const typeInputValue2 = typeInput2.value;
    const showNawSelection = showNav.value;
    let assetId = 0;
    const menu = [{
            name: nameInputValue2,
            type: typeInputValue2,
            showNav: showNawSelection,
            id: assetId++
        }];
    document.querySelector("#displayMenu").innerHTML = `Menu:
    Asset Name- ${nameInputValue2} 
    Type- ${typeInputValue2}
    Show in Nav- ${showNawSelection}
    Id- ${assetId++}`;
}
