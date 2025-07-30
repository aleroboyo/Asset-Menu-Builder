 /* eslint-disable react-refresh/only-export-components */
import { useState } from "react"

type Id = string
type Label = string
type Type = string
type ShowInNav = "Yes" | "No"

type MetaData = Partial<{icon: string}> & { showInNav: ShowInNav}

export type Asset = {
    id: Id
    label: Label
    type: Type
    metaData: MetaData
}

export function generateId(): Id {
    return `asset-${Math.random().toString(36).substring(2, 5)}`
}

type AddItemProps = {
  setMenuItems: React.Dispatch<React.SetStateAction<Asset[]>>
}

export function AddItem({ setMenuItems }: AddItemProps) {
    const [label, setLabel] = useState<Label>("")
    const [type, setType] = useState<Type>("")
    const [icon, setIcon] = useState("")
    const [showInNav, setShowInNav] = useState<ShowInNav>("No")

    function resetForm() {
        setLabel("")
        setType("laptop")
        setIcon("")
        setShowInNav("No")
    }

    function validateForm(asset: Asset): boolean {
        if (!asset.label.trim() || !asset.type.trim() || !asset.metaData.showInNav) {
        alert("Please fill all required fields!")
        return false
    }
        return true
    }

    const handleAddAsset = (e: React.MouseEvent) => {
        e.preventDefault()

        const newItem: Asset = {
            id: generateId(),
            label,
            type,
            metaData: {
            icon: icon || undefined,
            showInNav,
         },
        }

        const isValid = validateForm(newItem)

        if (!isValid) return

        setMenuItems(prev => [...prev, newItem])
        resetForm()
  }

  return (
    <div>

      <div>
        <label>Label</label>
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
      </div>

      <div>
        <label>Type</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </div>

      <div>
        <label>Icon</label>
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
      </div>

      <div>
        <label>Show in Nav</label>
        <input
          type="checkbox"
          checked={showInNav === "Yes"}
          onChange={(e) => setShowInNav(e.target.checked ? "Yes" : "No")}
        />
      </div>

      <button onClick={handleAddAsset}>Add Item</button>
    </div>
  )
}
