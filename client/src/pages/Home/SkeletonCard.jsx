import React from "react";
import { StyledCard } from "./styles/Card.styled";

const SkeletonCard = () => {

    return (
        <StyledCard className="card">
            <div className="header">
                    <img
                        src=""
                        className="header-img skeleton" alt="Skeleton"
                    />
                </div>
                <div class="title" data-title>
                        <div class="skeleton skeleton-text"></div>
                </div>
                <div data-body>
                    <div class="skeleton skeleton-text"></div>
                </div>
        </StyledCard>
)};

export default SkeletonCard;