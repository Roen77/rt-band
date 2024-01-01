import tw, { TwStyle } from "twin.macro"

type WrapperVariant = 'default' | 'dark' | 'blue'

export interface ButtonProps {
    bg?: WrapperVariant
}

const containerVariants: Record<WrapperVariant, TwStyle> = {
    // Named class sets
    default: tw`bg-primary text-black`,
    dark: tw`bg-black text-white`,
    blue: tw`bg-blue-500`,
}

const base = tw`flex justify-center items-center h-[40px] px-3 w-full`
const styles = {
    base,
    square:({bg = 'default' }: ButtonProps) => [
        base,
        containerVariants[bg], // Grab the variant style via a prop
    ],
    rounded:({bg = 'default' }: ButtonProps) => [
        base,
        tw`rounded-3xl`,
        containerVariants[bg], // Grab the variant style via a prop
    ],
    column: tw`w-1/2`,
}

export default styles