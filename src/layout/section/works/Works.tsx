import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {SectionTitle} from "../../../components/SectionTitle";
import crcg from "../../../assets/images/crcg.webp"
import pet_store from "../../../assets/images/pet-store.webp"
import bookstore from "../../../assets/images/mui-shop.webp"
import git_search from "../../../assets/images/git-search.webp"
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
        scr: crcg,
        title: "CRCG",
        text: "Landing page",
        type: "landing"
    },
    {
        scr: bookstore,
        title: "Bookstore model",
        text: "React",
        type: "react"
    },
    {
        scr: pet_store,
        title: "Pet's shelter",
        text: "spa",
        type: "spa"
    },
    {
        scr: git_search,
        title: "Search a Git repo",
        text: "React",
        type: "react"
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
                            text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>

    );
};