"use client";
import EngagementIcon from "@/icons/engagement-icon";
import PythonIcon from "@/icons/python";
import ScratchIcon from "@/icons/scratch";
import colors from "@/lib/color";
import { InstagramIcon } from "lucide-react";
import React from "react";
import styled from "styled-components";

export default function Engagement() {
    return (
        <Section id="engagement" aria-label="Engagement associatif">
            <TitleSection>
                <EngagementIcon />
                ENGAGEMENT.SOC
            </TitleSection>
            <h3>
                <a href="https://www.ladndespetitsgenies.fr/">
                    L&apos;@dn des petits génies
                </a>
            </h3>
            <p>
                Bénévole au sein de l&apos;association L&apos;@DN des Petits
                Génies, où j&apos;interviens lors d&apos;ateliers
                d&apos;initiation à la programmation. Participation à
                l&apos;animation des ateliers Python et Scratch & Thymio pour
                accompagner les jeunes dans la découverte du code et de la
                robotique.
            </p>

            <EngagementList>
                <EngagementCard>
                    <ScratchIcon />

                    <EngagementData>
                        <h4>WORKSHOP</h4>
                        <h3>Scratch & Thymio robot</h3>
                        <p>7-9 ans</p>
                    </EngagementData>
                </EngagementCard>

                <EngagementCard>
                    <PythonIcon />
                    <EngagementData>
                        <h4>WORKSHOP</h4>
                        <h3>Python</h3>
                        <p>10-12 ans</p>
                    </EngagementData>
                </EngagementCard>

                <EngagementCard>
                    <InstagramIcon />
                    <EngagementData>
                        <h4>MISSION</h4>
                        <h3>Création de publication instagram</h3>
                    </EngagementData>
                </EngagementCard>
            </EngagementList>
        </Section>
    );
}

const Section = styled.section`
    border: 1px solid #222249;
    padding: 16px;
    box-sizing: border-box;

    p {
        color: grey;
    }
`;
const TitleSection = styled.h2`
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    gap: 8px;

    svg {
        width: 24px;
        height: 24px;
    }
`;

const EngagementList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    gap: 16px;
    padding: 0;
`;
const EngagementCard = styled.li`
    display: flex;
    list-style-type: none;
    width: 100%;
    gap: 8px;
    align-items: center;
    border: 1px solid #222249;
    background: #181834;
    padding: 8px 16px;
    border-radius: 4px;
    margin: 0;
    svg {
        width: 56px;
        height: 56px;
    }

    &:nth-child(6n + 1) {
        svg {
            color: rgba(${colors.primary.blue});
        }
        h4 {
            color: rgba(${colors.primary.blue});
        }
    }

    &:nth-child(6n + 2) {
        svg {
            color: rgba(${colors.primary.red});
        }
        h4 {
            color: rgba(${colors.primary.red});
        }
    }

    &:nth-child(6n + 3) {
        svg {
            color: rgba(${colors.primary.yellow});
        }
        h4 {
            color: rgba(${colors.primary.yellow});
        }
    }

    h3 {
        font-size: 1.2rem;
        margin: 4px 0;
    }

    h4 {
        font-size: 0.8rem;
        margin: 0;
    }
`;
const EngagementData = styled.div``;
