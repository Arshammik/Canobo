<template>
    <div @focus="handleFocus" @focusout="handleFocusOut" tabindex="0" id="app">
        <div :class="size" class="aselect">
            <span class="title">{{ title }}</span>
            <div class="selector" @click="toggle()">
                <div class="label">
                    <span :class="itemSelected ? 'item-selected' : ''">{{ titleValue }}</span>
                </div>
                <div class="arrow" :class="{ expanded: visible }"></div>
                <div :class="{ hidden: !visible, visible }">
                    <ul>
                        <li :class="{ current: listOptions === valueItem }" v-for="(item, index) in listOptions"
                            :key="index" @click="select(item)">{{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'list', 'title', 'size'],
    data() {
        return {
            visible: false,
            listItem: [],
            titleValue: null,
            valueItem: this.value,
            itemSelected:false
        }
    },
    mounted() {
        this.titleValue = this.value
    },
    computed: {
        listOptions() {
            return this.listItem = this.list
        },

        selectedValue: {
            get: function () {
                return this.valueItem = this.value
            },
            set: function (value) {
                this.valueItem = value
            }
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.titleValue = option;
            this.itemSelected = true
        },
        handleFocus() {
            this.visible = false
        },
        handleFocusOut() {
            this.visible = false
        }
    }
}
</script>

<style scoped lang="scss">
h1 {
    color: #f9f9f9;
    text-align: center;
    font-size: 36px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: "Mogra";
    margin-bottom: 0;
    text-shadow: 3px 4px 0px rgba(0, 0, 0, 0.3);
}

.aselect {
    width: 370px;
    margin: 20px auto;
    cursor: pointer;

    .title {
        font-size: 30px;
    }

    &.xl {
        width: 790px;
        @media (max-width: 1400px){
            width: 616px;
            margin-left: 50px;
        }
        ul{
            width: 100.5%;
            right: -2px;
        }
    }

    &.lg {
        width: 545px;
        ul{
          width: 100.7%;
        }
    }

    .selector {
        border: 2px solid #B2B2B2;
        background: #ffffff;
        position: relative;
        border-radius: 10px;

        .arrow {
            position: absolute;
            right: 10px;
            top: 25%;
            width: 28px;
            height: 33px;
            transform: rotateZ(0deg) translateY(0px);
            transition-duration: 0.5s;
            transition-timing-function: cubic-bezier(.59, 1.39, .37, 1.01);
            background-image: url('~@/assets/arrow.svg');
            background-repeat: no-repeat;
        }

        .expanded {
            transform: rotateZ(180deg) translateY(2px);
        }

        .label {
            display: block;
            padding: 9px 20px;
            font-size: 25px;
            color: #CCCCCC;
            font-style: italic;
        }
    }

    ul {
        width: 101%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 16px;
        border: 2px solid #b2b2b2;
        position: absolute;
        z-index: 1;
        background: #fff;
        top: 86%;
        border-top: unset;
        right: -2px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        max-height: 343px;
        overflow: auto;
    }

    li {
        padding: 12px;
        color: #666;
        font-size: 23px;
        margin: 7px;
        &:hover {
            background: rgb(245 245 245);
        }
    }

    .current {
        background: #eaeaea;
    }

    .hidden {
        visibility: hidden;
    }

    .visible {
        visibility: visible;
    }
}
.item-selected{
    color: black;
    font-style: normal;
}
</style>