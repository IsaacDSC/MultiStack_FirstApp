import React from 'react'

interface BannerProps {
    tite: string;
    subtitle?: string;
}

const Banner = async (components: BannerProps) => {
    return (
        <h2>{components.tite}</h2>
        <h5>{components.subtitle}</h5>
    )
}


export default Banner