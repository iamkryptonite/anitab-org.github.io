import React, {useEffect} from 'react';
import $ from 'jquery';
import dayjs from 'dayjs';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {Event,Line,Date,Marker,Fade,Stroke,ArrowNavigation,ArrowText,ScrollContainer,ScrollMain,Container,Months} from './styles';
import {ArrowLeftOutlined ,ArrowRightOutlined} from '@ant-design/icons'
import {getEvents,getMonths} from '../../content/programs_events'
//--------------------------------------------------------------------------------------------
const events  = getEvents();
const months = getMonths();
function Timeline() {
    var p = dayjs().date(); //current date
    var curr_month = dayjs().month(); //current month
    //scrolls the timeline to the current date and month
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p+500);
        p=p+500;
    })
    //onclick scrolls the timeline to the left
    const scrollLeft=()=>{
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p-=35);
        if(p<0)
        p=0;
    }
    //onclick scrolls the timeline to the right
    const scrollRight=()=>{
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p+=35);
    }
  return (
      <>
            <ArrowNavigation>
                <View style={{flexDirection:'row'}}>
                    <TouchableWithoutFeedback onPress={scrollLeft}>
                        <ArrowLeftOutlined style={{color:'#42aaf5'}}/>
                    </TouchableWithoutFeedback>
                    <ArrowText>PAST</ArrowText>
                </View>
                <View style={{flexDirection:'row'}}>
                    <ArrowText>FUTURE</ArrowText>
                    <TouchableWithoutFeedback onPress={scrollRight}>
                        <ArrowRightOutlined style={{color:'#42aaf5'}}/>
                    </TouchableWithoutFeedback>
                </View>
            </ArrowNavigation>
            <ScrollContainer>
                {
                    events.map((item)=>(
                        <View key={item.event}>
                            <Event style={{color:item.color,borderColor:item.color,flex:1,left:item.date[0][1]*10}}>{item.event}</Event>
                            <Stroke style={{width:(item.date[0][1]+5)*100}}></Stroke>
                        </View>
                    ))
                }
                <ScrollMain
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <Container>
                        {
                            events.map((item)=>(
                                <View style={{marginBottom:32,flexDirection:'column'}} key={item.event}>
                                    <Line style={{left:(item.date[0][1]-1)*40, width:30*12*50, borderBottomColor:item.color}}></Line>
                                    {
                                        item.date.map((d)=>(
                                            <Date style={{left:(30*d[0]+d[1]-1)*40,backgroundColor:item.color}} key={30*d[0]+d[1]}>{d[1]}</Date>
                                        ))
                                    }
                                    <Fade style={{left:(item.date[0][1]-1)*40,width:(p-item.date[0][1])*40+20}}></Fade>
                                    <Marker style={{left:(p-1)*40+20}}></Marker>
                                </View>
                            ))
                        }
                        <View style={{left:(p-1)*40+25}}><Text>Today {dayjs().date()}th {months[curr_month][1]}</Text></View>
                        <View style={{flexDirection:'row'}}>
                            {
                                months.map((m)=>(
                                    <>
                                        <Months style={{left:(m[0]*30)*40}}><Text>1st {m[1]}</Text></Months>
                                    </>
                                ))
                            }
                        </View>
                    </Container>
                </ScrollMain>
            </ScrollContainer>
      </>
  );
}
export default Timeline;
