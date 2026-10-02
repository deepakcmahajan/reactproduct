

function Child1(props) {
    return (
        <div style={{ background: 'lightgreen' }}>
            <h2>Child1</h2>
            <div>{props.children}</div>
            <Child2> <p> This is from Parent </p> </Child2>
        </div>
    );
}

function Child2(props) {
    const { brand, model } = props;
    return (
        <div style={{ background: 'lightblue' }}>
            <h2>Child2</h2>
            <div>{props.children}</div>
            <Child3> <p> This is from child </p> </Child3>
        </div>
    );
}

function Child3(props) {
    const { brand, model } = props;
    return (
        <div style={{ background: 'lightpink' }}>
            <h2>Child3</h2>
            <div>{props.children}</div>
        </div>
    );

}

function Grandpa() {
    return (
        <div>
            <Child1>
                <p> This is from Grandpa </p>
            </Child1>
        </div>
    );
}
export default Grandpa;