import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default class DefaultButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={{
                    borderColor: '#404040',
                    borderWidth: 1,
                    paddingTop: 5,
                    paddingLeft: 7,
                    paddingRight: 7,
                    paddingBottom: 5,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    ...this.props.style
                }}>
                    {this.props.loading ?
                        <ActivityIndicator size={16} color={'#404040'} />
                        :
                        null
                    }
                    {this.props.icon && !this.props.loading ?
                        this.props.icon
                        :
                        null}
                    {this.props.icon && this.props.text ?
                        <View style={{ width: 5 }}>
                        </View>
                        :
                        null}
                    <Text style={{ fontSize: 12, color: '#404040', ...this.props.textStyle }}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

export class DarkButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={{
                    backgroundColor: '#404040',
                    paddingTop: 5,
                    paddingLeft: 7,
                    paddingRight: 7,
                    paddingBottom: 5,
                    borderRadius: 8,
                    flexDirection: 'row',
                    ...this.props.style
                }}>
                    {this.props.icon ?
                        this.props.icon
                        :
                        null}
                    {this.props.icon && this.props.text ?
                        <View style={{ width: 5 }}>
                        </View>
                        :
                        null}
                    <Text style={{ color: 'white', fontSize: 12, ...this.props.textStyle }}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}