<template>
    <form @submit.prevent="submit">
        <div class="dimensions-container">
            <h3>Dimension</h3>
            <label>Height: </label>
            <input id="height" type="number" v-model="height" placeholder="height" @input="submit" />

            <label>Width: </label>
            <input id="width" type="number" v-model="width" placeholder="width" @input="submit" />
        </div>


    </form>
</template>

<script>
export default {
    props: {
        side: String,
    },
    data() {
        const placements = this.$store.getters.getPlacement;
        console.log(this.side);
        console.log(placements['frontSide'].width);
        return {
            width: placements[this.side].width,
            height: placements[this.side].height,

        };
    },
    methods: {
        submit() {
            console.log("Data submitted");
            // this.$store.commit({
            //     type: 'setLayerData',
            //     id: this.elementId,
            //     position: { x: this.x, y: this.y },
            //     size: this.size,
            //     color: this.color,
            // })
        },
    }
}
</script>