import React from 'react'
import Block from './components/Blocks/Blocks.js'

export default function App(){
    const comp = [
        {name: 'Nutella', price: 161, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1865271/img_id3690065316049468561.jpeg/x166_trim", title: "Picture 1"},
        {name: 'Samsung Galaxy', price: 12360, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1909520/img_id935047671095587239.jpeg/x166_trim", title: "Picture 2"},
        {name: 'Ватные диски', price:49, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1943683/img_id8040905162239439616.jpeg/x166_trim", title: "Picture 3"},
        {name: 'Ванилин', price: 9, imgUrl: "https://avatars.mds.yandex.net/get-mpic/1808939/img_id4471438215285639540.png/x166_trim", title: "Picture 4"},
    ]
    return (
        <div>
            <Block name={comp[0].name} price={comp[0].price} imgUrl={comp[0].imgUrl} title={comp[0].title}  />
            <Block name={comp[1].name} price={comp[1].price} imgUrl={comp[1].imgUrl} title={comp[1].title}  />
            <Block name={comp[2].name} price={comp[2].price} imgUrl={comp[2].imgUrl} title={comp[2].title}  />
            <Block name={comp[3].name} price={comp[3].price} imgUrl={comp[3].imgUrl} title={comp[3].title}  />
        </div>
    )
}