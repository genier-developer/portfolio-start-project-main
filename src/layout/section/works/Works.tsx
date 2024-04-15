import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {SectionTitle} from "../../../components/SectionTitle";
import pets from "../../../assets/images/pets.webp"
import friendConnect from "../../../assets/images/friendConnect.webp"
import cards from '../../../assets/images/cards.webp'
import partner from "../../../assets/images/partner.webp"
import CRCGsite from "../../../assets/images/CRCG_site.webp"
import {Container} from "../../../components/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from "./Works_Styles"

const tabsItems: Array<{ title: string, status: TabsStatusType}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]

const worksData = [
    {
        scr: CRCGsite,
        title: "CRCG",
        text: "Landing page",
        type: "landing",
        code: 'https://github.com/genier-developer/CRCG',
        href : "https://genier-developer.github.io/CRCG/"
    },
    {
        scr: cards,
        title: "Let's start to learn!",
        text: "spa",
        type: "spa",
        code: 'https://github.com/GodDennis/Cards/tree/main',
        href : "https://cards-two-xi-78.vercel.app/"
    },
    {
        scr: pets,
        title: "Pet's shelter",
        text: "spa",
        type: "spa",
        code: 'https://github.com/genier-developer/pet-firebase',
        href : "https://pet-firebase.vercel.app/"
    },
    {
        scr: partner,
        title: "driving school Partner",
        text: "Landing page",
        type: "react",
        code : "https://github.com/genier-developer/partnerauto",
        href: "https://genier-developer.github.io/partnerauto/"
    },
    {
        scr: friendConnect,
        title: "Friend Connect net",
        text: "spa",
        type: "spa",
        code : "https://github.com/genier-developer/friend-connect-net",
        href: "https://genier-developer.github.io/friend-connect-net/"
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")

    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">

                    {filteredWorks.map((w) => {
                        return <Work
                            src={w.scr}
                            title={w.title}
                            text={w.text}
                            href={w.href}
                            code={w.code}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};