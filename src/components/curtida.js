import React from 'react'
   
export default function Curtida(){

    const [classname, setClassname] = React.useState("md hydrated")
    const [ionName, setIonName] = React.useState("heart-outline")


    return (
        <ion-icon name={ionName} class={classname} onClick={
            () => {
                if (classname==="md hydrated"){
                    setClassname("liked md hydrated")
                    setIonName("heart")
                } else {
                    setClassname("md hydrated")
                    setIonName("heart-outline")
                }
            }
        }>
        </ion-icon>
    )
}

//So falta fazer o esquema do like pra quando der duplo clique nas imagens