<template>
    <form @submit.prevent="submit">
        <h3>Position</h3>

        <input type="number" v-model="x" placeholder="X" />
        <input type="number" v-model="y" placeholder="Y" />


        <h3>Size px</h3>
        <input type="number" v-model="size" placeholder="size" @input="handleInput" />
        <div>
            <h3>Color</h3>
            <input type="color" v-model="color" />
        </div>
        <br>
        <button type="submit">
            Save
        </button>
        <br>
    </form>
</template>
<script>

export default {
    props: {
        elementId: Number,
    },
    data() {
        return {
            x: 0,
            y: 0,
            size: 0,
            color: "#e66465",
        };
    },
    components: {},
    computed: {

    },
    methods: {
        submit() {
            console.log("Data submitted");
            this.$store.commit({
                type: 'setLayerData',
                id: this.elementId,
                position: { x: this.x, y: this.y },
                size: this.size,
                color: this.color,
            })
        },
    }
}
</script>