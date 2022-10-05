<template>
    <div style="margin-top:20px">
        <span class="title-section">Variance:</span>
        <div class="rangeSlider">
            <input type="range" min="0" max="100" step="1" v-model="value" @input="updateSlider"
                :style="{ backgroundSize: backgroundSize }">
            <div class="input-number-container ms-5">
                <input class="numberInput" v-bind:min="min" v-bind:max="max" v-bind:step="step" v-model.number="value"
                    @input="updateSlider" type="number" />
                <div class="selectNumber">
                    <button class="increment" v-on:click.prevent="increment()">
                        <img :src="Up" alt="">
                    </button> 
                    <button class="decrement" v-on:click.prevent="decrement()">
                        <img :src="Down" alt="">
                    </button>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Up from "@/assets/up.svg";
import Down from "@/assets/down.svg";

export default {
    data() {
        return {
            value: 20,
            backgroundSize: '20% 100%',
            min: 1,
            max: 100,
            step: 1,
            Up,
            Down
        }
    },
    methods: {
        updateSlider(e) {
            let clickedElement = e.target,
                min = clickedElement.min,
                max = clickedElement.max,
                val = clickedElement.value;

            this.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        },
        updateInputSlider(e) {
            let clickedElement = e.target
            this.backgroundSize = clickedElement.value + '% 100%'
        },
        decrement: function () {
            if ((this.value - this.step) >= this.min) {
                this.value = (this.value - this.step);
            }
            return false;
        },
        increment: function () {
            if ((this.value + this.step) <= this.max) {
                this.value = (this.value + this.step);
            }
            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
.title-section{
    font-size: 30px;
}
.numberInput {
    text-align: center;
    width: 60px;
    height: 58px;
    border: 2px solid #B2B2B2;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-size: 20pt;
}

.selectNumber {
    border: 2px solid #B2B2B2;
    border-left: unset;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: #F0F0F0;
    height: 58px;
}

.decrement {
    display: flex;
    border: unset;
    border-bottom-right-radius: 12px;
    height: 24px;
    margin-top: 5px;
    align-items: flex-start;

    img {
        width: 15px;
    }
}

.increment {
    display: flex;
    border: unset;
    border-top-right-radius: 12px;
    height: 24px;
    margin-bottom: 5px;
    align-items: flex-end;

    img {
        width: 15px;
    }
}

.input-number-container {
    display: flex;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

.rangeSlider {
    display: flex;
    align-items: center;
    width: 500px;
}

.data {
    text-align: center;
    margin-top: 24px;
}

/* Slider CSS */
input[type=range] {
    -webkit-appearance: none;
    display: block;
    width: 100%;
    margin: 16px 0;
    background: #DDDDDD;
    background-image: -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #E52620), color-stop(100%, #E52620));
    background-image: -webkit-linear-gradient(left, #E52620 0%, #E52620 100%);
    background-image: -moz-linear-gradient(left, #E52620 0%, #E52620 100%);
    background-image: -o-linear-gradient(to right, #E52620 0%, #E52620 100%);
    background-image: linear-gradient(to right, #E52620 0%, #E52620 100%);
    background-repeat: no-repeat;

}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border-radius: 0px;
    border: none;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: none;
    border: 3px solid #E52620;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: transparent;
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: none;
    background: transparent;
    border-radius: 0px;
    border: none;
}

input[type=range]::-moz-range-thumb {
    box-shadow: none;
    border: 3px solid #E52620;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
}

input[type=range]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

input[type=range]::-ms-fill-lower {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-fill-upper {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
}

input[type=range]::-ms-thumb {
    box-shadow: none;
    border: 4px solid #ADD8E6;
    height: 16px;
    width: 16px;
    border-radius: 2px;
    background: #ffffff;
    cursor: pointer;
    height: 4px;
}

input[type=range]:focus::-ms-fill-lower {
    background: transparent;
}

input[type=range]:focus::-ms-fill-upper {
    background: transparent;
}

/* End Range Slider */
</style>