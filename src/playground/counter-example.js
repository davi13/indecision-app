let count = 0;
const addOne = () => {
    count++;
    renderCounteApp();
};

const minusOne = () => {
    count--;
    renderCounteApp();
};
const reset = () => {
    count = 0;
    renderCounteApp();
};

const appRoot = document.getElementById('app');

const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const renderCounteApp = () => {
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounteApp();