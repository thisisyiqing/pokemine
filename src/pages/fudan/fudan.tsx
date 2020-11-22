import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtCountdown } from 'taro-ui'
import './fudan.scss'

export default class fudan extends Component {

  //componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }

  componentWillMount () {
    let name = this.$router.params.name;
    this.setState({
      name: name
    });
    console.log(name);
  }

  render () {
    return (
      <View>
        <View className='taskBlock'>
        <Text className='taskName'>任务名称</Text>
        <Text className='progress'>（进度：x/x）</Text>
        <View className='egg'></View>
       </View>

        <AtCountdown
        format={{ hours: ':', minutes: ':', seconds: '' }}
        seconds={10}
        onTimeUp={this.onTimeUp.bind(this)}
        />
      </View>
      
    )
  }
}
