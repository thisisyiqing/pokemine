import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './today.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
  
  render () {
    const startTask1 = () => {
      Taro.navigateTo({
        url: `/pages/fudan/fudan?name=健身`,
      })
    }

    const startTask2 = () => {
      Taro.navigateTo({
        url: `/pages/fudan/fudan?name=读书`,
      })
    }

    const startTask3 = () => {
      Taro.navigateTo({
        url: `/pages/fudan/fudan?name=戒酒`,
      })
    }

    return (
      <View>
        <View className='countDownTaskTitle'>
          <Text>孵蛋区（计时打卡任务）</Text>
          <View className='taskBlock'>
            <View>
              <View className='egg1' onClick={startTask1}>
                <Text className='taskName'>健身</Text>
              </View>
              
              <View className='layer1'></View>
            </View>
            <View>
              <View className='egg2' onClick={startTask2}>
                <Text className='taskName'>读书</Text>
              </View>
              <View className='layer1'></View>
              
            </View>
            <View>
              <View className='egg3' onClick={startTask3}>
               <Text className='taskName'>戒酒</Text>
              </View>
              <View className='layer1'></View>
             
            </View>
          </View>
        </View>

        <View className='noCountDownTaskTitle'>
          <Text>破壳区（非计时打卡任务）</Text>
          <View className='taskBlock'>
            <View className='egg1'>
              <Text className='taskName'>健身</Text>
            </View>
            <View className='egg2'>
              <Text className='taskName'>读书</Text>
            </View>
            <View className='egg3'>
              <Text className='taskName'>戒酒</Text>
            </View>
          </View>
        </View>
      </View>   
    )
  }
}
