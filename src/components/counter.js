import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet } from '../actions';

class Counter extends Component {

    onChangeText = (number) => {
        const count = parseInt(number);
        this.props.counterSet(count);
    }

    render() {
        console.log(this.props)
        const { container, countViewStyle, textInput, welcome } = styles;
        const { navigate } = this.props.navigation;
        return (
            <View style={container}>
                <TextInput
                    style={textInput}
                    onChangeText={this.onChangeText}
                    value={this.props.count.toString()}
                    underlineColorAndroid="transparent"
                />
                <View style={countViewStyle}>
                    <Button onPress={this.props.counterIncrement} title="+" />
                    <Text style={welcome}>
                        {this.props.count}
                    </Text>
                    <Button onPress={this.props.counterDecrement} title="-" />
                </View>
                <Button onPress={this.props.counterClear} title="Clear" />
                <Button onPress={() => navigate('Users')} title="See Users" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: 'space-around',
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
        count: state.counter,
    }
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet })(Counter);

