<template>
    <form @submit.prevent="submit">
        <div class="position-container">
            <h3>Position</h3>
            <label for="x">X: </label>
            <input id="x" class="position-input" type="number" v-model="x" placeholder="X" @input="submit" />
            <label for="y">Y: </label>
            <input id="y" class="position-input" type="number" v-model="y" placeholder="Y" @input="submit" />
        </div>

        <div class="position-container">
            <h3>Size px</h3>
            <label for="x">Side Size: </label>
            <input type="number" class="position-input" v-model="size" placeholder="size" @input="submit" />
        </div>
        <div class="position-container">
            <h3>Color</h3>
            <input type="color" class="position-input" v-model="color" @input="submit" />
        </div>
    </form>
</template>


<script>
export default {
    props: {
        elementId: Number,
    },
    data() {
        const layer = this.$store.getters.getLayer;
        return {
            x: layer[this.elementId].position.x,
            y: layer[this.elementId].position.y,
            size: layer[this.elementId].size,
            color: layer[this.elementId].color,
        };
    },
    methods: {
        submit() {
            this.$store.commit({
                type: 'setLayerData',
                id: this.elementId,
                position: { x: this.x, y: this.y },
                centre: { x: this.x/2, y: this.y/2 },
                size: this.size,
                color: this.color,
            })
        },
    }
}
</script>