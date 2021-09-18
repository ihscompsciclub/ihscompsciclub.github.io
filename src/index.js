// hi there!
// welcome to the index.js
// this uses React to create child classes of React.Component

class Fill extends React.Component {
    // attributes:
    // this.props.fillText
    // this.props.times
    multiplyString(str, times) {
        var temp = "<br>";
        for (var i = 0; i < times; i++) {
            temp += str + "<br>";
        }
        return temp;
    }
    render() {
        if (this.props.id != null) {
            return React.createElement('h1', { id: this.props.id, dangerouslySetInnerHTML: { __html: this.multiplyString(this.props.fillText, this.props.times) } });
        }
        else {
            return React.createElement('h1', { dangerouslySetInnerHTML: { __html: this.multiplyString(this.props.fillText, this.props.times) } });
        }
    }

}

class TopNavElement extends React.Component {
    // attributes:
    // this.props.title
    // this.props.id
    // this.props.href

    render() {
        if (this.props.id != null) {
            if (this.props.href != null) {
                return React.createElement('a', { href: this.props.href, id: this.props.id }, this.props.title);
            }
            else {
                return React.createElement('a', { id: this.props.id }, this.props.title)
            }
        }
        else {
            if (this.props.href != null) {
                return React.createElement('a', { href: this.props.href }, this.props.title);
            }
            else {
                return React.createElement('a', null, this.props.title);
            }
        }
    }
}

class TopNavBar extends React.Component {
    render() {
        return (
            React.createElement('div', { className: "topnav" },
                React.createElement(TopNavElement, { id: "static", title: "Comp Sci!" }),
                React.createElement(TopNavElement, { title: "Home", href: "index.html" }),
                React.createElement(TopNavElement, { title: "About Us", href: "about.html" }),
                React.createElement(TopNavElement, { title: "Activities", href: "activities.html" }),
                React.createElement(TopNavElement, { title: "Contact Us", href: "contact.html" })
            )
        )
    }
}


// TODO
// see https://docs.google.com/document/d/16BLn7T7ivYym9qI5dMtzOyyryrHUE_G6EjpGhztxA3Y/edit
