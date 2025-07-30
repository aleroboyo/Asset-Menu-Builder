import { useState } from "react"
import { AddItem, type Asset } from "./component/AddItem"

export function AssetMenuBuilderAdminPage () {
    const [menuItems, setMenuItems] = useState<Asset[]>([])

    return (
        <>
            <title>Asset Menu Builder Admin</title>
  
            <div>
                <div>
                    <h1>Asset Menu Builder Admin</h1>
                </div>

                <div>
                    <div>
                        <div>
                            <h2>Administration</h2>
                        </div>
                        <div>
                            <h3>Create Menu Item</h3>
                            
                            <AddItem setMenuItems={setMenuItems} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>Asset Menu</h3>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>Label</th>
                                    <th>Type</th>
                                    <th>Metadata</th>
                                </thead>
                                <tbody>
                                    {menuItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.label}</td>
                                            <td>{item.type}</td>
                                            <td>Show in Nav: {item.metaData.showInNav} {item.metaData.icon && `, Icon: ${item.metaData.icon}`}</td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}