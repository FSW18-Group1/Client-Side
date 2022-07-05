import { Fragment, useState } from "react";
import { Link} from "react-router-dom"; 
import './component.css';

export default function Content() {
    const d = new Date();
    let date = d.toLocaleDateString(); 
    const [collection, setCollection ] = useState([
        {
            title: "minecraft",
            src: "https://www.mordeo.org/files/uploads/2020/06/Minecraft-Dungeons-Game-Poster-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg",
            views: 1385,
            id: 3,
            playable: true
        },
        {
            title: "pingsut",
            src: "https://media.gettyimages.com/photos/rock-paper-scissors-picture-id164817360?s=612x612",
            views: 5210,
            id: 1,
            playable: false
        },
        {
            title: "capsa",
            src: "https://i.pinimg.com/originals/dd/0c/c0/dd0cc00ef509393f4a6be7f53d8363a0.jpg",
            views: 1110,
            id: 2,
            playable: true
        },
        {
            title: "Condition zero",
            src: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/e84b99119816b4386c3734565391ac3d.jpg",
            views: 2556,
            id: 4,
            playable: true
        },
        {
            title: "please don't bully",
            src: "https://i.pinimg.com/236x/01/51/77/01517797e7ff2092d0ba7c56b00bb60d.jpg",
            views: 6666,
            id: 5,
            playable: true
        },
        {
            title: "Bully 2",
            src: "https://images.tokopedia.net/img/cache/700/product-1/2019/4/4/52702914/52702914_04297eb0-bd1a-4a0a-beee-7c47d5df3512_700_1052.jpg",
            views: 6611,
            id: 6,
            playable: true
        },
    ])

    return(
        <Fragment>
            <div style={{width:"fit-content", height:"280px",paddingTop:"10%", margin:"0 auto"}}>
                <div className="slide d-flex justify-content-between">
                    <div className="text">
                        <h3 className="py-0 my-0">Recent Update</h3>
                        <p className="pb-0 mb-2">{date}</p>
                    </div>
                    <div className="carousel">
                        <div className="d-flex">
                            <p className="arrow" >All</p>
                            <div className="d-flex ms-2">
                                <p className="arrow">{'<'}</p>
                                <p className="arrow" >{'>'}</p>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div className="main-content d-flex justify-content-between">
                    {collection.map((item) =>{
                        const text = <p>{item.title}</p>
                        const title = item.playable? <strike>{text}</strike>: text
                        return(
                            <div key={item.id} className="box">
                                <Link to={`gamepage/${item.id}`}>
                                    <img alt="ada gambar" src={item.src}/>
                                    <div className="py-3 ">
                                        <div className="text-center no-space" data-testid={`content-${item.id}`}>{title}</div>
                                        <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                            <i className="gg-eye text-center me-2 mt-1"></i>
                                            <p className="text-center no-space">{item.views}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}
