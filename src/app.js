class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['thing One', 'thing Two', 'thing Three', 'thing lol']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    //handleDeleteOptions
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your live in the hands of a computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                //handlePick={this.props.options}
                >
                    What Should I do ?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((e, i) => <Option key={i} OptionText={e} />)}

            </div>
        );
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>Options: {this.props.OptionText}</li>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleSubmit(e) {

        e.preventDefault();
        const option = e.target.elements.options.value.trim()

        if (option) {
            console.log(e.target.elements.options.value);
            alert(option);

        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="in here put your text" name="options" />
                    <button >Add</button>
                </form>
            </div>
        );
    };
}


ReactDOM.render(<Indecision />, document.getElementById('app'));