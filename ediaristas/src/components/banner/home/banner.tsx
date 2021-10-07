import React from 'react'

interface BannerProps {
    title: string;
    subtitle?: string;
}

const Banner: React.FC<BannerProps> = (components: BannerProps) => {
    return (
        <h2>{components.title}{components.subtitle}</h2>

    )
}


export default Banner