const nameInput = document.getElementById("nameInput") as HTMLInputElement
const categoryInput = document.getElementById("categoryInput") as HTMLSelectElement
const typeInput = document.getElementById("typeInput") as HTMLInputElement

type AssetName = string
type AssetCategory = "software" | "hardware"
type SerialNo = number

type AssetDetails = {
    name: AssetName
    category: AssetCategory
    serialNo: SerialNo
}

const assetDetails: AssetDetails[] = []

function addAsset () {
    const nameInputValue: AssetName = nameInput.value
    const categoryInputValue: AssetCategory = categoryInput.value as AssetCategory
      
    if(!nameInputValue || !categoryInputValue) {
        throw new TypeError('Please fill required fields!')
    } else {
        const newAssetDetails = {
            name: nameInputValue,
            category: categoryInputValue,
            serialNo: Math.random()
        }

        assetDetails.push(newAssetDetails)

        const displaySec = document.querySelector("#assetDisplay") 
        
        if (displaySec) {
            const lastAsset = assetDetails[assetDetails.length - 1]
            displaySec.textContent = `${0 + 1} Asset Name: ${lastAsset.name}   Category: ${lastAsset.category}   Serial No: ${lastAsset.serialNo}`
        }
    } 
}

function fetchHook<T>() {
    const tableBody = document.getElementById("assetTableBody") as HTMLTableElement
    tableBody.innerHTML = ""

    for(let i = 0; i < assetDetails.length; i++) {
        
        const row = document.createElement("tr")
        const assetName = document.createElement("td")
        assetName.textContent = assetDetails[i].name
        const assetCategory = document.createElement("td")
        assetCategory.textContent = assetDetails[i].category
        const assetType = document.createElement("td")
        assetType.textContent = typeInput.value
        const assetSerialNo = document.createElement("td")
        assetSerialNo.textContent = assetDetails[i].serialNo.toString()

        row.appendChild(assetName)
        row.appendChild(assetCategory)
        row.appendChild(assetType)
        row.appendChild(assetSerialNo)

        tableBody.appendChild(row)
    }
}

const nameInput2 = document.getElementById("nameInput2") as HTMLInputElement
const typeInput2 = document.getElementById("typeInput2") as HTMLSelectElement
const showNav = document.getElementById("showNav") as HTMLInputElement

type FormInfo = {
    name: string
    type: "laptop" | "phone" | "software"
    icon?: string
    showInNav: true | false
}

type FormDetails = Omit<FormInfo, "id">

function createMenu() {
    const nameInputValue2 = nameInput2.value
    const typeInputValue2 = typeInput2.value
    const showNawSelection = showNav.value
    let assetId = 0
    
    const menu : FormDetails = [{
        name: nameInputValue2,
        type: typeInputValue2,
        showNav: showNawSelection,
        id: assetId++
    }]
    
    document.querySelector("#displayMenu").innerHTML = `Menu:
    Asset Name- ${nameInputValue2} 
    Type- ${typeInputValue2}
    Show in Nav- ${showNawSelection}
    Id- ${assetId++}`  
}           
   











