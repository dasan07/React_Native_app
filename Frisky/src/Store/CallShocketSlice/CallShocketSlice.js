import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';
import { homescreen } from "@/Utility/Constants";

const initialState = {
    User: "",
    Scrollimg:""
}
export var details = [{
   
    "email": 'varshini@gmail.com',
    "password": 'Varshini@123',
    "ConfirmPassword": 'Varshini@123',
    "Name":'varshini',
    
},
{
    
    "email": 'sri@gmail.com',
    "password": 'Sri@123456',
    "ConfirmPassword":'Sri@123456',
    "Name":'sri'

}]
export const SECTIONS = [
    {
      title: homescreen.TRENDING,
      horizontal: true,
      data: [
        {
          key: "1",
          text: "Aniruth romantic hits",
          uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37OR3Dy/P374pvevWD/size_m_1606805633.webp",
        },
        {
          key: "2",
          text: "A R Rahman hits",
          uri: "https://m.media-amazon.com/images/I/61-DP+EXhHL._SX355_.jpg",
        },
        {
          key: "3",
          text: "Hip hop Adhi",
          uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1130637b-ff57-48b5-b8d6-bfe756c7af58/ddfyqy1-3657f3ec-c511-47e9-b5a4-470fb40076e1.jpg/v1/fill/w_1024,h_1024,q_75,strp/hiphop_tamizha_fanmade__by_kajandra_ddfyqy1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzExMzA2MzdiLWZmNTctNDhiNS1iOGQ2LWJmZTc1NmM3YWY1OFwvZGRmeXF5MS0zNjU3ZjNlYy1jNTExLTQ3ZTktYjVhNC00NzBmYjQwMDc2ZTEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SwN4OGq6LkjOT2C9uoNldWQuv5sIwF9FLPpxxTf1YpA",
        },
        {
          key: "4",
          text: "Ilayaraja melody",
          uri: "https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRyL3dq/VWRv5pMeWd/size_m_1515081240.webp",
        },
        {
          key: "5",
          text: "Anuradha hits",
          uri: "https://1601606126.rsc.cdn77.org/raagaimg/r_img/250/t/tc0000508-1.jpg",
        },
      ],
    },
    {
      title: homescreen.RECENT,
      horizontal: true,
      data: [
        {
          text: "Gv.Prakash hits",
          uri: "https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001224-2.jpg?w=240&dpr=2.6",
        },
        {
          text: "Sid sriram tamil hits",
          uri: "https://i.scdn.co/image/ab67706c0000bebbd275d0f7c811dfd6d911cf2d",
        },
  
        {
          text: "Stephen hits",
          uri: "https://media-images.mio.to/by_artist/S/Stephen%20Zechariah/One%20Love%20One%20Life%20%282020%29/Art-350.jpg",
        },
        {
          text: "Hits of shreya",
          uri: "https://c.saavncdn.com/356/Shreya-Ghoshal-Hits-Malayalam-2020-20200512124913-500x500.jpg",
        },
        {
          text: "Dhanush latest hits",
          uri: "https://raaga.gumlet.io/raagaimg/r_img/250/t/tc0001364.jpg?w=240&dpr=2.6",
        },
      ],
    },
  
  ];
  
  
  
const callSocketSlices = createSlice({
    name: 'callSocketSlice',
    initialState,
    reducers: {
        getDetails: (state) => {
            state.User = details
            state.Scrollimg = SECTIONS
        }
    }
})
export const { getDetails } = callSocketSlices.actions;
export default callSocketSlices.reducer;