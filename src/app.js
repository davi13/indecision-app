class Indecision extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your live in the hands of a computer.';
        const options = ['One', 'Two', 'Three', 'Four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('hello');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do ?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('some message');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((e, i) => <Option key={i} OptionText={e} />)}

            </div>
        );
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Options: {this.props.OptionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleSubmit(e) {

        e.preventDefault();


        if (e) {
            console.log(e.target.elements.options.value);
            alert(e.target.elements.options.value);

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