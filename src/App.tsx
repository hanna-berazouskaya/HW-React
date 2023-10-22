import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    //обязана вернуть JSX
    console.log ("App rendering")

    let [ratingValue, setRatingValue] = useState <RatingValueType> (4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={"App"}>

            <OnOff on={switchOn} onChange={setSwitchOn} />

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed (!accordionCollapsed)} } />

            <hr/>
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <UncontrolledRating />
            <UncontrolledAccordion titleValue={"Menu"} />


            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1*/}


            {/*<UncontrolledAccordion titleValue={"Menu"} collapsed={true}/>
            <UncontrolledAccordion titleValue={"Users"} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType ={
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
