export function AssetMenuBuilderAdminPage () {
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
                            
                            <div>
                                <label>Label</label>
                                <input type="text"/>
                            </div>

                            <div>
                                <label>Type</label>
                                <input type="text"/>
                            </div>

                            <div>
                                <label>Icon</label>
                                <input type="text"/>
                            </div>

                            <div>
                                <label>Show in Nav</label>
                                <input type="checkbox"></input>
                            </div>
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
                                    <tr>
                                        <td>48748</td>
                                        <td>Hp Laptop</td>
                                        <td>Laptop</td>
                                        <td>Show in Nav: Yes, Icon: 💻</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}