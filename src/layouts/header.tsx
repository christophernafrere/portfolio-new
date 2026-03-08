import colors from "@/lib/color";
import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <h1>RX-NAF</h1>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    padding: 8px 16px;
    border-bottom: 1px solid rgba(${colors.primary.blue}, 30%);
    box-sizing: border-box;
`;
