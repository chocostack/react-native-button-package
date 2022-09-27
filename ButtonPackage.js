import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

export default class DefaultButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }

        return <TouchableWithoutFeedback onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={[{
                borderColor: '#404040',
                borderWidth: 1,
                padding: 8,
                borderRadius: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                ...disabledStyle
            }, this.props.style]}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'#404040'} />
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
                <Text style={{ fontSize: 15, color: '#404040', ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>;
    }

}
CCText
export class DarkButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let disabledStyle = {};

        if (this.props.disabled) {
            disabledStyle = { opacity: 0.5 }
        }


        return <TouchableWithoutFeedback onPress={() => {
            if (!this.props.disabled)
                this.props.onPress();
        }}>
            <View style={[{
                backgroundColor: '#404040',
                padding: 8,
                borderRadius: 8,
                flexDirection: 'row',
                ...disabledStyle
            }, this.props.style]}>
                {this.props.loading ?
                    <ActivityIndicator size={18} color={'white'} />
                    :
                    null
                }
                {this.props.icon ?
                    this.props.icon
                    :
                    null}
                {this.props.icon && this.props.text ?
                    <View style={{ width: 5 }}>
                    </View>
                    :
                    null}
                <Text style={{ color: 'white', fontSize: 15, ...this.props.textStyle }}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>;
    }

}

export class QuantityPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: props.quantity
        }
    }

    render() {
        let disabledMinusStyle = {};

        if (this.state.quantity == 1) {
            disabledMinusStyle = { opacity: 0.5 }
        }


        return <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'flex-end', 
                ...this.props.style 
            }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    const quantity = this.state.quantity - 1;

                    this.setState({
                        quantity: quantity
                    });

                    this.props.onChange(quantity);
                }}
            >
                <Text style={{
                    color: '#404040',
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                    backgroundColor: '#DDDDDD',
                    padding: 13,
                    paddingTop: 2,
                    paddingBottom: 2,
                    fontSize: 23,
                    ...disabledMinusStyle
                }}>
                    -
                </Text>
            </TouchableWithoutFeedback>
            <Text style={{
                color: '#404040',
                backgroundColor: '#DDDDDD',
                padding: 13,
                paddingTop: 7,
                paddingBottom: 7,
            }}>
                {this.state.quantity}
            </Text>
            <TouchableWithoutFeedback
                onPress={() => {
                    const quantity = this.state.quantity + 1;

                    this.setState({
                        quantity: quantity
                    });

                    this.props.onChange(quantity);
                }}
            >
                <Text style={{
                    color: '#404040',
                    borderBottomRightRadius: 7,
                    borderTopRightRadius: 7,
                    backgroundColor: '#DDDDDD',
                    padding: 13,
                    paddingTop: 2,
                    paddingBottom: 2,
                    fontSize: 23
                }}>
                    +
                </Text>
            </TouchableWithoutFeedback>
        </View>;
    }

}