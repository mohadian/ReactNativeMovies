import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    }
}

export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagesSlider: [
                require('../../assets/1.jpg'),
                require('../../assets/2.jpg'),
                require('../../assets/3.jpg')
            ]
        }
    }
    render(){
        return (
            <View>
                <Swiper
                    autoplay
                    height={240}
                >
                {
                    this.state.imagesSlider.map((item, i) => <Slider
                        uri={item}
                        key={i}
                    />)
                }

                </Swiper>
            </View>
        )
    }
}
