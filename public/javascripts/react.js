//defining our code in its own file, vs inline

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <ShoppingList name="Dino">
                <ul>
                    <li>Apples</li>
                    <li>Pears</li>
                    <li>Pork</li>
                </ul>
            </ShoppingList>
            <ShoppingList name="Maff">
                <ul>
                    <li>Pencils</li>
                    <li>Pends</li>
                </ul>
            </ShoppingList>
        </div>
    )
}

