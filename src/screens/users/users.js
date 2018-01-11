import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions';
import TextMagic from './../../components/textMagic';

class Users extends Component {

    onChangeText = (number) => {
        const count = parseInt(number);
        this.props.counterSet(count);
    }

    render() {
        console.log(this.props)
        const { container, countViewStyle, textInput, welcome } = styles;
        const users = this.props.users.users.map(user => {
            return (
                <Text key={user.id}>{user.name}</Text>
            )
        });

        return (
            <View style={container}>
                <View style={{ marginBottom: 20 }}></View>
                <Button onPress={this.props.getAllUsers} title="Get Users" />
                {users}
                <TextMagic />
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
});

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, { getAllUsers })(Users);
