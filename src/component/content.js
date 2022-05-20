import { Fragment } from "react";
import { Link } from "react-router-dom";
import './component.css';

export default function Content() {
    const d = new Date();
    let date = d.toLocaleDateString();  

    return(
        <Fragment>
            <div className style={{width:"fit-content", height:"280px",paddingTop:"10%", margin:"0 auto"}}>
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
                    <div className="box">
                        <img src="https://www.mordeo.org/files/uploads/2020/06/Minecraft-Dungeons-Game-Poster-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                    <Link to='/game'>
                        <img src="https://media.gettyimages.com/photos/rock-paper-scissors-picture-id164817360?s=612x612"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="box">
                        <img src="https://i.pinimg.com/originals/dd/0c/c0/dd0cc00ef509393f4a6be7f53d8363a0.jpg"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://www.mordeo.org/files/uploads/2020/06/Minecraft-Dungeons-Game-Poster-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://i.pinimg.com/236x/01/51/77/01517797e7ff2092d0ba7c56b00bb60d.jpg"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://images.tokopedia.net/img/cache/700/product-1/2019/4/4/52702914/52702914_04297eb0-bd1a-4a0a-beee-7c47d5df3512_700_1052.jpg"/>
                        <div className="py-3 ">
                            <p className="text-center no-space">obama thrower</p>
                            <div className="d-flex mx-auto" style={{width:"fit-content"}}>
                                <i class="gg-eye text-center me-2 mt-1"></i>
                                <p className="text-center no-space">138,555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}