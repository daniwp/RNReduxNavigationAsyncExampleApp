import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { helloAction } from '../actions';

class TextMagic extends Component {

    render() {
        console.log(this.props)
        const { container } = styles;
        const { helloText, pressedButton } = this.props.hello;
        return (
            <View style={container}>
                <Text>
                    {helloText}
                </Text>
                <Text>
                    Did you press the button ? {pressedButton.toString()}
                </Text>
                <Button onPress={this.props.helloAction} title="Show me the magic" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    textInput: {
        width: 40,
        height: 40,
        borderWidth: 1,
        textAlign: 'center'
    },
    welcome: {
        fontSize: 20,
        padding: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    countViewStyle: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function mapStateToProps(state) {
    return {
        hello: state.hello
    }
}

export default connect(mapStateToProps, { helloAction })(TextMagic);
