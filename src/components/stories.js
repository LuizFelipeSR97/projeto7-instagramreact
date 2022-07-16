import Story from "./story"

function Stories(){
    return (
        <div class="stories">
            <Story user="9gag" imgUrl="assets/img/9gag.svg"/>
            <Story user="meowed" imgUrl="assets/img/meowed.svg"/>
            <Story user="barked" imgUrl="assets/img/barked.svg"/>
            <Story user="nathanwpylestrangeplanet" imgUrl="assets/img/nathanwpylestrangeplanet.svg"/>
            <Story user="wawawicomics" imgUrl="assets/img/wawawicomics.svg"/>
            <Story user="respondeai" imgUrl="assets/img/respondeai.svg"/>
            <Story user="filomoderna" imgUrl="assets/img/filomoderna.svg"/>
            <Story user="memeriagourmet" imgUrl="assets/img/memeriagourmet.svg"/>
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Stories