import React from 'react';
import styled from "styled-components";
import {TabLink} from "../../../../components/TabLink";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <TabLink href={""}>{item}</TabLink>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    margin-bottom: 40px;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`

`



