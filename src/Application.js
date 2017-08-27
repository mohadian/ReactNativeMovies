import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux'

import SideMenu from 'react-native-side-menu';

import NetflixMenu from './components/NetflixMenu';
import Header from './components/Header'
import Slide from './components/Slider'

const image = require('../assets/menu.png');

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
      backgroundColor: 'black'
  },
});

export class Application extends Component {
  constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            itemSelected: 'Home'
        }
        this.getTwoRows = this.getTwoRows.bind(this)
        this.itemSelected = this.itemSelected.bind(this)
    }

    static navigationOptions = {
        headerVisible: false
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    itemSelected(item){
        this.setState({
            itemSelected: item,
            isOpen: false
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    getTwoRows(){
        const {shows} = this.props
        const array = shows.slice(0)
        const val = Math.floor(array.length / 2)
        const newArray = array.splice(0, val)
        return [
            array,
            newArray
        ]
    }

  render() {
    const menu = <NetflixMenu
                        navigation={this.props.navigation}
                        itemSelected={this.itemSelected}
                        itemSelectedValue={this.state.itemSelected}
                   />;

    return (

      <View style={{flex: 1}}>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
          style={{flex: 1}} >
          <View style={[{flex: 1}, styles.container]}>
            <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
            <View style={{flex: 1}}>
                <Slide />
            </View>
          </View>
        </SideMenu>
      </View>
    );
  }
}

export default connect(state => ({shows: state.shows}))(Application)
