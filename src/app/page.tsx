"use client";
import Header from "@/layouts/header";
import colors from "@/lib/color";
import Contact from "@/section/contact";
import DeploymentHistory from "@/section/deployment-history";
import Engagement from "@/section/engagement";
import HeroHeader from "@/section/hero-header";
import Skills from "@/section/skills";
import styled from "styled-components";

export default function Home() {
    return (
        <Main>
            <Header />
            <HeroHeader />
            <Skills />
            <DeploymentHistory />
            <Engagement />
            <Contact />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        width: 90%;
        margin: 16px 0;

        &:nth-child(6n + 1) {
            h2 > svg {
                color: rgba(${colors.primary.blue});
            }
        }

        &:nth-child(6n + 2) {
            h2 > svg {
                color: rgba(${colors.primary.red});
            }
        }

        &:nth-child(6n + 3) {
            h2 > svg {
                color: rgba(${colors.primary.yellow});
            }
        }
    }
`;
