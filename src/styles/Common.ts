type FontPropsType = {
    family?: string,
    weight?: number,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number
}
export const font = ({family, weight, lineHeight, Fmin, Fmax}: FontPropsType) => `{
    font-family: ${family || "Montserrat"},
    font-weight: ${weight || 400},
    line-height: ${weight || 1.2}
    // font-size: calc( (100vw - 360px)/(1220 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

}`

