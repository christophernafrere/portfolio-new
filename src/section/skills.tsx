import ChipIcon from "@/icons/chip-icon";
import CloudIcon from "@/icons/cloud-icon";
import CodeIcon from "@/icons/code-icon";
import DBIcon from "@/icons/db-icon";
import DockerIcon from "@/icons/docker-icon";
import JSIcon from "@/icons/js-icon";
import NestIcon from "@/icons/nest-icon";
import colors from "@/lib/color";
import styled from "styled-components";

export default function Skills() {
    return (
        <section>
            <TitleSection>
                <ChipIcon /> SYSTEM.CAPACILITIES[ ]
            </TitleSection>

            <SkillsList>
                <SkillCard>
                    <JSIcon />

                    <h3>Typescript</h3>
                </SkillCard>
                <SkillCard>
                    <CodeIcon />
                    <h3>Next.js</h3>
                </SkillCard>
                <SkillCard>
                    <NestIcon />
                    <h3>Nest.js</h3>
                </SkillCard>
                <SkillCard>
                    <DBIcon />
                    <h3>Postgresql</h3>
                </SkillCard>
                <SkillCard>
                    <DockerIcon />
                    <h3>Docker</h3>
                </SkillCard>
                <SkillCard>
                    <CloudIcon />
                    <h3>AWS</h3>
                </SkillCard>
            </SkillsList>
        </section>
    );
}

const TitleSection = styled.h2`
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 24px;
        height: 24px;
    }
`;

const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 8px;
    margin: 16px 0;
    padding: 0;
`;
const SkillCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 8px;
    list-style-type: none;
    background-color: #181834;
    border: 1px solid #222249;
    text-transform: uppercase;
    border-radius: 4px;
    h3 {
        font-size: 0.8rem;
        margin: 8px 0;
    }

    svg {
        width: 56px;
        height: 56px;
    }

    &:nth-child(3n + 1) {
        svg {
            color: rgba(${colors.primary.blue});
        }
    }
    &:nth-child(3n + 2) {
        svg {
            color: rgba(${colors.primary.red});
        }
    }

    &:nth-child(3n + 3) {
        svg {
            color: rgba(${colors.primary.yellow});
        }
    }
`;
