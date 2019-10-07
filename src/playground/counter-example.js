class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {

        }

    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    };


    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })

    };
    reset() {
        this.setState((prevState) => {
            return {
                count: prevState.count = 0
            };
        });

    };
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    };

}
ReactDOM.render(<Counter count={0} />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounteApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounteApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounteApp();
// };

// const appRoot = document.getElementById('app');

// const templateTwo = (
//     <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );

// const renderCounteApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounteApp();