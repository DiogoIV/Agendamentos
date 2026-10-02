
const estiloSection = `flex
            flex-col
            justify-center
            items-center
            gap-8
            bg-[var(--color-primary)]
            rounded-lg
            min-h-96
            max-w-md
            w-full
            p-10
            m-auto
            text-white`

const estiloAviso = `
            flex 
            gap-2
            items-center
            pt-2                
            text-sm
            pl-2
            text-red-400
            `            

const estiloInputs = `
                    w-full rounded-lg
                    h-12
                    pl-12
                    border
                    outline-none

                    bg-gray-50

                    transition
                    focus:border-white
                    focus:ring-2
                    focus:ring-white/30
                    text-black
                    
                    placeholder:text-gray-400
                    

                    `  
                    
const estiloIconeExibir = `absolute
                                text-gray-400
                                top-1/2
                                -translate-y-1/2
                                right-2`                    

export {estiloSection, estiloAviso, estiloInputs, estiloIconeExibir};