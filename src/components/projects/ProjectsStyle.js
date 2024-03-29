import styled from "styled-components";


export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 150px 200px;
    z-index: 1;
    align-items: center;

    @media (max-width: 960px) {
      padding: 66px 16px;
    }
    @media (max-width: 640) {
      padding: 32px 16px;
    }
    
  

`;

export const Heading = styled.h1`
    position: relative;
    display: flex;
    align-items: center;
    margin: 10px 0 40px;
    width: 100%;
    white-space: nowrap;
    font-size: 3.5rem;
    
    color: var(--color-light);
    line-height: 1.3;

    &:after {
        content: "";
        width: 100%;
        height: 1.5px;
        background: var(--color-light);
        margin-left: 50px;

`;

export const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid var(--color-primary);
    color:  var(--color-light-variant);
    font-size: 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    margin: 22px 0px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    &:active {
        background-color: var(--color-bg-variant);
    &:hover {
        background-color: var(--color-bg-variant);
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }

`;

export const Divider = styled.div`
    width: 1.5px;
    background: var(--color-primary);


`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;

`;




export const Grid = styled.div`
    display: grid;
    margin-top: 50px;
    margin-left: 10%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 5px;
    position: relative;

`;

export const ProjectCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap; wrap;
    background: var(--color-primary);


`;

export const Project = styled.div`
    display: grid;

`;

export const ProjectInner = styled.div`
    display: grid;

`;

export const ProjectHeader = styled.div`
    display: grid;

`;
export const Folder = styled.div`
    display: grid;

`;

export const ProjectLinks = styled.div`
    display: grid;

`;

export const IconLink = styled.div`
    display: grid;

`;

export const ProjectName = styled.div`
    display: grid;

`;

export const ProjectDescription = styled.div`
    display: grid;

`;